#!/usr/bin/env node

/**
 * Script de test pour la génération d'articles de veille réglementaire
 * Utilise l'API Anthropic Claude pour générer un article de test
 */

import fetch from 'node-fetch';
import fs from 'fs/promises';
import { readFileSync } from 'fs';
import path from 'path';

// Charger les variables d'environnement depuis .env.local ou .env
function loadEnvFile() {
  try {
    // Essayer d'abord .env.local, puis .env
    let envPath = path.join(process.cwd(), '.env.local');
    let envContent;
    
    try {
      envContent = readFileSync(envPath, 'utf8');
      console.log('✅ Fichier .env.local trouvé et chargé');
    } catch {
      envPath = path.join(process.cwd(), '.env');
      envContent = readFileSync(envPath, 'utf8');
      console.log('✅ Fichier .env trouvé et chargé');
    }
    
    envContent.split('\n').forEach((line, index) => {
      const trimmedLine = line.trim();
      if (trimmedLine && !trimmedLine.startsWith('#')) {
        const [key, ...valueParts] = trimmedLine.split('=');
        if (key && valueParts.length > 0) {
          const value = valueParts.join('=').trim();
          process.env[key.trim()] = value;
          console.log(`   Ligne ${index + 1}: ${key.trim()} = ${value.substring(0, 20)}...`);
        }
      }
    });
    
    console.log('🔍 Variables détectées:');
    console.log(`   SUPABASE_URL: ${process.env.SUPABASE_URL ? 'Définie' : 'Non définie'}`);
    console.log(`   SUPABASE_ANON_KEY: ${process.env.SUPABASE_ANON_KEY ? 'Définie' : 'Non définie'}`);
    console.log(`   ANTHROPIC_API_KEY: ${process.env.ANTHROPIC_API_KEY ? 'Définie' : 'Non définie'}`);
  } catch (error) {
    console.log('⚠️  Aucun fichier .env trouvé, utilisation des variables système');
  }
}

// Charger les variables d'environnement
loadEnvFile();

// Configuration
const SUPABASE_URL = process.env.SUPABASE_URL || 'http://localhost:54321';
const SUPABASE_ANON_KEY = process.env.SUPABASE_ANON_KEY || '';
const ANTHROPIC_API_KEY = process.env.ANTHROPIC_API_KEY || '';

class VeilleTestGenerator {
  constructor() {
    this.logFile = path.join(process.cwd(), 'logs', 'test-generation.log');
  }

  async init() {
    console.log('🧪 Test de génération d\'article de veille réglementaire');
    console.log('================================================');
    
    // Vérifier les variables d'environnement
    if (!this.checkEnvironment()) {
      return;
    }

    // Créer le dossier de logs
    await this.ensureLogDirectory();

    // Tester la génération
    await this.testGeneration();
  }

  checkEnvironment() {
    const missing = [];
    
    if (!SUPABASE_URL || SUPABASE_URL === 'http://localhost:54321') {
      missing.push('SUPABASE_URL');
    }
    
    if (!SUPABASE_ANON_KEY) {
      missing.push('SUPABASE_ANON_KEY');
    }
    
    if (!ANTHROPIC_API_KEY) {
      missing.push('ANTHROPIC_API_KEY');
    }

    if (missing.length > 0) {
      console.error('❌ Variables d\'environnement manquantes :');
      missing.forEach(variable => {
        console.error(`   - ${variable}`);
      });
      console.log('\n📝 Créez un fichier .env.local avec :');
      console.log('SUPABASE_URL=https://your-project.supabase.co');
      console.log('SUPABASE_ANON_KEY=your_supabase_anon_key');
      console.log('ANTHROPIC_API_KEY=sk-ant-your_anthropic_key');
      return false;
    }

    console.log('✅ Variables d\'environnement configurées');
    return true;
  }

  async ensureLogDirectory() {
    try {
      await fs.mkdir(path.dirname(this.logFile), { recursive: true });
    } catch (error) {
      console.error('Erreur lors de la création du dossier logs:', error);
    }
  }

  async testGeneration() {
    const testTopics = [
      {
        topic: 'RE2020 évolutions 2025',
        category: 'reglementation',
        keywords: ['RE2020', 'réglementation environnementale', 'construction neuve', 'PACA']
      },
      {
        topic: 'Matériaux biosourcés innovation',
        category: 'materiaux',
        keywords: ['matériaux biosourcés', 'construction durable', 'innovation', 'PACA']
      },
      {
        topic: 'Pompes à chaleur performance',
        category: 'energie',
        keywords: ['pompes à chaleur', 'efficacité énergétique', 'rénovation', 'PACA']
      }
    ];

    console.log('\n🚀 Test de génération avec différents sujets...\n');

    for (const [index, topicData] of testTopics.entries()) {
      console.log(`📝 Test ${index + 1}/3 : ${topicData.topic}`);
      
      try {
        const result = await this.generateArticle(topicData);
        
        if (result.success) {
          console.log(`✅ Article généré avec succès !`);
          console.log(`   Titre: ${result.article.title}`);
          console.log(`   Catégorie: ${result.article.category}`);
          console.log(`   Temps de lecture: ${result.article.readTime}`);
          
          // Sauvegarder localement pour inspection
          await this.saveTestArticle(result.article, index + 1);
          
        } else {
          console.log(`❌ Échec de génération: ${result.error}`);
        }
        
        await this.log(`Test ${index + 1}: ${result.success ? 'Succès' : 'Échec'} - ${topicData.topic}`);
        
      } catch (error) {
        console.log(`❌ Erreur: ${error.message}`);
        await this.log(`Test ${index + 1}: Erreur - ${error.message}`);
      }
      
      console.log(''); // Ligne vide pour la lisibilité
      
      // Pause entre les tests pour éviter le rate limiting
      if (index < testTopics.length - 1) {
        console.log('⏳ Pause de 2 secondes...\n');
        await new Promise(resolve => setTimeout(resolve, 2000));
      }
    }

    console.log('🎉 Tests terminés ! Vérifiez le dossier test-articles/ pour les résultats.');
  }

  async generateArticle(topicData) {
    const url = `${SUPABASE_URL}/functions/v1/generate-veille-article`;
    
    console.log(`   📡 Appel API: ${url}`);
    
    try {
      const response = await fetch(url, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${SUPABASE_ANON_KEY}`,
        },
        body: JSON.stringify(topicData),
      });

      if (!response.ok) {
        const errorText = await response.text();
        throw new Error(`HTTP ${response.status}: ${errorText}`);
      }

      const result = await response.json();
      return result;

    } catch (error) {
      console.log(`   ⚠️  Erreur API, test avec génération locale...`);
      return this.generateArticleLocally(topicData);
    }
  }

  async generateArticleLocally(topicData) {
    // Test direct avec l'API Anthropic
    if (!ANTHROPIC_API_KEY) {
      return {
        success: false,
        error: 'Clé API Anthropic manquante pour le test local'
      };
    }

    try {
      console.log('   🤖 Test direct avec Claude...');
      
      const prompt = this.createTestPrompt(topicData);
      
      const response = await fetch('https://api.anthropic.com/v1/messages', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'x-api-key': ANTHROPIC_API_KEY,
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
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(`Anthropic API: ${errorData.error?.message || response.status}`);
      }

      const data = await response.json();
      const generatedContent = data.content[0].text;

      // Parser la réponse
      const article = this.parseClaudeResponse(generatedContent, topicData);

      return {
        success: true,
        article
      };

    } catch (error) {
      return {
        success: false,
        error: error.message
      };
    }
  }

  createTestPrompt(topicData) {
    return `Rédigez un article professionnel de 800-1000 mots sur "${topicData.topic}" dans le domaine de la construction en région PACA.

Structure requise :
1. Titre accrocheur (50-60 caractères)
2. Résumé/excerpt (150-160 caractères)
3. Introduction
4. Développement en 3-4 sections
5. Conclusion avec recommandations

Contraintes :
- Public cible : professionnels du bâtiment en région PACA
- Ton : informatif, technique mais accessible
- Intégrer les mots-clés : ${topicData.keywords.join(', ')}
- Format HTML avec balises h3, h4, ul, li, p
- Mentionner l'impact spécifique en région PACA/Provence

Format de réponse attendu (JSON) :
{
  "title": "Titre optimisé SEO (50-60 caractères)",
  "excerpt": "Résumé accrocheur (150-160 caractères)",
  "content": "Contenu HTML complet avec balises h3, h4, p, ul, li",
  "priority": "haute|moyenne|faible",
  "tags": ["tag1", "tag2", "tag3", "tag4", "tag5"],
  "readTime": "X min"
}`;
  }

  parseClaudeResponse(response, topicData) {
    try {
      // Extraire le JSON de la réponse
      const jsonMatch = response.match(/\{[\s\S]*\}/);
      if (!jsonMatch) {
        throw new Error('Format de réponse invalide');
      }

      const parsed = JSON.parse(jsonMatch[0]);

      return {
        id: `test-${Date.now()}`,
        title: parsed.title || `${topicData.topic} : Actualités Construction PACA`,
        excerpt: parsed.excerpt || `Découvrez les dernières évolutions concernant ${topicData.topic} en région PACA.`,
        content: parsed.content || this.generateFallbackContent(topicData.topic),
        category: topicData.category,
        priority: parsed.priority || 'moyenne',
        tags: parsed.tags || topicData.keywords,
        publishedAt: new Date().toISOString().split('T')[0],
        readTime: parsed.readTime || '8 min',
        views: 0,
        author: 'Test IA Progineer',
        sources: [],
        seoKeywords: topicData.keywords
      };

    } catch (error) {
      console.log(`   ⚠️  Erreur parsing, utilisation du fallback...`);
      return this.generateFallbackArticle(topicData);
    }
  }

  generateFallbackArticle(topicData) {
    return {
      id: `test-fallback-${Date.now()}`,
      title: `${topicData.topic} : Actualités Construction PACA`,
      excerpt: `Découvrez les dernières évolutions concernant ${topicData.topic} en région PACA.`,
      content: this.generateFallbackContent(topicData.topic),
      category: topicData.category,
      priority: 'moyenne',
      tags: topicData.keywords,
      publishedAt: new Date().toISOString().split('T')[0],
      readTime: '6 min',
      views: 0,
      author: 'Test Fallback',
      sources: [],
      seoKeywords: topicData.keywords
    };
  }

  generateFallbackContent(topic) {
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
    `;
  }

  async saveTestArticle(article, testNumber) {
    try {
      const testDir = path.join(process.cwd(), 'test-articles');
      await fs.mkdir(testDir, { recursive: true });
      
      const filename = `test-${testNumber}-${article.id}.json`;
      const filepath = path.join(testDir, filename);
      
      await fs.writeFile(filepath, JSON.stringify(article, null, 2));
      console.log(`   💾 Article sauvegardé: ${filename}`);
    } catch (error) {
      console.error('   ❌ Erreur sauvegarde:', error.message);
    }
  }

  async log(message) {
    const timestamp = new Date().toISOString();
    const logEntry = `[${timestamp}] ${message}\n`;
    
    try {
      await fs.appendFile(this.logFile, logEntry);
    } catch (error) {
      console.error('Erreur lors de l\'écriture du log:', error);
    }
  }
}

// Exécution du test
const tester = new VeilleTestGenerator();
tester.init().catch(error => {
  console.error('❌ Erreur lors du test:', error);
  process.exit(1);
}); 