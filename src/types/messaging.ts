
export interface MessageType {
  id: string;
  sender: 'me' | 'other';
  text: string;
  date: string;
}

export interface ContactType {
  name: string;
  role: string;
  avatar?: string;
  status: 'online' | 'offline';
}

export interface ConversationType {
  id: number;
  contact: ContactType;
  messages: MessageType[];
}
