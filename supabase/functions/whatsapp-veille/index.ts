// Follow this setup guide to integrate the Deno runtime into your application:
// https://deno.land/manual/examples/hello_world

import { serve } from "https://deno.land/std@0.168.0/http/server.ts"
import { createClient } from 'https://esm.sh/@supabase/supabase-js@2'

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
}

// Types pour les commandes et le contexte
type Command = {
  type: 'generate' | 'modify' | 'approve' | 'help' | 'greeting' | 'unknown';
  topic?: string;
  articleId?: string;
  instructions?: string;
  context?: string;
}

// Fonction pour analyser le message de manière naturelle
function parseNaturalMessage(message: string): Command {
  const lowerMessage = message.toLowerCase().trim();
  
  // Salutations
  if (lowerMessage.match(/^(bonjour|salut|hello|hi|hey|bonsoir)/i)) {
    return {
      type: 'greeting',
      context: 'greeting'
    };
  }

  // Génération d'article
  if (lowerMessage.match(/(générer|créer|faire|écrire|rédiger).*(article|texte|contenu)/i)) {
    const topic = message.replace(/(générer|créer|faire|écrire|rédiger).*(article|texte|contenu).*(sur|à propos de|concernant)?/i, '').trim();
    return {
      type: 'generate',
      topic,
      context: 'generation'
    };
  }

  // Modification d'article
  if (lowerMessage.match(/(modifier|changer|ajuster|corriger).*(article|texte|contenu)/i)) {
    const match = message.match(/(?:article|texte|contenu)\s+(\w+)/i);
    const articleId = match ? match[1] : undefined;
    const instructions = message.replace(/(modifier|changer|ajuster|corriger).*(article|texte|contenu)\s+\w+/i, '').trim();
    return {
      type: 'modify',
      articleId,
      instructions,
      context: 'modification'
    };
  }

  // Publication d'article
  if (lowerMessage.match(/(publier|mettre en ligne|diffuser).*(article|texte|contenu)/i)) {
    const match = message.match(/(?:article|texte|contenu)\s+(\w+)/i);
    const articleId = match ? match[1] : undefined;
    return {
      type: 'approve',
      articleId,
      context: 'publication'
    };
  }

  // Aide
  if (lowerMessage.match(/(aide|help|comment faire|que puis-je faire)/i)) {
    return {
      type: 'help',
      context: 'help'
    };
  }

  return {
    type: 'unknown',
    context: 'unknown'
  };
}

// Fonction pour envoyer des messages WhatsApp via Twilio API HTTP
async function sendWhatsAppMessage(to: string, message: string) {
  const TWILIO_ACCOUNT_SID = Deno.env.get('TWILIO_ACCOUNT_SID')
  const TWILIO_AUTH_TOKEN = Deno.env.get('TWILIO_AUTH_TOKEN')
  const WHATSAPP_NUMBER = Deno.env.get('TWILIO_WHATSAPP_NUMBER')

  if (!TWILIO_ACCOUNT_SID || !TWILIO_AUTH_TOKEN || !WHATSAPP_NUMBER) {
    console.error('Missing Twilio credentials');
    return; // Retourner silencieusement si les credentials sont manquants
  }

  try {
    // Ajouter un délai de 2 secondes entre les requêtes
    await new Promise(resolve => setTimeout(resolve, 2000));

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
      const errorText = await response.text();
      console.error('Erreur Twilio:', {
        status: response.status,
        statusText: response.statusText,
        error: errorText
      });

      if (response.status === 429) {
        // Si erreur 429 (Too Many Requests), attendre plus longtemps
        await new Promise(resolve => setTimeout(resolve, 10000));
        return sendWhatsAppMessage(to, message); // Réessayer
      }

      // Si erreur de limite de messages
      if (response.status === 403 && errorText.includes('63038')) {
        console.error('Limite de messages Twilio atteinte');
        return; // Retourner silencieusement
      }

      throw new Error(`Twilio API error: ${response.statusText} - ${errorText}`)
    }

    const data = await response.json();
    console.log('Message WhatsApp envoyé avec succès:', data.sid);
    return data;
  } catch (error) {
    console.error('Erreur lors de l\'envoi du message WhatsApp:', error)
    // Ne pas propager l'erreur pour éviter les boucles
    return;
  }
}

// Fonction pour gérer les salutations
async function handleGreeting(from: string) {
  try {
    const greetingMessage = `Bonjour ! Je suis votre assistant pour la veille réglementaire. Que souhaitez-vous faire ?

1. Générer un nouvel article sur un sujet spécifique
2. Modifier un article existant
3. Publier un article
4. Voir les articles disponibles

Dites-moi simplement ce que vous voulez faire, par exemple :
"Je voudrais un article sur la RE2020"
ou
"Peux-tu modifier l'article sur les normes d'isolation ?"`;

    await sendWhatsAppMessage(from, greetingMessage);
    return new Response('OK');
  } catch (error) {
    console.error('Erreur dans handleGreeting:', error);
    // En cas d'erreur, on renvoie quand même une réponse 200 pour Twilio
    return new Response('OK');
  }
}

// Fonction pour gérer la génération d'article
async function handleGenerate(supabaseClient: any, command: Command, from: string) {
  console.log('Début de la génération d\'article avec le sujet:', command.topic);

  try {
    // Message de confirmation de début
    await sendWhatsAppMessage(
      from,
      `Je vais générer un article sur "${command.topic}". Cela peut prendre quelques instants...`
    );

    // Appeler la fonction generate-veille-article
    const response = await fetch(
      `${Deno.env.get('SUPABASE_URL')}/functions/v1/generate-veille-article`,
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${Deno.env.get('SUPABASE_SERVICE_ROLE_KEY')}`,
        },
        body: JSON.stringify({
          url: command.topic || 'manquant', // Assurer qu'une URL est toujours fournie
          supabaseUrl: Deno.env.get('SUPABASE_URL'),
          supabaseKey: Deno.env.get('SUPABASE_SERVICE_ROLE_KEY'),
        }),
      }
    );

    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(`Erreur lors de la génération: ${errorData.error || response.statusText}`);
    }

    const data = await response.json();
    if (!data.success) {
      throw new Error(data.error || 'Erreur inconnue lors de la génération');
    }

    // Envoyer l'article complet
    await sendWhatsAppMessage(
      from,
      `Voici l'article que j'ai généré pour vous :\n\nTitre: ${data.article.title}\n\nRésumé: ${data.article.summary}\n\nContenu:\n${data.article.content}\n\nQue souhaitez-vous faire maintenant ?\n1. Modifier cet article\n2. Le publier directement\n3. Générer un autre article\n\nDites-moi simplement ce que vous préférez.`
    );

    return new Response('OK');
  } catch (error) {
    console.error('Erreur dans handleGenerate:', error);
    await sendWhatsAppMessage(
      from,
      `Je suis désolé, j'ai rencontré une difficulté lors de la génération de l'article. Voulez-vous réessayer avec un autre sujet ?`
    );
    return new Response('OK'); // Toujours renvoyer 200 pour Twilio
  }
}

// Fonction pour gérer la modification d'article
async function handleModify(supabaseClient: any, command: Command, from: string) {
  try {
    if (!command.articleId) {
      await sendWhatsAppMessage(
        from,
        `Je ne suis pas sûr de quel article vous parlez. Pourriez-vous me préciser l'identifiant de l'article à modifier ?`
      );
      return new Response('OK');
    }

    await sendWhatsAppMessage(
      from,
      `Je vais modifier l'article ${command.articleId} selon vos instructions. Que souhaitez-vous changer exactement ?`
    );

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
      `Je suis désolé, j'ai rencontré une difficulté lors de la modification. Voulez-vous réessayer ?`
    )
    return new Response('Error', { status: 500 })
  }
}

// Fonction pour gérer l'approbation d'article
async function handleApprove(supabaseClient: any, command: Command, from: string) {
  try {
    if (!command.articleId) {
      await sendWhatsAppMessage(
        from,
        `Je ne suis pas sûr de quel article vous parlez. Pourriez-vous me préciser l'identifiant de l'article à publier ?`
      );
      return new Response('OK');
    }

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
      `L'article a été publié avec succès ! Que souhaitez-vous faire maintenant ?\n1. Générer un nouvel article\n2. Modifier un autre article\n3. Voir les articles publiés`
    )

    return new Response('OK')
  } catch (error) {
    console.error('Erreur dans handleApprove:', error)
    await sendWhatsAppMessage(
      from,
      `Je suis désolé, j'ai rencontré une difficulté lors de la publication. Voulez-vous réessayer ?`
    )
    return new Response('Error', { status: 500 })
  }
}

serve(async (req) => {
  console.log('Nouvelle requête reçue:', {
    method: req.method,
    headers: Object.fromEntries(req.headers.entries()),
    url: req.url
  });
  
  if (req.method === 'OPTIONS') {
    console.log('Réponse OPTIONS envoyée');
    return new Response('ok', { headers: corsHeaders })
  }

  try {
    // Get environment variables
    const SUPABASE_URL = Deno.env.get('SUPABASE_URL')
    const SUPABASE_SERVICE_ROLE_KEY = Deno.env.get('SUPABASE_SERVICE_ROLE_KEY')

    if (!SUPABASE_URL || !SUPABASE_SERVICE_ROLE_KEY) {
      console.error('Variables d\'environnement manquantes');
      throw new Error('Missing Supabase credentials')
    }

    // Parse Twilio webhook
    let message = ''
    let from = ''

    // Vérifier le type de contenu
    const contentType = req.headers.get('content-type') || ''
    console.log('Content-Type:', contentType);
    
    if (contentType.includes('application/x-www-form-urlencoded')) {
      const formData = await req.formData()
      message = formData.get('Body')?.toString() ?? ''
      from = formData.get('From')?.toString() ?? ''
      console.log('Message reçu (form):', { message, from });
    } else if (contentType.includes('application/json')) {
      const json = await req.json()
      message = json.Body ?? ''
      from = json.From ?? ''
      console.log('Message reçu (json):', { message, from });
    } else {
      console.error('Type de contenu non supporté:', contentType);
      throw new Error('Unsupported content type')
    }

    // Initialize Supabase client
    const supabaseClient = createClient(SUPABASE_URL, SUPABASE_SERVICE_ROLE_KEY)

    // Parse WhatsApp command
    const command = parseNaturalMessage(message)
    console.log('Commande analysée:', command);
    
    // Handle command
    switch (command.type) {
      case 'generate':
        console.log('Traitement de la commande generate');
        return await handleGenerate(supabaseClient, command, from)
      case 'modify':
        console.log('Traitement de la commande modify');
        return await handleModify(supabaseClient, command, from)
      case 'approve':
        console.log('Traitement de la commande approve');
        return await handleApprove(supabaseClient, command, from)
      case 'help':
        console.log('Traitement de la commande help');
        return await handleGreeting(from)
      case 'greeting':
        console.log('Traitement de la commande greeting');
        return await handleGreeting(from)
      default:
        console.log('Commande non reconnue');
        await sendWhatsAppMessage(from, `Commande non reconnue. Utilisez /veille help pour voir les commandes disponibles.`)
        return new Response('OK')
    }
  } catch (error) {
    console.error('Erreur dans le traitement de la requête:', error)
    // Toujours renvoyer une réponse 200 pour Twilio
    return new Response(
      JSON.stringify({ error: error.message }),
      { 
        headers: { 
          ...corsHeaders, 
          'Content-Type': 'application/json'
        },
        status: 200
      }
    )
  }
}) 