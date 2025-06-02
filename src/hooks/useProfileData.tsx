
import { useState, useEffect } from 'react';
import { User } from '@/hooks/useAuth';
import { ProfileData } from '@/types/profile';

export const useProfileData = (user: User | null) => {
  const [profileData, setProfileData] = useState<ProfileData>({
    fullName: '',
    email: '',
    phone: '',
    address: '',
    company: '',
  });

  // Load user data when user object changes
  useEffect(() => {
    if (user) {
      setProfileData({
        fullName: user.user_metadata?.full_name || `${user.firstName || ''} ${user.lastName || ''}`.trim() || '',
        email: user.email || '',
        phone: user.user_metadata?.phone || '',
        address: user.user_metadata?.address || '',
        company: user.user_metadata?.company || '',
      });
    }
  }, [user]);

  const updateProfile = (data: ProfileData) => {
    // Here we would implement the profile update logic using Supabase
    // For now, just update the local state
    setProfileData(data);
  };

  return { profileData, updateProfile };
};
