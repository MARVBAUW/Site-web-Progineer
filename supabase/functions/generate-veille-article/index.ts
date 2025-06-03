// Follow this setup guide to integrate the Deno runtime into your application:
// https://deno.land/manual/examples/hello_world

import { serve } from "https://deno.land/std@0.168.0/http/server.ts"
import { createClient } from "https://esm.sh/@supabase/supabase-js@2"
import { v4 as uuidv4 } from 'https://esm.sh/uuid@9.0.0'

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
  'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, OPTIONS',
  'Access-Control-Max-Age': '86400',
}

// Types pour les articles
type Article = {
  title: string;
  content: string;
  summary: string;
  keywords: string[];
  created_at: string;
  source: string;
  status: 'draft' | 'published';
}

type ClaudeResponse = {
  content: Array<{
    text: string;
  }>;
}

serve(async (req: Request) => {
  if (req.method === 'OPTIONS') {
    return new Response('ok', { headers: corsHeaders })
  }

  try {
    console.log('Début de la fonction generate-veille-article')
    
    // Vérifier le Content-Type
    const contentType = req.headers.get('content-type')
    if (!contentType || !contentType.includes('application/json')) {
      throw new Error('Content-Type must be application/json')
    }

    // Parser le body
    let body
    try {
      body = await req.json()
    } catch (e) {
      console.error('Erreur parsing JSON:', e)
      throw new Error('Invalid JSON body')
    }

    const { url, supabaseUrl, supabaseKey } = body
    
    console.log('Paramètres reçus:', { 
      url: url || 'manquant', 
      supabaseUrl: supabaseUrl || 'manquant', 
      supabaseKey: supabaseKey ? 'présent' : 'manquant' 
    })
    
    // Validation des paramètres
    if (!url) {
      throw new Error('URL parameter is required')
    }
    if (!supabaseUrl) {
      throw new Error('supabaseUrl parameter is required')
    }
    if (!supabaseKey) {
      throw new Error('supabaseKey parameter is required')
    }

    // Vérifier que les URLs sont valides
    try {
      new URL(supabaseUrl)
    } catch (e) {
      console.error('Invalid Supabase URL:', e)
      throw new Error('Invalid Supabase URL')
    }
    
    // Create Supabase client
    console.log('Création du client Supabase')
    const supabase = createClient(supabaseUrl, supabaseKey, {
      auth: {
        persistSession: false
      }
    })

    // Vérifier la connexion à Supabase
    try {
      const { data: testData, error: testError } = await supabase
        .from('veille_articles')
        .select('id')
        .limit(1)
      
      if (testError) {
        console.error('Erreur test connexion Supabase:', testError)
        throw new Error('Failed to connect to Supabase: ' + testError.message)
      }
    } catch (e) {
      console.error('Erreur lors du test de connexion:', e)
      throw new Error('Failed to connect to Supabase')
    }

    // Vérifier la clé API Claude
    const anthropicApiKey = Deno.env.get('ANTHROPIC_API_KEY')
    if (!anthropicApiKey) {
      console.error('ANTHROPIC_API_KEY manquante')
      throw new Error('ANTHROPIC_API_KEY environment variable is not set')
    }

    // Générer l'article avec Claude
    console.log('Appel de l\'API Claude')
    const response = await fetch('https://api.anthropic.com/v1/messages', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'x-api-key': anthropicApiKey,
        'anthropic-version': '2023-06-01'
      },
      body: JSON.stringify({
        model: 'claude-3-opus-20240229',
        max_tokens: 4000,
        messages: [
          { 
            role: 'user', 
            content: `Génère un article de veille réglementaire sur le sujet suivant: ${url}
            Format attendu:
            - Titre accrocheur
            - Résumé en 2-3 phrases
            - Article complet avec introduction, développement et conclusion
            - 5 mots-clés pertinents
            - Sources utilisées`
          }
        ]
      })
    })

    if (!response.ok) {
      const errorText = await response.text()
      console.error('Erreur API Claude:', response.status, errorText)
      throw new Error(`API request failed: ${response.status} ${errorText}`)
    }

    const data = await response.json() as ClaudeResponse
    if (!data.content?.[0]?.text) {
      console.error('Format de réponse Claude invalide:', data)
      throw new Error('Invalid response format from Claude API')
    }
    const content = data.content[0].text

    // Parser la réponse de Claude
    console.log('Parsing de la réponse Claude')
    const title = extractTitle(content)
    const summary = extractSummary(content)
    const articleContent = extractContent(content)
    const keywords = extractKeywords(content)

    if (!title || !summary || !articleContent || !keywords) {
      console.error('Données manquantes après parsing:', { title, summary, content: articleContent?.substring(0, 50), keywords })
      throw new Error('Failed to extract required fields from Claude response')
    }

    console.log('Données extraites:', { 
      title, 
      summary: summary.substring(0, 50) + '...', 
      contentLength: articleContent.length,
      keywords 
    })

    // Sauvegarder l'article dans Supabase
    console.log('Sauvegarde dans Supabase')
    const { data: article, error: saveError } = await supabase
      .from('veille_articles')
      .insert({
        id: uuidv4(),
        title,
        content: articleContent,
        summary,
        excerpt: summary,
        category: 'reglementation',
        keywords,
        created_at: new Date().toISOString(),
        source: 'Claude',
        status: 'draft',
        priority: 'moyenne',
        published_at: new Date().toISOString(),
        read_time: calculateReadTime(articleContent),
        author: 'Claude',
        tags: keywords,
        seo_keywords: keywords,
        views: 0,
        is_published: false
      })
      .select()
      .single()

    if (saveError) {
      console.error('Erreur lors de la sauvegarde:', saveError)
      throw new Error('Failed to save article: ' + saveError.message)
    }

    console.log('Article sauvegardé avec succès:', article.id)

    return new Response(
      JSON.stringify({ 
        success: true, 
        article: article 
      }),
      { 
        headers: { 
          ...corsHeaders,
          'Content-Type': 'application/json'
        } 
      }
    )
  } catch (error) {
    console.error('Erreur dans generate-veille-article:', error)
    return new Response(
      JSON.stringify({ 
        success: false,
        error: error instanceof Error ? error.message : 'Unknown error occurred',
        details: error instanceof Error ? error.stack : undefined
      }),
      { 
        status: 400,
        headers: { 
          ...corsHeaders,
          'Content-Type': 'application/json'
        } 
      }
    )
  }
})

// Fonctions utilitaires pour parser la réponse
function extractTitle(content: string): string {
  const titleMatch = content.match(/Titre:?\s*(.+)/i)
  return titleMatch ? titleMatch[1].trim() : ''
}

function extractSummary(content: string): string {
  const summaryMatch = content.match(/Résumé:?\s*(.+?)(?=\n\n|\n[A-Z]|$)/is)
  return summaryMatch ? summaryMatch[1].trim() : ''
}

function extractContent(content: string): string {
  const contentMatch = content.match(/Article:?\s*(.+?)(?=\n\nMots-clés:|$)/is)
  return contentMatch ? contentMatch[1].trim() : ''
}

function extractKeywords(content: string): string[] {
  const keywordsMatch = content.match(/Mots-clés:?\s*(.+)/i)
  if (!keywordsMatch) return []
  return keywordsMatch[1]
    .split(',')
    .map(k => k.trim())
    .filter(k => k.length > 0)
}

function calculateReadTime(content: string): number {
  const wordsPerMinute = 200;
  const words = content.trim().split(/\s+/).length;
  return Math.max(1, Math.ceil(words / wordsPerMinute));
} 