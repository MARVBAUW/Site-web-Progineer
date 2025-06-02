import { serve } from "https://deno.land/std@0.168.0/http/server.ts"
import { createClient } from 'https://esm.sh/@supabase/supabase-js@2'
import { Twilio } from 'https://esm.sh/twilio@4.19.0'

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
}

// Initialiser le client Twilio
const twilioClient = new Twilio(
  Deno.env.get('TWILIO_ACCOUNT_SID') ?? '',
  Deno.env.get('TWILIO_AUTH_TOKEN') ?? ''
)

const WHATSAPP_NUMBER = Deno.env.get('TWILIO_WHATSAPP_NUMBER') ?? ''

serve(async (req) => {
  if (req.method === 'OPTIONS') {
    return new Response('ok', { headers: corsHeaders })
  }

  try {
    // Parser le webhook Twilio
    const formData = await req.formData()
    const message = formData.get('Body')?.toString() ?? ''
    const from = formData.get('From')?.toString() ?? ''
    
    // Initialiser le client Supabase
    const supabaseClient = createClient(
      Deno.env.get('SUPABASE_URL') ?? '',
      Deno.env.get('SUPABASE_SERVICE_ROLE_KEY') ?? ''
    )

    // Parser la commande WhatsApp
    const command = parseWhatsAppCommand(message)
    
    switch (command.type) {
      case 'generate':
        return await handleGenerate(supabaseClient, command, from)
      case 'modify':
        return await handleModify(supabaseClient, command, from)
      case 'approve':
        return await handleApprove(supabaseClient, command, from)
      case 'help':
        return await handleHelp(from)
      default:
        // Envoyer un message d'aide si la commande n'est pas reconnue
        await sendWhatsAppMessage(from, `Commande non reconnue. Utilisez /veille help pour voir les commandes disponibles.`)
        return new Response('OK')
    }
  } catch (error) {
    console.error('Erreur:', error)
    return new Response('Erreur interne')
  }
})

// Fonction pour envoyer des messages WhatsApp via Twilio
async function sendWhatsAppMessage(to: string, message: string) {
  try {
    await twilioClient.messages.create({
      body: message,
      from: `whatsapp:${WHATSAPP_NUMBER}`,
      to: `whatsapp:${to}`
    })
  } catch (error) {
    console.error('Erreur lors de l\'envoi du message WhatsApp:', error)
  }
}

// Fonction d'aide
async function handleHelp(from: string) {
  const helpMessage = `
Commandes disponibles:

/veille generate [sujet]
- Génère un nouvel article sur le sujet spécifié

/veille modify [id] [instructions]
- Modifie l'article spécifié selon les instructions

/veille approve [id]
- Approuve et publie l'article

/veille help
- Affiche ce message d'aide
`
  await sendWhatsAppMessage(from, helpMessage)
  return new Response('OK')
}

// Fonctions de gestion des commandes
async function handleGenerate(supabaseClient: any, command: any, from: string) {
  // Appeler la fonction de génération d'article
  const { data, error } = await supabaseClient.functions.invoke('generate-veille-article', {
    body: { 
      query: command.topic,
      source: 'whatsapp',
      whatsapp_thread: from
    }
  })

  if (error) throw error

  // Envoyer la réponse via WhatsApp
  await sendWhatsAppMessage(from, `Article généré avec succès!\n\nTitre: ${data.article.title}\n\nRésumé: ${data.article.excerpt}\n\nPour modifier: /veille modify ${data.article.id}\nPour approuver: /veille approve ${data.article.id}`)

  return new Response(
    JSON.stringify({ success: true, data }),
    { headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
  )
}

async function handleModify(supabaseClient: any, command: any, from: string) {
  // Récupérer l'article
  const { data: article, error: fetchError } = await supabaseClient
    .from('veille_articles')
    .select('*')
    .eq('id', command.articleId)
    .single()

  if (fetchError) throw fetchError

  // Appeler Claude pour les modifications
  const response = await fetch('https://api.anthropic.com/v1/messages', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'x-api-key': Deno.env.get('ANTHROPIC_API_KEY') ?? '',
      'anthropic-version': '2023-06-01'
    },
    body: JSON.stringify({
      model: 'claude-3-opus-20240229',
      max_tokens: 4000,
      messages: [
        { 
          role: 'user', 
          content: `Modifie l'article suivant selon ces instructions: ${command.instructions}\n\nArticle actuel:\n${JSON.stringify(article, null, 2)}`
        }
      ]
    })
  })

  if (!response.ok) throw new Error('Erreur lors de la modification')

  const modifiedArticle = await response.json()

  // Mettre à jour l'article
  const { error: updateError } = await supabaseClient
    .from('veille_articles')
    .update({
      ...modifiedArticle,
      last_modified_at: new Date().toISOString(),
      last_modified_by: from
    })
    .eq('id', command.articleId)

  if (updateError) throw updateError

  // Envoyer la confirmation via WhatsApp
  await sendWhatsAppMessage(from, `Article modifié avec succès!\n\nPour approuver: /veille approve ${command.articleId}`)

  return new Response(
    JSON.stringify({ success: true }),
    { headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
  )
}

async function handleApprove(supabaseClient: any, command: any, from: string) {
  const { error } = await supabaseClient
    .from('veille_articles')
    .update({ 
      status: 'published',
      published_at: new Date().toISOString()
    })
    .eq('id', command.articleId)

  if (error) throw error

  // Envoyer la confirmation via WhatsApp
  await sendWhatsAppMessage(from, `Article publié avec succès!`)

  return new Response(
    JSON.stringify({ success: true }),
    { headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
  )
}

// Fonctions utilitaires
function parseWhatsAppCommand(message: string) {
  const parts = message.split(' ')
  const command = parts[0].toLowerCase()

  switch (command) {
    case '/veille':
      if (parts[1] === 'generate') {
        return {
          type: 'generate',
          topic: parts.slice(2).join(' ')
        }
      }
      if (parts[1] === 'modify') {
        return {
          type: 'modify',
          articleId: parts[2],
          instructions: parts.slice(3).join(' ')
        }
      }
      if (parts[1] === 'approve') {
        return {
          type: 'approve',
          articleId: parts[2]
        }
      }
      // ... autres commandes
      break
    default:
      return { type: 'unknown' }
  }
} 