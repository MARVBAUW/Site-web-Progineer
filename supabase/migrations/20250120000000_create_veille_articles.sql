-- Migration pour créer la table des articles de veille réglementaire
CREATE TABLE IF NOT EXISTS veille_articles (
  id TEXT PRIMARY KEY,
  title TEXT NOT NULL,
  excerpt TEXT NOT NULL,
  content TEXT NOT NULL,
  category TEXT NOT NULL CHECK (category IN ('reglementation', 'materiaux', 'energie', 'urbanisme', 'environnement', 'financement')),
  priority TEXT NOT NULL CHECK (priority IN ('haute', 'moyenne', 'faible')),
  tags TEXT[] NOT NULL DEFAULT '{}',
  published_at DATE NOT NULL,
  read_time TEXT NOT NULL,
  views INTEGER NOT NULL DEFAULT 0,
  author TEXT NOT NULL,
  sources JSONB DEFAULT '[]',
  seo_keywords TEXT[] NOT NULL DEFAULT '{}',
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  is_published BOOLEAN DEFAULT FALSE
);

-- Index pour améliorer les performances
CREATE INDEX IF NOT EXISTS idx_veille_articles_category ON veille_articles(category);
CREATE INDEX IF NOT EXISTS idx_veille_articles_published_at ON veille_articles(published_at);
CREATE INDEX IF NOT EXISTS idx_veille_articles_is_published ON veille_articles(is_published);
CREATE INDEX IF NOT EXISTS idx_veille_articles_priority ON veille_articles(priority);
CREATE INDEX IF NOT EXISTS idx_veille_articles_tags ON veille_articles USING GIN(tags);
CREATE INDEX IF NOT EXISTS idx_veille_articles_seo_keywords ON veille_articles USING GIN(seo_keywords);

-- Supprimer le trigger s'il existe déjà pour éviter les erreurs lors de la migration
DROP TRIGGER IF EXISTS update_veille_articles_updated_at ON veille_articles;

CREATE TRIGGER update_veille_articles_updated_at 
    BEFORE UPDATE ON veille_articles 
    FOR EACH ROW 
    EXECUTE FUNCTION update_updated_at_column();

-- RLS (Row Level Security) pour sécuriser l'accès
ALTER TABLE veille_articles ENABLE ROW LEVEL SECURITY;

-- Politique pour permettre la lecture publique des articles publiés
DROP POLICY IF EXISTS "Articles publiés lisibles par tous" ON veille_articles;
CREATE POLICY "Articles publiés lisibles par tous" ON veille_articles
    FOR SELECT USING (is_published = true);

-- Politique pour permettre l'insertion/modification par les services authentifiés
DROP POLICY IF EXISTS "Gestion articles par services" ON veille_articles;
CREATE POLICY "Gestion articles par services" ON veille_articles
    FOR ALL USING (auth.role() = 'service_role');

-- Commentaires pour documentation
COMMENT ON TABLE veille_articles IS 'Table des articles de veille réglementaire générés automatiquement';
COMMENT ON COLUMN veille_articles.id IS 'Identifiant unique de l''article';
COMMENT ON COLUMN veille_articles.title IS 'Titre de l''article optimisé SEO';
COMMENT ON COLUMN veille_articles.excerpt IS 'Résumé/description courte de l''article';
COMMENT ON COLUMN veille_articles.content IS 'Contenu HTML complet de l''article';
COMMENT ON COLUMN veille_articles.category IS 'Catégorie de l''article (reglementation, materiaux, etc.)';
COMMENT ON COLUMN veille_articles.priority IS 'Priorité de l''article (haute, moyenne, faible)';
COMMENT ON COLUMN veille_articles.tags IS 'Tags/mots-clés de l''article';
COMMENT ON COLUMN veille_articles.sources IS 'Sources citées dans l''article (JSON)';
COMMENT ON COLUMN veille_articles.seo_keywords IS 'Mots-clés SEO pour le référencement';
COMMENT ON COLUMN veille_articles.is_published IS 'Indique si l''article est publié sur le site'; 