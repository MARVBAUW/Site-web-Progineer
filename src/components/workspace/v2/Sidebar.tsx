
import React from 'react';
import { Home, Folder, User, Settings } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface SidebarProps {
  open: boolean;
  setOpen: (open: boolean) => void;
  currentPage: string;
  setCurrentPage: (page: string) => void;
}

export const Sidebar: React.FC<SidebarProps> = ({ open, setOpen, currentPage, setCurrentPage }) => {
  const menuItems = [
    { id: 'dashboard', label: 'Tableau de bord', icon: Home },
    { id: 'projects', label: 'Projets', icon: Folder },
    { id: 'documents', label: 'Documents', icon: Folder },
    { id: 'profile', label: 'Profil', icon: User },
    { id: 'settings', label: 'Paramètres', icon: Settings },
  ];

  return (
    <aside className={`bg-white dark:bg-gray-800 border-r border-gray-200 dark:border-gray-700 transition-all duration-300 ${
      open ? 'w-64' : 'w-0 lg:w-16'
    } overflow-hidden`}>
      <div className="p-4">
        <div className="space-y-2">
          {menuItems.map((item) => (
            <Button
              key={item.id}
              variant={currentPage === item.id ? 'default' : 'ghost'}
              className="w-full justify-start"
              onClick={() => setCurrentPage(item.id)}
            >
              <item.icon className="h-5 w-5" />
              {open && <span className="ml-2">{item.label}</span>}
            </Button>
          ))}
        </div>
      </div>
    </aside>
  );
};
