// Follow this setup guide to integrate the Deno runtime into your application:
// https://deno.land/manual/examples/hello_world

import { serve } from "https://deno.land/std@0.168.0/http/server.ts"
import { createClient } from "https://esm.sh/@supabase/supabase-js@2"

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
}

// Types pour les articles
type Article = {
  id: string;
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

serve(async (req) => {
  if (req.method === 'OPTIONS') {
    return new Response('ok', { headers: corsHeaders })
  }

  try {
    const { articleId, instructions, supabaseUrl, supabaseKey } = await req.json()
    
    if (!articleId || !instructions || !supabaseUrl || !supabaseKey) {
      throw new Error('Missing required parameters')
    }

    // Create Supabase client
    const supabase = createClient(supabaseUrl, supabaseKey, {
      auth: {
        persistSession: false
      }
    })

    // Récupérer l'article existant
    const { data: article, error: fetchError } = await supabase
      .from('veille_articles')
      .select('*')
      .eq('id', articleId)
      .single()

    if (fetchError) {
      throw fetchError
    }

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
            content: `Modifie l'article suivant selon ces instructions: ${instructions}\n\nArticle actuel:\n${JSON.stringify(article, null, 2)}`
          }
        ]
      })
    })

    if (!response.ok) {
      throw new Error(`API request failed: ${response.statusText}`)
    }

    const data = await response.json() as ClaudeResponse
    if (!data.content?.[0]?.text) {
      throw new Error('Invalid response format from Claude API')
    }

    // Parser la réponse de Claude
    const modifiedContent = data.content[0].text
    const title = extractTitle(modifiedContent)
    const summary = extractSummary(modifiedContent)
    const content = extractContent(modifiedContent)
    const keywords = extractKeywords(modifiedContent)

    // Mettre à jour l'article
    const { data: updatedArticle, error: updateError } = await supabase
      .from('veille_articles')
      .update({
        title,
        content,
        summary,
        keywords,
        last_modified_at: new Date().toISOString()
      })
      .eq('id', articleId)
      .select()
      .single()

    if (updateError) {
      throw updateError
    }

    return new Response(
      JSON.stringify({ 
        success: true, 
        article: updatedArticle 
      }),
      { 
        headers: { 
          ...corsHeaders,
          'Content-Type': 'application/json'
        } 
      }
    )
  } catch (error) {
    console.error('Erreur dans modify-veille-article:', error)
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
  return titleMatch?.[1]?.trim() ?? 'Sans titre'
}

function extractSummary(content: string): string {
  const summaryMatch = content.match(/Résumé:?\s*(.+?)(?=\n\n|\n[A-Z]|$)/is)
  return summaryMatch?.[1]?.trim() ?? ''
}

function extractContent(content: string): string {
  const contentMatch = content.match(/Article:?\s*(.+?)(?=\n\nMots-clés:|$)/is)
  return contentMatch?.[1]?.trim() ?? content
}

function extractKeywords(content: string): string[] {
  const keywordsMatch = content.match(/Mots-clés:?\s*(.+)/i)
  return keywordsMatch?.[1]?.split(',').map(k => k.trim()) ?? []
} 