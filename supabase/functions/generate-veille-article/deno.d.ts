// Types pour l'environnement Deno dans les Edge Functions Supabase

declare global {
  namespace Deno {
    interface Env {
      get(key: string): string | undefined;
    }
    
    const env: Env;
  }
}

export {}; 