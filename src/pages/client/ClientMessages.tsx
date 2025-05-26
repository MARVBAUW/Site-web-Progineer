
import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import Container from '@/components/common/Container';
import ClientNavigation from '@/components/client/ClientNavigation';
import { useAuth } from '@/hooks/useAuth';
import Navbar from '@/components/layout/Navbar';
import ConversationsList from '@/components/client/messages/ConversationsList';
import MessageDisplay from '@/components/client/messages/MessageDisplay';
import { ConversationType, MessageType } from '@/types/messaging';

const ClientMessages = () => {
  const { user } = useAuth();
  const [selectedConversation, setSelectedConversation] = useState<ConversationType | null>(null);
  const [newMessage, setNewMessage] = useState('');

  // Mock conversations data
  const conversationsData: ConversationType[] = [
    {
      id: 1,
      contact: {
        name: 'Architecte Principal',
        role: 'Architecte',
        status: 'online'
      },
      messages: [
        { id: 'm1', sender: 'other', text: 'Bonjour, comment puis-je vous aider ?', date: '10:30' },
        { id: 'm2', sender: 'me', text: 'J\'aimerais discuter du projet.', date: '10:32' },
      ]
    },
    {
      id: 2,
      contact: {
        name: 'Ingénieur Structure',
        role: 'Ingénieur',
        status: 'offline'
      },
      messages: [
        { id: 'm3', sender: 'other', text: 'Les plans structurels sont prêts.', date: '09:15' },
      ]
    }
  ];

  const handleSendMessage = (e: React.FormEvent) => {
    e.preventDefault();
    if (newMessage.trim() && selectedConversation) {
      // Add message logic here
      console.log('Sending message:', newMessage);
      setNewMessage('');
    }
  };

  return (
    <>
      <Helmet>
        <title>Messages | Espace Client Progineer</title>
        <meta name="description" content="Échangez avec votre équipe projet et suivez les communications." />
      </Helmet>

      <Navbar />

      <section className="py-16 bg-background">
        <Container size="lg">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
            {/* Sidebar Navigation */}
            <div className="lg:col-span-1">
              <ClientNavigation />
            </div>
            
            {/* Main Content */}
            <div className="lg:col-span-3">
              <div className="bg-card rounded-xl border border-border overflow-hidden">
                <div className="flex h-[600px]">
                  {/* Conversations List */}
                  <div className="w-1/3 border-r border-border">
                    <ConversationsList 
                      conversations={conversationsData}
                      activeConversationId={selectedConversation?.id || 0}
                      onSelectConversation={setSelectedConversation}
                    />
                  </div>
                  
                  {/* Message Display */}
                  <div className="flex-1">
                    {selectedConversation ? (
                      <MessageDisplay 
                        conversation={selectedConversation}
                        newMessage={newMessage}
                        setNewMessage={setNewMessage}
                        onSendMessage={handleSendMessage}
                        user={user}
                      />
                    ) : (
                      <div className="flex items-center justify-center h-full text-muted-foreground">
                        Sélectionnez une conversation pour commencer
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
};

export default ClientMessages;
