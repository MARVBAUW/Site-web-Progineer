-- Modifications de la base de données
BEGIN;

-- Sécurisation des fonctions
ALTER FUNCTION public.update_updated_at_column() SECURITY DEFINER;
ALTER FUNCTION public.update_modified_column() SECURITY DEFINER;

-- Ajout de politiques RLS pour les tables sensibles
ALTER TABLE public.api_keys ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.admin_projects ENABLE ROW LEVEL SECURITY;

-- Politique pour api_keys
DROP POLICY IF EXISTS "api_keys_admin_only" ON public.api_keys;
CREATE POLICY "api_keys_admin_only" ON public.api_keys
    FOR ALL
    TO authenticated
    USING (auth.uid() IN (SELECT id FROM public.profiles WHERE role = 'admin'));

-- Politique pour admin_projects
DROP POLICY IF EXISTS "admin_projects_admin_only" ON public.admin_projects;
CREATE POLICY "admin_projects_admin_only" ON public.admin_projects
    FOR ALL
    TO authenticated
    USING (auth.uid() IN (SELECT id FROM public.profiles WHERE role = 'admin'));

-- Journalisation des tentatives de connexion
CREATE TABLE IF NOT EXISTS public.auth_logs (
    id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
    user_id UUID REFERENCES auth.users(id),
    event_type TEXT NOT NULL,
    ip_address TEXT,
    user_agent TEXT,
    created_at TIMESTAMPTZ DEFAULT NOW()
);

-- Politique pour auth_logs
DROP POLICY IF EXISTS "auth_logs_admin_only" ON public.auth_logs;
CREATE POLICY "auth_logs_admin_only" ON public.auth_logs
    FOR ALL
    TO authenticated
    USING (auth.uid() IN (SELECT id FROM public.profiles WHERE role = 'admin'));

-- Fonction pour logger les événements d'authentification
CREATE OR REPLACE FUNCTION public.log_auth_event()
RETURNS TRIGGER AS $$
BEGIN
    INSERT INTO public.auth_logs (user_id, event_type, ip_address, user_agent)
    VALUES (
        NEW.id,
        TG_ARGV[0],
        current_setting('request.headers', true)::json->>'x-forwarded-for',
        current_setting('request.headers', true)::json->>'user-agent'
    );
    RETURN NEW;
END;
$$ LANGUAGE plpgsql SECURITY DEFINER;

-- Trigger pour logger les connexions
DROP TRIGGER IF EXISTS log_auth_events ON auth.users;
CREATE TRIGGER log_auth_events
    AFTER INSERT ON auth.users
    FOR EACH ROW
    EXECUTE FUNCTION public.log_auth_event('user_created');

-- Index pour améliorer les performances
CREATE INDEX IF NOT EXISTS idx_auth_logs_user_id ON public.auth_logs(user_id);
CREATE INDEX IF NOT EXISTS idx_auth_logs_created_at ON public.auth_logs(created_at);

COMMIT; 