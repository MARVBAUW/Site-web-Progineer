import { serve } from "https://deno.land/std@0.168.0/http/server.ts"
import { createClient } from 'https://esm.sh/@supabase/supabase-js@2'

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
}

interface ArticleGenerationRequest {
  topic: string;
  category: string;
  keywords: string[];
  sources?: string[];
}

interface VeilleArticle {
  id: string;
  title: string;
  excerpt: string;
  content: string;
  category: string;
  priority: string;
  tags: string[];
  publishedAt: string;
  readTime: string;
  views: number;
  author: string;
  sources?: { title: string; url: string }[];
  seoKeywords: string[];
}

serve(async (req) => {
  // Handle CORS preflight requests
  if (req.method === 'OPTIONS') {
    return new Response('ok', { headers: corsHeaders })
  }

  try {
    const supabaseClient = createClient(
      Deno.env.get('SUPABASE_URL') ?? '',
      Deno.env.get('SUPABASE_ANON_KEY') ?? '',
    )

    const { topic, category, keywords, sources } = await req.json() as ArticleGenerationRequest

    // Générer l'article avec Claude AI
    const generatedArticle = await generateArticleWithClaude(topic, category, keywords, sources)

    // Vérifier les doublons
    const isDuplicate = await checkForDuplicates(supabaseClient, generatedArticle.title, keywords)
    
    if (isDuplicate) {
      return new Response(
        JSON.stringify({ 
          success: false, 
          error: 'Un article similaire existe déjà' 
        }),
        { 
          headers: { ...corsHeaders, 'Content-Type': 'application/json' },
          status: 409
        }
      )
    }

    // Optimiser le SEO
    const optimizedArticle = optimizeArticleSEO(generatedArticle)

    // Sauvegarder l'article en base
    const savedArticle = await saveArticle(supabaseClient, optimizedArticle)

    // Publier l'article sur le site
    await publishArticleToSite(supabaseClient, savedArticle)

    return new Response(
      JSON.stringify({ 
        success: true, 
        article: savedArticle 
      }),
      { 
        headers: { ...corsHeaders, 'Content-Type': 'application/json' } 
      }
    )

  } catch (error) {
    console.error('Erreur lors de la génération d\'article:', error)
    
    return new Response(
      JSON.stringify({ 
        success: false, 
        error: error.message 
      }),
      { 
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
        status: 500
      }
    )
  }
})

async function generateArticleWithClaude(
  topic: string, 
  category: string, 
  keywords: string[], 
  sources?: string[]
): Promise<VeilleArticle> {
  const anthropicApiKey = Deno.env.get('ANTHROPIC_API_KEY')
  
  if (!anthropicApiKey) {
    throw new Error('Clé API Anthropic manquante')
  }

  const prompt = createPromptForCategory(topic, category, keywords, sources)

  try {
    const response = await fetch('https://api.anthropic.com/v1/messages', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'x-api-key': anthropicApiKey,
        'anthropic-version': '2023-06-01'
      },
      body: JSON.stringify({
        model: 'claude-3-5-sonnet-20241022',
        max_tokens: 4000,
        messages: [{
          role: 'user',
          content: prompt
        }]
      })
    })

    if (!response.ok) {
      throw new Error(`Erreur API Anthropic: ${response.status}`)
    }

    const data = await response.json()
    const generatedContent = data.content[0].text

    // Parser le contenu généré par Claude
    return parseClaudeResponse(generatedContent, topic, category, keywords, sources)

  } catch (error) {
    console.error('Erreur lors de l\'appel à Claude:', error)
    // Fallback vers la génération locale en cas d'erreur
    return generateArticleLocally(topic, category, keywords, sources)
  }
}

function createPromptForCategory(topic: string, category: string, keywords: string[], sources?: string[]): string {
  const categoryPrompts = {
    reglementation: `Rédigez un article professionnel de 1200-1500 mots sur "${topic}" dans le domaine de la réglementation construction.
    
Structure requise :
1. Titre accrocheur (50-60 caractères)
2. Résumé/excerpt (150-160 caractères)
3. Introduction
4. Contexte réglementaire
5. Principales évolutions
6. Impact pour les professionnels
7. Calendrier d'application
8. Recommandations pratiques
9. Conclusion

Contraintes :
- Public cible : professionnels du bâtiment en région PACA
- Ton : informatif, technique mais accessible
- Intégrer les mots-clés : ${keywords.join(', ')}
- Optimisé SEO pour "construction PACA", "rénovation Marseille"
- Format HTML avec balises h3, h4, ul, li, p
- Mentionner l'impact spécifique en région PACA/Provence`,

    materiaux: `Rédigez un article expert de 1200-1500 mots sur "${topic}" dans le domaine des matériaux de construction.
    
Structure requise :
1. Titre accrocheur (50-60 caractères)
2. Résumé/excerpt (150-160 caractères)
3. Introduction
4. Présentation du matériau/innovation
5. Avantages techniques et environnementaux
6. Applications pratiques
7. Retours d'expérience et cas d'usage
8. Perspectives d'avenir
9. Conclusion

Contraintes :
- Public cible : maîtres d'œuvre, architectes, entreprises BTP en PACA
- Ton : technique, innovant, orienté solutions
- Intégrer les mots-clés : ${keywords.join(', ')}
- Focus sur la construction durable et la RE2020
- Format HTML avec balises h3, h4, ul, li, p
- Exemples concrets d'utilisation en région méditerranéenne`,

    energie: `Rédigez un article spécialisé de 1200-1500 mots sur "${topic}" dans le domaine de l'efficacité énergétique.
    
Structure requise :
1. Titre accrocheur (50-60 caractères)
2. Résumé/excerpt (150-160 caractères)
3. Introduction
4. Enjeux énergétiques actuels
5. Technologies et solutions disponibles
6. Performance et rentabilité
7. Aides et financements (MaPrimeRénov', CEE)
8. Cas d'usage concrets en PACA
9. Conclusion

Contraintes :
- Public cible : professionnels de la rénovation énergétique
- Ton : technique, orienté performance et ROI
- Intégrer les mots-clés : ${keywords.join(', ')}
- Mentionner les spécificités climatiques méditerranéennes
- Format HTML avec balises h3, h4, ul, li, p
- Chiffres et données de performance`,

    urbanisme: `Rédigez un article professionnel de 1200-1500 mots sur "${topic}" dans le domaine de l'urbanisme et de l'aménagement.
    
Structure requise :
1. Titre accrocheur (50-60 caractères)
2. Résumé/excerpt (150-160 caractères)
3. Introduction
4. Contexte urbanistique
5. Nouvelles règles et procédures
6. Impact sur les projets de construction
7. Opportunités pour les professionnels
8. Conseils pratiques et démarches
9. Conclusion

Contraintes :
- Public cible : promoteurs, aménageurs, maîtres d'œuvre en PACA
- Ton : réglementaire, pratique, orienté action
- Intégrer les mots-clés : ${keywords.join(', ')}
- Focus sur les spécificités PACA (littoral, montagne, zones protégées)
- Format HTML avec balises h3, h4, ul, li, p
- Exemples de communes PACA`,

    environnement: `Rédigez un article expert de 1200-1500 mots sur "${topic}" dans le domaine environnemental du bâtiment.
    
Structure requise :
1. Titre accrocheur (50-60 caractères)
2. Résumé/excerpt (150-160 caractères)
3. Introduction
4. Enjeux environnementaux
5. Solutions et innovations
6. Bénéfices écologiques et économiques
7. Mise en œuvre pratique
8. Réglementation et certifications
9. Conclusion

Contraintes :
- Public cible : professionnels de la construction durable
- Ton : environnemental, innovant, responsable
- Intégrer les mots-clés : ${keywords.join(', ')}
- Adaptation au climat méditerranéen et aux enjeux PACA
- Format HTML avec balises h3, h4, ul, li, p
- Impact sur la biodiversité et les ressources locales`,

    financement: `Rédigez un article pratique de 1200-1500 mots sur "${topic}" dans le domaine du financement de la construction.
    
Structure requise :
1. Titre accrocheur (50-60 caractères)
2. Résumé/excerpt (150-160 caractères)
3. Introduction
4. Présentation du dispositif de financement
5. Conditions d'éligibilité et montants
6. Procédures et démarches
7. Optimisation et cumuls possibles
8. Exemples concrets et retours d'expérience
9. Conclusion

Contraintes :
- Public cible : particuliers et professionnels cherchant des financements
- Ton : pratique, accessible, orienté solutions
- Intégrer les mots-clés : ${keywords.join(', ')}
- Spécificités régionales et aides locales PACA
- Format HTML avec balises h3, h4, ul, li, p
- Montants, seuils et dates importantes`
  }

  const basePrompt = categoryPrompts[category as keyof typeof categoryPrompts] || categoryPrompts.reglementation

  let fullPrompt = basePrompt

  if (sources && sources.length > 0) {
    fullPrompt += `\n\nSources à consulter et citer :\n${sources.join('\n')}`
  }

  fullPrompt += `\n\nFormat de réponse attendu (JSON) :
{
  "title": "Titre optimisé SEO (50-60 caractères)",
  "excerpt": "Résumé accrocheur (150-160 caractères)",
  "content": "Contenu HTML complet avec balises h3, h4, p, ul, li",
  "priority": "haute|moyenne|faible",
  "tags": ["tag1", "tag2", "tag3", "tag4", "tag5"],
  "readTime": "X min"
}`

  return fullPrompt
}

function parseClaudeResponse(response: string, topic: string, category: string, keywords: string[], sources?: string[]): VeilleArticle {
  try {
    // Extraire le JSON de la réponse de Claude
    const jsonMatch = response.match(/\{[\s\S]*\}/)
    if (!jsonMatch) {
      throw new Error('Format de réponse invalide')
    }

    const parsed = JSON.parse(jsonMatch[0])

    const article: VeilleArticle = {
      id: `veille-${Date.now()}`,
      title: parsed.title || `${topic} : Actualités Construction PACA`,
      excerpt: parsed.excerpt || `Découvrez les dernières évolutions concernant ${topic} en région PACA.`,
      content: parsed.content || generateFallbackContent(topic, category),
      category,
      priority: parsed.priority || 'moyenne',
      tags: parsed.tags || keywords.slice(0, 6),
      publishedAt: new Date().toISOString().split('T')[0],
      readTime: parsed.readTime || '8 min',
      views: 0,
      author: 'IA Progineer',
      sources: sources ? sources.map(url => ({ title: extractTitleFromUrl(url), url })) : [],
      seoKeywords: keywords
    }

    return article

  } catch (error) {
    console.error('Erreur lors du parsing de la réponse Claude:', error)
    // Fallback vers génération locale
    return generateArticleLocally(topic, category, keywords, sources)
  }
}

function generateArticleLocally(topic: string, category: string, keywords: string[], sources?: string[]): VeilleArticle {
  const title = `${topic} : Actualités Construction PACA`
  const excerpt = `Découvrez les dernières évolutions concernant ${topic} et leur impact sur vos projets en région PACA.`
  const content = generateFallbackContent(topic, category)
  
  const wordCount = content.split(' ').length
  const readTime = Math.ceil(wordCount / 200)

  return {
    id: `veille-${Date.now()}`,
    title,
    excerpt,
    content,
    category,
    priority: 'moyenne',
    tags: keywords.slice(0, 6),
    publishedAt: new Date().toISOString().split('T')[0],
    readTime: `${readTime} min`,
    views: 0,
    author: 'Équipe Progineer',
    sources: sources ? sources.map(url => ({ title: extractTitleFromUrl(url), url })) : [],
    seoKeywords: keywords
  }
}

function generateFallbackContent(topic: string, category: string): string {
  return `
    <h3>Actualités ${topic}</h3>
    <p>Les évolutions récentes concernant ${topic} impactent directement les professionnels de la construction en région PACA. Cette analyse vous présente les points clés à retenir.</p>
    
    <h4>Points essentiels</h4>
    <ul>
      <li>Évolution réglementaire majeure</li>
      <li>Impact sur les projets en cours</li>
      <li>Recommandations pratiques</li>
      <li>Échéances à respecter</li>
    </ul>
    
    <h4>Recommandations pour les professionnels</h4>
    <p>Il est essentiel de s'adapter rapidement à ces évolutions pour maintenir la conformité de vos projets et optimiser vos pratiques professionnelles en région PACA.</p>
  `
}

function extractTitleFromUrl(url: string): string {
  try {
    const urlObj = new URL(url)
    const pathname = urlObj.pathname
    const segments = pathname.split('/').filter(s => s.length > 0)
    const lastSegment = segments[segments.length - 1] || urlObj.hostname
    
    return lastSegment
      .replace(/[-_]/g, ' ')
      .replace(/\.(html|php|aspx?)$/i, '')
      .split(' ')
      .map(word => word.charAt(0).toUpperCase() + word.slice(1))
      .join(' ')
  } catch {
    return 'Source externe'
  }
}

async function checkForDuplicates(
  supabaseClient: any, 
  title: string, 
  keywords: string[]
): Promise<boolean> {
  try {
    // Recherche par titre similaire
    const { data: titleMatches } = await supabaseClient
      .from('veille_articles')
      .select('id, title')
      .ilike('title', `%${title.split(' ').slice(0, 3).join('%')}%`)
      .limit(5)

    if (titleMatches && titleMatches.length > 0) {
      return true
    }

    // Recherche par mots-clés similaires
    const { data: keywordMatches } = await supabaseClient
      .from('veille_articles')
      .select('id, seo_keywords')
      .overlaps('seo_keywords', keywords.slice(0, 3))
      .limit(5)

    return keywordMatches && keywordMatches.length > 0
  } catch (error) {
    console.error('Erreur lors de la vérification des doublons:', error)
    return false
  }
}

function optimizeArticleSEO(article: VeilleArticle): VeilleArticle {
  const optimized = { ...article }

  // Optimisation du titre (50-60 caractères)
  if (optimized.title.length > 60) {
    const words = optimized.title.split(' ')
    let truncated = ''
    for (const word of words) {
      if ((truncated + word).length <= 57) {
        truncated += (truncated ? ' ' : '') + word
      } else {
        break
      }
    }
    optimized.title = truncated + '...'
  }

  // Optimisation de l'excerpt (150-160 caractères)
  if (optimized.excerpt.length > 160) {
    optimized.excerpt = optimized.excerpt.substring(0, 157) + '...'
  }

  // Ajout de mots-clés géolocalisés
  const geoKeywords = [
    'construction PACA',
    'rénovation Marseille',
    'maître d\'œuvre PACA',
    'bâtiment Provence'
  ]

  optimized.seoKeywords = [
    ...new Set([...optimized.seoKeywords, ...geoKeywords])
  ].slice(0, 10)

  return optimized
}

async function saveArticle(supabaseClient: any, article: VeilleArticle): Promise<VeilleArticle> {
  try {
    const { data, error } = await supabaseClient
      .from('veille_articles')
      .insert([{
        id: article.id,
        title: article.title,
        excerpt: article.excerpt,
        content: article.content,
        category: article.category,
        priority: article.priority,
        tags: article.tags,
        published_at: article.publishedAt,
        read_time: article.readTime,
        views: article.views,
        author: article.author,
        sources: article.sources,
        seo_keywords: article.seoKeywords,
        created_at: new Date().toISOString(),
        is_published: false // Pas encore publié sur le site
      }])
      .select()
      .single()

    if (error) {
      throw error
    }

    return article
  } catch (error) {
    console.error('Erreur lors de la sauvegarde:', error)
    return article
  }
}

async function publishArticleToSite(supabaseClient: any, article: VeilleArticle): Promise<void> {
  try {
    // Marquer l'article comme publié
    await supabaseClient
      .from('veille_articles')
      .update({ 
        is_published: true,
        published_at: new Date().toISOString()
      })
      .eq('id', article.id)

    // Ici on pourrait ajouter d'autres actions :
    // - Notification aux abonnés
    // - Mise à jour du sitemap
    // - Publication sur les réseaux sociaux
    // - Indexation SEO

    console.log(`Article publié avec succès: ${article.title}`)
  } catch (error) {
    console.error('Erreur lors de la publication:', error)
    throw error
  }
} 