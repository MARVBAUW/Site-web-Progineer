-- Correction de la structure de la table veille_articles
BEGIN;

-- Ajout des colonnes manquantes
ALTER TABLE public.veille_articles
ADD COLUMN IF NOT EXISTS read_time INTEGER NOT NULL DEFAULT 5,
ADD COLUMN IF NOT EXISTS priority INTEGER NOT NULL DEFAULT 1,
ADD COLUMN IF NOT EXISTS excerpt TEXT,
ADD COLUMN IF NOT EXISTS category TEXT NOT NULL DEFAULT 'Réglementation';

-- Mise à jour des valeurs existantes
UPDATE public.veille_articles
SET 
    read_time = GREATEST(1, LENGTH(content) / 200), -- Estimation basée sur 200 mots par minute
    priority = 1,
    excerpt = COALESCE(summary, LEFT(content, 200)),
    category = 'Réglementation'
WHERE 
    read_time IS NULL 
    OR priority IS NULL 
    OR excerpt IS NULL 
    OR category IS NULL;

-- Ajout des contraintes NOT NULL
ALTER TABLE public.veille_articles
ALTER COLUMN read_time SET NOT NULL,
ALTER COLUMN priority SET NOT NULL,
ALTER COLUMN excerpt SET NOT NULL,
ALTER COLUMN category SET NOT NULL;

-- Rafraîchir le cache du schéma
NOTIFY pgrst, 'reload schema';

COMMIT; 