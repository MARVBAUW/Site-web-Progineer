-- Migration basique pour créer la table des articles de veille réglementaire
-- Version ultra-simplifiée pour Supabase

CREATE TABLE veille_articles (
  id TEXT PRIMARY KEY,
  title TEXT NOT NULL,
  excerpt TEXT NOT NULL,
  content TEXT NOT NULL,
  category TEXT NOT NULL,
  priority TEXT NOT NULL,
  tags TEXT[] DEFAULT '{}',
  published_at DATE NOT NULL,
  read_time TEXT NOT NULL,
  views INTEGER DEFAULT 0,
  author TEXT NOT NULL,
  sources JSONB DEFAULT '[]',
  seo_keywords TEXT[] DEFAULT '{}',
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  is_published BOOLEAN DEFAULT FALSE
); 