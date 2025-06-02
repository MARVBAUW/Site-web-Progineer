
export interface ProfileData {
  id: string;
  email?: string;
  fullName?: string;
  firstName?: string;
  lastName?: string;
  avatarUrl?: string;
  phone?: string;
  address?: string;
  companyName?: string;
  username?: string;
  role?: string;
}

export interface UserProfile {
  id: string;
  full_name?: string | null;
  avatar_url?: string | null;
  email?: string | null;
  phone?: string | null;
  address?: string | null;
  company_name?: string | null;
  username?: string | null;
  role?: string | null;
  updated_at?: string | null;
}
