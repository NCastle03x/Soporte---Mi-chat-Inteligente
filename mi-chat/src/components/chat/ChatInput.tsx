'use client';

import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import { sendMessage } from '@/app/actions';
import { useRef } from 'react';

interface ChatInputProps {
  disabled?: boolean;
  onSend: (text: string) => void; // Recibe la orden de actualizar
}

export function ChatInput({ disabled, onSend }: ChatInputProps) {
  const formRef = useRef<HTMLFormElement>(null);

  return (
    <form
      ref={formRef}
      action={async (formData) => {
        const text = formData.get('message') as string;
        if (!text.trim()) return;
        
        await sendMessage(formData); // 1. Lo manda al servidor
        onSend(text);                // 2. Lo manda a la pantalla
        formRef.current?.reset();    // 3. Limpia el input
      }}
      className="flex items-end gap-2 border-t bg-background p-4"
    >
      <Textarea
        name="message"
        placeholder="Escribe tu duda..."
        className="min-h-[44px] resize-none"
        required
        disabled={disabled}
      />
      <Button type="submit" disabled={disabled}>
        Enviar
      </Button>
    </form>
  );
}