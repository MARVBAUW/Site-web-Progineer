
import React from 'react';
import { Button } from '@/components/ui/button';
import { X } from 'lucide-react';

interface Notification {
  id: string;
  title: string;
  description: string;
  date: string;
  read: boolean;
}

interface NotificationsPanelProps {
  open: boolean;
  setOpen: (open: boolean) => void;
  notifications: Notification[];
  setNotifications: (notifications: Notification[]) => void;
}

export const NotificationsPanel: React.FC<NotificationsPanelProps> = ({
  open,
  setOpen,
  notifications,
  setNotifications
}) => {
  if (!open) return null;

  const markAsRead = (id: string) => {
    setNotifications(
      notifications.map(notification =>
        notification.id === id ? { ...notification, read: true } : notification
      )
    );
  };

  return (
    <div className="fixed top-0 right-0 h-full w-80 bg-white dark:bg-gray-800 border-l border-gray-200 dark:border-gray-700 shadow-lg z-50">
      <div className="p-4 border-b border-gray-200 dark:border-gray-700">
        <div className="flex items-center justify-between">
          <h3 className="text-lg font-semibold">Notifications</h3>
          <Button variant="ghost" size="sm" onClick={() => setOpen(false)}>
            <X className="h-4 w-4" />
          </Button>
        </div>
      </div>
      
      <div className="p-4 space-y-4">
        {notifications.length === 0 ? (
          <p className="text-gray-500 text-center">Aucune notification</p>
        ) : (
          notifications.map((notification) => (
            <div
              key={notification.id}
              className={`p-3 rounded-lg border ${
                notification.read 
                  ? 'bg-gray-50 dark:bg-gray-700 border-gray-200 dark:border-gray-600' 
                  : 'bg-blue-50 dark:bg-blue-900 border-blue-200 dark:border-blue-700'
              }`}
              onClick={() => markAsRead(notification.id)}
            >
              <h4 className="font-medium text-sm">{notification.title}</h4>
              <p className="text-xs text-gray-600 dark:text-gray-300 mt-1">
                {notification.description}
              </p>
              <p className="text-xs text-gray-500 mt-2">
                {new Date(notification.date).toLocaleDateString()}
              </p>
            </div>
          ))
        )}
      </div>
    </div>
  );
};
