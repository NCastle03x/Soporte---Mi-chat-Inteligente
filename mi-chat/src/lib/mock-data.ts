import { Conversation } from './types';

export const mockConversations: Conversation[] = [
  {
    id: '1',
    title: 'Preguntas sobre Chatbot',
    messages: [
      {
        id: 'm1',
        role: 'user',
        content: '¿Como puedo crear un chatbot inteligente en una página web?',
        timestamp: '10:00',
      },
      {
        id: 'm2',
        role: 'assistant',
        content:
          'Hola, soy tu asistente virtual. ¿En qué puedo ayudarte hoy?',
        timestamp: '10:01',
      },
    ],
  },
  {
    id: '2',
    title: 'Calidad en el servicio al cliente',
    messages: [
      {
        id: 'm3',
        role: 'user',
        content: '¿Como puedo mejorar la calidad del servicio al cliente?',
        timestamp: '11:20',
      },
      {
        id: 'm4',
        role: 'assistant',
        content:
          'Mejorar la calidad del servicio al cliente puede incluir una comunicación efectiva, resolución rápida de problemas y atención personalizada.',
        timestamp: '11:22',
      },
    ],
  },
];