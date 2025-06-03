-- Correction des contraintes de la table veille_articles
BEGIN;

-- Suppression des contraintes existantes
ALTER TABLE public.veille_articles
DROP CONSTRAINT IF EXISTS veille_articles_category_check,
DROP CONSTRAINT IF EXISTS veille_articles_priority_check;

-- Correction des types de données
ALTER TABLE public.veille_articles
ALTER COLUMN priority TYPE TEXT;

-- Conversion sécurisée de read_time
ALTER TABLE public.veille_articles
ALTER COLUMN read_time TYPE TEXT;

-- Mise à jour des valeurs existantes
UPDATE public.veille_articles
SET 
    read_time = CASE 
        WHEN read_time ~ '^[0-9]+$' THEN read_time
        ELSE '5'
    END,
    priority = CASE 
        WHEN priority = '1' THEN 'moyenne'
        WHEN priority = '2' THEN 'haute'
        WHEN priority = '0' THEN 'faible'
        ELSE 'moyenne'
    END,
    category = CASE
        WHEN LOWER(category) IN ('reglementation', 'materiaux', 'energie', 'urbanisme', 'environnement', 'financement') 
        THEN LOWER(category)
        ELSE 'reglementation'
    END;

-- Conversion finale de read_time en INTEGER
ALTER TABLE public.veille_articles
ALTER COLUMN read_time TYPE INTEGER USING read_time::integer;

-- Ajout des nouvelles contraintes
ALTER TABLE public.veille_articles
ADD CONSTRAINT veille_articles_category_check 
CHECK (category IN ('reglementation', 'materiaux', 'energie', 'urbanisme', 'environnement', 'financement')),
ADD CONSTRAINT veille_articles_priority_check 
CHECK (priority IN ('haute', 'moyenne', 'faible'));

-- Rafraîchir le cache du schéma
NOTIFY pgrst, 'reload schema';

COMMIT; 