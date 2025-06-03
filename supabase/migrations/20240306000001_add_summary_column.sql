-- Add summary column to veille_articles table
ALTER TABLE public.veille_articles
ADD COLUMN IF NOT EXISTS summary TEXT;

-- Update existing rows to use content as summary if summary is null
UPDATE public.veille_articles
SET summary = content
WHERE summary IS NULL;

-- Add comment to the column
COMMENT ON COLUMN public.veille_articles.summary IS 'Résumé de l''article';

-- Refresh the schema cache
NOTIFY pgrst, 'reload schema'; 