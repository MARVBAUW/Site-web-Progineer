import { serve } from "std/http/server.ts"
import { createClient } from "@supabase/supabase-js"

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
  'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, OPTIONS',
  'Access-Control-Max-Age': '86400',
}

// Types pour les articles
interface Article {
  title: string;
  content: string;
  summary: string;
  keywords: string[];
  created_at: string;
  source: string;
  status: 'draft' | 'published';
}

serve(async (req) => {
  if (req.method === 'OPTIONS') {
    return new Response('ok', { headers: corsHeaders })
  }

  try {
    const { url, supabaseUrl, supabaseKey } = await req.json()
    
    // Create Supabase client
    const supabase = createClient(supabaseUrl, supabaseKey)

    // Générer l'article avec Claude
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
      throw new Error(`API request failed: ${response.statusText}`)
    }

    const data = await response.json()
    const content = data.content[0].text

    // Parser la réponse de Claude
    const article: Article = {
      title: extractTitle(content),
      content: extractContent(content),
      summary: extractSummary(content),
      keywords: extractKeywords(content),
      created_at: new Date().toISOString(),
      source: 'Claude',
      status: 'draft'
    }

    // Sauvegarder l'article dans Supabase
    const { data: savedArticle, error: saveError } = await supabase
      .from('veille_articles')
      .insert([article])
      .select()
      .single()

    if (saveError) throw saveError

    return new Response(
      JSON.stringify({ 
        success: true, 
        article: savedArticle 
      }),
      { 
        headers: { 
          ...corsHeaders,
          'Content-Type': 'application/json'
        } 
      }
    )
  } catch (error) {
    return new Response(
      JSON.stringify({ 
        success: false,
        error: error instanceof Error ? error.message : 'Unknown error occurred'
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
  return titleMatch ? titleMatch[1].trim() : 'Sans titre'
}

function extractSummary(content: string): string {
  const summaryMatch = content.match(/Résumé:?\s*(.+?)(?=\n\n|\n[A-Z]|$)/is)
  return summaryMatch ? summaryMatch[1].trim() : ''
}

function extractContent(content: string): string {
  const contentMatch = content.match(/Article:?\s*(.+?)(?=\n\nMots-clés:|$)/is)
  return contentMatch ? contentMatch[1].trim() : content
}

function extractKeywords(content: string): string[] {
  const keywordsMatch = content.match(/Mots-clés:?\s*(.+)/i)
  return keywordsMatch 
    ? keywordsMatch[1].split(',').map(k => k.trim())
    : []
} 