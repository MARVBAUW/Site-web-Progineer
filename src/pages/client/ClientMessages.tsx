import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import Container from '@/components/common/Container';
import ClientNavigation from '@/components/client/ClientNavigation';
import { useAuth } from '@/hooks/useAuth';
import Navbar from '@/components/layout/Navbar';
import ConversationsList from '@/components/client/messages/ConversationsList';
import MessageDisplay from '@/components/client/messages/MessageDisplay';

const ClientMessages = () => {
  const { user } = useAuth();
  const [selectedConversation, setSelectedConversation] = useState<string | null>(null);

  // Placeholder data for conversations and messages
  const conversationsData = [
    { id: '1', title: 'Projet de construction - Discussion générale' },
    { id: '2', title: 'Questions techniques - Fondations' },
    { id: '3', title: 'Suivi administratif - Permis de construire' },
  ];

  const messagesData = {
    '1': [
      { id: 'm1', sender: 'client', content: 'Bonjour, où en est le projet ?' },
      { id: 'm2', sender: 'architecte', content: 'Les plans sont en cours de finalisation.' },
    ],
    '2': [
      { id: 'm3', sender: 'client', content: 'Quelles sont les options pour les fondations ?' },
      { id: 'm4', sender: 'ingénieur', content: 'Nous recommandons des fondations profondes.' },
    ],
    '3': [
      { id: 'm5', sender: 'client', content: 'Avez-vous des nouvelles du permis de construire ?' },
      { id: 'm6', sender: 'administratif', content: 'Le dossier est en cours d\'instruction.' },
    ],
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
                      selectedId={selectedConversation}
                      onSelect={setSelectedConversation}
                    />
                  </div>
                  
                  {/* Message Display */}
                  <div className="flex-1">
                    <MessageDisplay 
                      conversationId={selectedConversation}
                      currentUser={user}
                    />
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
