
import { useState, useEffect } from 'react';
import { User } from '@supabase/supabase-js';

interface ProfileData {
  full_name: string;
  email: string;
  phone: string;
  address: string;
  company_name: string;
}

export const useProfileData = (user: User | null) => {
  const [profileData, setProfileData] = useState<ProfileData>({
    full_name: '',
    email: '',
    phone: '',
    address: '',
    company_name: '',
  });

  useEffect(() => {
    if (user) {
      setProfileData({
        full_name: user.user_metadata?.full_name || '',
        email: user.email || '',
        phone: user.user_metadata?.phone || '',
        address: user.user_metadata?.address || '',
        company_name: user.user_metadata?.company_name || '',
      });
    }
  }, [user]);

  const updateProfile = async (data: Partial<ProfileData>) => {
    setProfileData(prev => ({ ...prev, ...data }));
  };

  return { profileData, updateProfile };
};
