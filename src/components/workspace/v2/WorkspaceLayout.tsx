import React, { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { Bell, Menu, User, Settings, LogOut } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { useAuth } from '@/hooks/useAuth';
import { Sidebar } from './Sidebar';
import { NotificationsPanel } from './NotificationsPanel';

export default function WorkspaceLayout() {
  const { user, signOut } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [notificationsOpen, setNotificationsOpen] = useState(false);
  const [currentPage, setCurrentPage] = useState('dashboard');
  const [notifications, setNotifications] = useState([
    {
      id: '1',
      title: 'Nouveau message',
      description: 'Vous avez reçu un nouveau message de l\'équipe Progineer.',
      date: '2023-05-15T10:00:00',
      read: false,
    },
    {
      id: '2',
      title: 'Mise à jour disponible',
      description: 'Une nouvelle version de l\'application est disponible.',
      date: '2023-05-14T15:30:00',
      read: true,
    },
  ]);

  useEffect(() => {
    // Determine current page from location
    const path = location.pathname;
    if (path.includes('dashboard')) setCurrentPage('dashboard');
    else if (path.includes('projects')) setCurrentPage('projects');
    else if (path.includes('documents')) setCurrentPage('documents');
    else if (path.includes('profile')) setCurrentPage('profile');
    else if (path.includes('settings')) setCurrentPage('settings');
  }, [location]);

  const getPageTitle = () => {
    switch (currentPage) {
      case 'dashboard':
        return 'Tableau de bord';
      case 'projects':
        return 'Mes projets';
      case 'documents':
        return 'Documents';
      case 'profile':
        return 'Mon profil';
      case 'settings':
        return 'Paramètres';
      default:
        return 'Espace de travail';
    }
  };

  const getPageDescription = () => {
    switch (currentPage) {
      case 'dashboard':
        return 'Bienvenue dans votre espace personnel';
      case 'projects':
        return 'Gérez vos projets de construction';
      case 'documents':
        return 'Accédez à tous vos documents';
      case 'profile':
        return 'Gérez vos informations personnelles';
      case 'settings':
        return 'Personnalisez votre expérience';
      default:
        return 'Gérez vos projets et documents';
    }
  };

  return (
    <div className="flex h-screen bg-background">
      <Sidebar
        open={sidebarOpen}
        setOpen={setSidebarOpen}
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
      />

      {/* Main Content */}
      <div className="flex-1 flex flex-col overflow-hidden">
        {/* Header */}
        <header className="bg-white dark:bg-gray-800 border-b border-gray-200 dark:border-gray-700 px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <Button
                variant="ghost"
                size="sm"
                onClick={() => setSidebarOpen(!sidebarOpen)}
                className="lg:hidden"
              >
                <Menu className="h-5 w-5" />
              </Button>
              
              <div>
                <h1 className="text-2xl font-bold text-gray-900 dark:text-gray-100">
                  {getPageTitle()}
                </h1>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  {getPageDescription()}
                </p>
              </div>
            </div>

            <div className="flex items-center space-x-4">
              <Button
                variant="ghost"
                size="sm"
                onClick={() => setNotificationsOpen(!notificationsOpen)}
                className="relative"
              >
                <Bell className="h-5 w-5" />
                {notifications.length > 0 && (
                  <span className="absolute -top-1 -right-1 h-3 w-3 bg-red-500 rounded-full"></span>
                )}
              </Button>

              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="ghost" className="relative h-8 w-8 rounded-full">
                    <Avatar className="h-8 w-8">
                      <AvatarImage src={user?.user_metadata?.avatar_url} alt="Avatar" />
                      <AvatarFallback>
                        {user?.email?.charAt(0).toUpperCase() || 'U'}
                      </AvatarFallback>
                    </Avatar>
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent className="w-56" align="end" forceMount>
                  <DropdownMenuLabel className="font-normal">
                    <div className="flex flex-col space-y-1">
                      <p className="text-sm font-medium leading-none">
                        {user?.user_metadata?.full_name || user?.email}
                      </p>
                      <p className="text-xs leading-none text-muted-foreground">
                        {user?.email}
                      </p>
                    </div>
                  </DropdownMenuLabel>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem onClick={() => setCurrentPage('profile')}>
                    <User className="mr-2 h-4 w-4" />
                    <span>Profil</span>
                  </DropdownMenuItem>
                  <DropdownMenuItem onClick={() => setCurrentPage('settings')}>
                    <Settings className="mr-2 h-4 w-4" />
                    <span>Paramètres</span>
                  </DropdownMenuItem>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem onClick={signOut}>
                    <LogOut className="mr-2 h-4 w-4" />
                    <span>Déconnexion</span>
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </div>
          </div>
        </header>

        {/* Notifications Panel */}
        <NotificationsPanel
          open={notificationsOpen}
          setOpen={setNotificationsOpen}
          notifications={notifications}
          setNotifications={setNotifications}
        />

        {/* Main Content Area */}
        <main className="flex-1 overflow-auto p-6">
          {/* Page content will be rendered here by the router */}
          <div className="container mx-auto">
            {/* Router outlet */}
          </div>
        </main>
      </div>
    </div>
  );
}
