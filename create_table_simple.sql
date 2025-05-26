-- Création simple de la table veille_articles
-- À exécuter dans Supabase SQL Editor uniquement si la table n'existe pas

CREATE TABLE IF NOT EXISTS veille_articles (
  id text PRIMARY KEY,
  title text NOT NULL,
  excerpt text,
  content text,
  category text NOT NULL,
  priority text DEFAULT 'moyenne',
  tags text[] DEFAULT '{}',
  published_at date,
  read_time text,
  views integer DEFAULT 0,
  author text DEFAULT 'IA Progineer',
  sources jsonb DEFAULT '[]',
  seo_keywords text[] DEFAULT '{}',
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now(),
  is_published boolean DEFAULT false
);

-- Index pour les performances
CREATE INDEX IF NOT EXISTS idx_veille_articles_category ON veille_articles(category);
CREATE INDEX IF NOT EXISTS idx_veille_articles_published_at ON veille_articles(published_at);
CREATE INDEX IF NOT EXISTS idx_veille_articles_is_published ON veille_articles(is_published);

-- RLS (Row Level Security)
ALTER TABLE veille_articles ENABLE ROW LEVEL SECURITY;

-- Politique de lecture publique
DROP POLICY IF EXISTS "Lecture publique des articles publiés" ON veille_articles;
CREATE POLICY "Lecture publique des articles publiés" ON veille_articles
FOR SELECT USING (is_published = true);

-- Politique d'écriture pour service role
DROP POLICY IF EXISTS "Écriture par service role" ON veille_articles;
CREATE POLICY "Écriture par service role" ON veille_articles
FOR ALL USING (auth.role() = 'service_role'); 