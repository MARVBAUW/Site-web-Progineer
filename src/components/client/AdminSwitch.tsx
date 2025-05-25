
import React from 'react';
import { Switch } from '@/components/ui/switch';
import { Label } from '@/components/ui/label';
import { Shield } from 'lucide-react';
import { useAuth } from '@/hooks/useAuth';

interface AdminSwitchProps {
  isAdminMode: boolean;
  onToggle: (checked: boolean) => void;
}

const AdminSwitch = ({ isAdminMode, onToggle }: AdminSwitchProps) => {
  const { user } = useAuth();
  
  // Check if the user is an administrator
  const isAdmin = user?.email && ['marvinbauwens@gmail.com', 'progineer.moe@gmail.com'].includes(user.email);
  
  // If the user is not admin, don't display the switch
  if (!isAdmin) return null;
  
  return (
    <div className="flex items-center space-x-3 bg-card rounded-lg px-3 py-2 border border-border shadow-sm">
      <Shield className={`h-4 w-4 ${isAdminMode ? 'text-red-500' : 'text-gray-600 dark:text-gray-300'}`} />
      <div className="flex items-center space-x-2">
        <Switch 
          id="admin-mode" 
          checked={isAdminMode}
          onCheckedChange={onToggle}
          className={isAdminMode ? 'bg-red-500' : ''}
        />
        <Label htmlFor="admin-mode" className="text-sm font-medium">
          {isAdminMode ? 'Mode administrateur' : 'Mode client'}
        </Label>
      </div>
    </div>
  );
};

export default AdminSwitch;
