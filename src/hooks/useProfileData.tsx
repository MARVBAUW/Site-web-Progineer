
import { useState, useEffect } from 'react';
import { User } from '@supabase/supabase-js';

interface ProfileData {
  fullName: string;
  email: string;
  phone: string;
  address: string;
  company: string;
}

export const useProfileData = (user: User | null) => {
  const [profileData, setProfileData] = useState<ProfileData>({
    fullName: '',
    email: '',
    phone: '',
    address: '',
    company: '',
  });

  useEffect(() => {
    if (user) {
      setProfileData({
        fullName: user.user_metadata?.full_name || '',
        email: user.email || '',
        phone: user.user_metadata?.phone || '',
        address: user.user_metadata?.address || '',
        company: user.user_metadata?.company_name || '',
      });
    }
  }, [user]);

  const updateProfile = async (data: Partial<ProfileData>) => {
    setProfileData(prev => ({ ...prev, ...data }));
  };

  return { profileData, updateProfile };
};
