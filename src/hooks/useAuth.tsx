
import { useAuthContext } from './auth/AuthContext';

// Re-export the auth context hook as useAuth for backward compatibility
export const useAuth = useAuthContext;

// Maintain backward compatibility by also exporting the types
export type { User } from '@supabase/supabase-js';

// Re-export the AuthProvider for convenience
export { AuthProvider } from './auth/AuthProvider';
