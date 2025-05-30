
import React from 'react';
import { Mail } from "lucide-react";

interface ClientHeaderProps {
  client: {
    name: string;
    email: string;
  };
}

const ClientHeader: React.FC<ClientHeaderProps> = ({ client }) => {
  return (
    <div>
      <h2 className="text-2xl font-semibold text-gray-900 dark:text-white">{client.name}</h2>
      <div className="flex items-center space-x-2 text-sm text-low-contrast">
        <Mail className="h-4 w-4" />
        <span>{client.email}</span>
      </div>
    </div>
  );
};

export default ClientHeader;
