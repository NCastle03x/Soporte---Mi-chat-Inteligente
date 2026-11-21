'use client';

import { useState, useEffect } from 'react';
import { mockConversations } from '@/lib/mock-data';
import { Sidebar } from '@/components/chat/Sidebar';
import { MessageBubble } from '@/components/chat/MessageBubble';
import { ChatInput } from '@/components/chat/ChatInput';
import { Message } from '@/lib/types';

export default function Home() {
  const [activeId, setActiveId] = useState(mockConversations[0].id);
  const [messages, setMessages] = useState<Message[]>([]);

''  //'' Cargar mensajes iniciales al cambiar de chat
  useEffect(() => {
    const active = mockConversations.find((c) => c.id === activeId);
    if (active) setMessages(active.messages);
  }, [activeId]);

  // ESTA ES LA FUNCIÓN QUE ACTUALIZA LA PANTALLA
  const handleSendMessage = (text: string) => {
    const userMsg: Message = {
      id: Date.now().toString(),
      role: 'user',
      content: text,
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
    };
    setMessages((prev) => [...prev, userMsg]); // Agrega tu mensaje

    // Simulamos respuesta
    setTimeout(() => {
      const aiMsg: Message = {
        id: (Date.now() + 1).toString(),
        role: 'assistant',
        content: 'Pronto recibirás una respuesta de nuestro asistente.',
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
      };
      setMessages((prev) => [...prev, aiMsg]);
    }, 1000);
  };

  return (
    <div className="flex h-screen">
      <div className="hidden md:block">
        <Sidebar
          conversations={mockConversations}
          activeId={activeId}
          onSelect={setActiveId}
        />
      </div>

      <div className="flex flex-1 flex-col">
        <header className="border-b p-4">
          <h1 className="text-xl font-bold">
            {mockConversations.find((c) => c.id === activeId)?.title}
          </h1>
        </header>

        <main className="flex-1 overflow-y-auto p-4 space-y-4" role="list">
          {}
          {messages.map((msg) => (
            <MessageBubble key={msg.id} message={msg} />
          ))}
        </main>

        {}
        <ChatInput onSend={handleSendMessage} />
      </div>
    </div>
  );
}