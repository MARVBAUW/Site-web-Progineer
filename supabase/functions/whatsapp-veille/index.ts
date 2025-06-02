// Follow this setup guide to integrate the Deno runtime into your application:
// https://deno.land/manual/examples/hello_world

import { serve } from "https://deno.land/std@0.168.0/http/server.ts"
import { createClient } from 'https://esm.sh/@supabase/supabase-js@2'

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
}

// Types pour les commandes
type Command = {
  type: 'generate' | 'modify' | 'approve' | 'help' | 'unknown';
  topic?: string;
  articleId?: string;
  instructions?: string;
}

// Fonctions utilitaires
function parseWhatsAppCommand(message: string): Command {
  const parts = message.split(' ')
  const command = parts[0].toLowerCase()

  switch (command) {
    case '/veille':
      if (parts[1] === 'generate') {
        return {
          type: 'generate',
          topic: parts.slice(2).join(' ')
        }
      } else if (parts[1] === 'modify') {
        return {
          type: 'modify',
          articleId: parts[2],
          instructions: parts.slice(3).join(' ')
        }
      } else if (parts[1] === 'approve') {
        return {
          type: 'approve',
          articleId: parts[2]
        }
      } else if (parts[1] === 'help') {
        return { type: 'help' }
      }
      return { type: 'unknown' }
    default:
      return { type: 'unknown' }
  }
}

// Fonction pour envoyer des messages WhatsApp via Twilio API HTTP
async function sendWhatsAppMessage(to: string, message: string) {
  const TWILIO_ACCOUNT_SID = Deno.env.get('TWILIO_ACCOUNT_SID')
  const TWILIO_AUTH_TOKEN = Deno.env.get('TWILIO_AUTH_TOKEN')
  const WHATSAPP_NUMBER = Deno.env.get('TWILIO_WHATSAPP_NUMBER')

  if (!TWILIO_ACCOUNT_SID || !TWILIO_AUTH_TOKEN || !WHATSAPP_NUMBER) {
    throw new Error('Missing Twilio credentials')
  }

  try {
    const url = `https://api.twilio.com/2010-04-01/Accounts/${TWILIO_ACCOUNT_SID}/Messages.json`
    const auth = 'Basic ' + btoa(`${TWILIO_ACCOUNT_SID}:${TWILIO_AUTH_TOKEN}`)
    const params = new URLSearchParams({
      From: `whatsapp:${WHATSAPP_NUMBER}`,
      To: to.startsWith('whatsapp:') ? to : `whatsapp:${to}`,
      Body: message,
    })

    const response = await fetch(url, {
      method: 'POST',
      headers: {
        'Authorization': auth,
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: params,
    })

    if (!response.ok) {
      throw new Error(`Twilio API error: ${response.statusText}`)
    }
  } catch (error) {
    console.error('Erreur lors de l\'envoi du message WhatsApp:', error)
    throw error
  }
}

// Fonction pour gérer la commande help
async function handleHelp(from: string) {
  const helpMessage = `Voici les commandes disponibles :
/veille generate <sujet> - Génère un nouvel article sur le sujet spécifié
/veille modify <id> <instructions> - Modifie un article existant
/veille approve <id> - Approuve un article pour publication
/veille help - Affiche ce message d'aide`

  await sendWhatsAppMessage(from, helpMessage)
  return new Response('OK')
}

// Fonction pour gérer la génération d'article
async function handleGenerate(supabaseClient: any, command: Command, from: string) {
  console.log('Début de la génération d\'article avec le sujet:', command.topic)

  try {
    // Appeler la fonction generate-veille-article
    console.log('Appel de la fonction generate-veille-article...')
    const response = await fetch(
      `${Deno.env.get('SUPABASE_URL')}/functions/v1/generate-veille-article`,
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${Deno.env.get('SUPABASE_SERVICE_ROLE_KEY')}`,
        },
        body: JSON.stringify({
          url: command.topic,
          supabaseUrl: Deno.env.get('SUPABASE_URL'),
          supabaseKey: Deno.env.get('SUPABASE_SERVICE_ROLE_KEY'),
        }),
      }
    )

    if (!response.ok) {
      console.error('Erreur dans handleGenerate:', response.statusText)
      throw new Error(`Erreur lors de l'appel à generate-veille-article: ${response.statusText}`)
    }

    const data = await response.json()
    if (!data.success) {
      throw new Error(data.error || 'Erreur inconnue lors de la génération')
    }

    // Envoyer un message de confirmation
    await sendWhatsAppMessage(
      from,
      `Article généré avec succès ! ID: ${data.article.id}\n\nTitre: ${data.article.title}\n\nRésumé: ${data.article.summary}\n\nUtilisez /veille modify ${data.article.id} <instructions> pour modifier l'article.`
    )

    return new Response('OK')
  } catch (error) {
    console.error('Erreur dans handleGenerate:', error)
    await sendWhatsAppMessage(
      from,
      `Désolé, une erreur s'est produite lors de la génération de l'article. Veuillez réessayer.`
    )
    return new Response('Error', { status: 500 })
  }
}

// Fonction pour gérer la modification d'article
async function handleModify(supabaseClient: any, command: Command, from: string) {
  try {
    // Appeler la fonction modify-veille-article
    const response = await fetch(
      `${Deno.env.get('SUPABASE_URL')}/functions/v1/modify-veille-article`,
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${Deno.env.get('SUPABASE_SERVICE_ROLE_KEY')}`,
        },
        body: JSON.stringify({
          articleId: command.articleId,
          instructions: command.instructions,
          supabaseUrl: Deno.env.get('SUPABASE_URL'),
          supabaseKey: Deno.env.get('SUPABASE_SERVICE_ROLE_KEY'),
        }),
      }
    )

    if (!response.ok) {
      throw new Error(`Erreur lors de l'appel à modify-veille-article: ${response.statusText}`)
    }

    const data = await response.json()
    if (!data.success) {
      throw new Error(data.error || 'Erreur inconnue lors de la modification')
    }

    // Envoyer un message de confirmation
    await sendWhatsAppMessage(
      from,
      `Article modifié avec succès !\n\nTitre: ${data.article.title}\n\nRésumé: ${data.article.summary}\n\nUtilisez /veille approve ${data.article.id} pour approuver l'article.`
    )

    return new Response('OK')
  } catch (error) {
    console.error('Erreur dans handleModify:', error)
    await sendWhatsAppMessage(
      from,
      `Désolé, une erreur s'est produite lors de la modification de l'article. Veuillez réessayer.`
    )
    return new Response('Error', { status: 500 })
  }
}

// Fonction pour gérer l'approbation d'article
async function handleApprove(supabaseClient: any, command: Command, from: string) {
  try {
    // Mettre à jour le statut de l'article
    const { data: article, error } = await supabaseClient
      .from('veille_articles')
      .update({
        status: 'published',
        published_at: new Date().toISOString(),
        last_modified_at: new Date().toISOString(),
        last_modified_by: from
      })
      .eq('id', command.articleId)
      .select()
      .single()

    if (error) {
      throw error
    }

    // Envoyer un message de confirmation
    await sendWhatsAppMessage(
      from,
      `Article approuvé et publié avec succès !\n\nTitre: ${article.title}\n\nRésumé: ${article.summary}`
    )

    return new Response('OK')
  } catch (error) {
    console.error('Erreur dans handleApprove:', error)
    await sendWhatsAppMessage(
      from,
      `Désolé, une erreur s'est produite lors de l'approbation de l'article. Veuillez réessayer.`
    )
    return new Response('Error', { status: 500 })
  }
}

serve(async (req) => {
  if (req.method === 'OPTIONS') {
    return new Response('ok', { headers: corsHeaders })
  }

  try {
    // Get environment variables
    const SUPABASE_URL = Deno.env.get('SUPABASE_URL')
    const SUPABASE_SERVICE_ROLE_KEY = Deno.env.get('SUPABASE_SERVICE_ROLE_KEY')

    if (!SUPABASE_URL || !SUPABASE_SERVICE_ROLE_KEY) {
      throw new Error('Missing Supabase credentials')
    }

    // Parse Twilio webhook
    let message = ''
    let from = ''

    // Vérifier le type de contenu
    const contentType = req.headers.get('content-type') || ''
    
    if (contentType.includes('application/x-www-form-urlencoded')) {
      const formData = await req.formData()
      message = formData.get('Body')?.toString() ?? ''
      from = formData.get('From')?.toString() ?? ''
    } else if (contentType.includes('application/json')) {
      const json = await req.json()
      message = json.Body ?? ''
      from = json.From ?? ''
    } else {
      throw new Error('Unsupported content type')
    }

    // Initialize Supabase client
    const supabaseClient = createClient(SUPABASE_URL, SUPABASE_SERVICE_ROLE_KEY)

    // Parse WhatsApp command
    const command = parseWhatsAppCommand(message)
    
    // Handle command
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
        await sendWhatsAppMessage(from, `Commande non reconnue. Utilisez /veille help pour voir les commandes disponibles.`)
        return new Response('OK')
    }
  } catch (error) {
    console.error('Error:', error)
    return new Response(
      JSON.stringify({ error: error.message }),
      { headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
    )
  }
}) 