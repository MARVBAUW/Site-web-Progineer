
import { useState, useEffect } from 'react';
import { User } from '@supabase/supabase-js';
import { supabase } from '@/integrations/supabase/client';
import { ProfileData } from '@/types/profile';

export const useProfileData = (user: User | null) => {
  const [profileData, setProfileData] = useState<ProfileData | null>(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (user) {
      loadProfile();
    }
  }, [user]);

  const loadProfile = async () => {
    if (!user) return;
    
    setLoading(true);
    try {
      const { data, error } = await supabase
        .from('profiles')
        .select('*')
        .eq('id', user.id)
        .single();

      if (error && error.code !== 'PGRST116') {
        throw error;
      }

      const profile: ProfileData = {
        id: user.id,
        email: user.email,
        fullName: data?.full_name || '',
        firstName: data?.full_name?.split(' ')[0] || '',
        lastName: data?.full_name?.split(' ').slice(1).join(' ') || '',
        avatarUrl: data?.avatar_url || '',
        phone: data?.phone || '',
        address: data?.address || '',
        companyName: data?.company_name || '',
        username: data?.username || '',
        role: data?.role || 'user',
      };

      setProfileData(profile);
    } catch (error) {
      console.error('Erreur lors du chargement du profil:', error);
    } finally {
      setLoading(false);
    }
  };

  const updateProfile = async (updates: Partial<ProfileData>) => {
    if (!user) return;

    setLoading(true);
    try {
      const { error } = await supabase
        .from('profiles')
        .upsert({
          id: user.id,
          full_name: updates.fullName,
          avatar_url: updates.avatarUrl,
          phone: updates.phone,
          address: updates.address,
          company_name: updates.companyName,
          username: updates.username,
          updated_at: new Date().toISOString(),
        });

      if (error) throw error;

      setProfileData(prev => prev ? { ...prev, ...updates } : null);
    } catch (error) {
      console.error('Erreur lors de la mise à jour du profil:', error);
      throw error;
    } finally {
      setLoading(false);
    }
  };

  return {
    profileData,
    updateProfile,
    loading,
  };
};
