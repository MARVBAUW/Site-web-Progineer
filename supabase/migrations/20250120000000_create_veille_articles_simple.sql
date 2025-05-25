-- Migration simplifiée pour créer la table des articles de veille réglementaire
-- Compatible avec le parser SQL de Supabase

-- Créer la table principale
CREATE TABLE veille_articles (
  id TEXT PRIMARY KEY,
  title TEXT NOT NULL,
  excerpt TEXT NOT NULL,
  content TEXT NOT NULL,
  category TEXT NOT NULL,
  priority TEXT NOT NULL,
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

-- Ajouter les contraintes de vérification
ALTER TABLE veille_articles ADD CONSTRAINT check_category 
  CHECK (category IN ('reglementation', 'materiaux', 'energie', 'urbanisme', 'environnement', 'financement'));

ALTER TABLE veille_articles ADD CONSTRAINT check_priority 
  CHECK (priority IN ('haute', 'moyenne', 'faible'));

-- Créer les index pour améliorer les performances
CREATE INDEX idx_veille_articles_category ON veille_articles(category);
CREATE INDEX idx_veille_articles_published_at ON veille_articles(published_at);
CREATE INDEX idx_veille_articles_is_published ON veille_articles(is_published);
CREATE INDEX idx_veille_articles_priority ON veille_articles(priority);
CREATE INDEX idx_veille_articles_tags ON veille_articles USING GIN(tags);
CREATE INDEX idx_veille_articles_seo_keywords ON veille_articles USING GIN(seo_keywords);

-- Activer RLS (Row Level Security)
ALTER TABLE veille_articles ENABLE ROW LEVEL SECURITY;

-- Créer les politiques de sécurité
CREATE POLICY "Articles publiés lisibles par tous" ON veille_articles
    FOR SELECT USING (is_published = true);

CREATE POLICY "Gestion articles par services" ON veille_articles
    FOR ALL USING (auth.role() = 'service_role'); 