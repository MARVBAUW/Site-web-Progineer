
import React, { useState } from 'react';
import { Plus, Search, WifiOff, CircleDot } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { ConversationType } from '@/types/messaging';
import { Input } from '@/components/ui/input';

interface ConversationsListProps {
  conversations: ConversationType[];
  activeConversationId: number;
  onSelectConversation: (conversation: ConversationType) => void;
}

const ConversationsList = ({ 
  conversations, 
  activeConversationId, 
  onSelectConversation 
}: ConversationsListProps) => {
  const [searchQuery, setSearchQuery] = useState('');
  
  // Filtrer les conversations en fonction de la recherche
  const filteredConversations = conversations.filter(conv => 
    conv.contact.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="md:col-span-1 bg-card rounded-xl border border-border overflow-hidden shadow-sm">
      <div className="p-4 border-b border-border bg-muted/50 flex justify-between items-center">
        <h2 className="font-medium">Conversations</h2>
        <Button variant="ghost" size="sm" className="h-8 w-8 p-0">
          <Plus className="h-4 w-4" />
        </Button>
      </div>
      
      {/* Champ de recherche */}
      <div className="p-3 border-b border-gray-100">
        <div className="relative">
          <Search className="absolute left-2 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-600 dark:text-gray-300" />
          <Input
            type="text"
            placeholder="Rechercher un contact..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="pl-8 py-1 h-9 text-sm"
          />
        </div>
      </div>
      
      <div className="overflow-y-auto h-[calc(600px-110px)]">
        {filteredConversations.length > 0 ? (
          filteredConversations.map((conv) => (
            <div 
              key={conv.id}
              className={`p-3 border-b border-gray-100 cursor-pointer hover:bg-muted/50 ${
                activeConversationId === conv.id ? 'bg-khaki-50' : ''
              }`}
              onClick={() => onSelectConversation(conv)}
            >
              <div className="flex items-center">
                <div className="relative">
                  <Avatar className="h-10 w-10">
                    <AvatarImage src={conv.contact.avatar} />
                    <AvatarFallback className="bg-khaki-200 text-khaki-700">
                      {conv.contact.name.split(' ').map(n => n[0]).join('')}
                    </AvatarFallback>
                  </Avatar>
                  {/* Indicateur de statut */}
                  <div className={`absolute -bottom-1 -right-1 h-3.5 w-3.5 rounded-full border-2 border-white ${
                    conv.contact.status === 'online' ? 'bg-green-500' : 'bg-gray-300'
                  }`}>
                    {conv.contact.status === 'online' && 
                      <CircleDot className="h-3.5 w-3.5 text-green-500" />
                    }
                    {conv.contact.status === 'offline' && 
                      <WifiOff className="h-3.5 w-3.5 text-gray-600 dark:text-gray-300" />
                    }
                  </div>
                </div>
                <div className="ml-3">
                  <div className="font-medium">{conv.contact.name}</div>
                  <div className="text-xs text-low-contrast flex items-center">
                    {conv.contact.role}
                    <span className={`ml-2 inline-block h-2 w-2 rounded-full ${
                      conv.contact.status === 'online' ? 'bg-green-500' : 'bg-gray-300'
                    }`}></span>
                    <span className="ml-1 text-xs">
                      {conv.contact.status === 'online' ? 'En ligne' : 'Hors ligne'}
                    </span>
                  </div>
                </div>
              </div>
              <div className="mt-2 text-sm text-gray-600 dark:text-gray-300 truncate">
                {conv.messages[conv.messages.length - 1].text}
              </div>
              <div className="mt-1 text-xs text-low-contrast">
                {conv.messages[conv.messages.length - 1].date}
              </div>
            </div>
          ))
        ) : (
          <div className="p-4 text-center text-low-contrast">
            Aucun contact ne correspond à votre recherche
          </div>
        )}
      </div>
    </div>
  );
};

export default ConversationsList;
