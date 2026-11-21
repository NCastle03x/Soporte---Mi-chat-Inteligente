// src/components/chat/MessageBubble.tsx
import { Message } from '@/lib/types';
import { Avatar, AvatarFallback } from '@/components/ui/avatar';
import { cn } from '@/lib/utils';

interface MessageBubbleProps {
  message: Message;
}

export function MessageBubble({ message }: MessageBubbleProps) {
  const isUser = message.role === 'user';

  return (
    <div
      className={cn(
        'flex gap-3',
        isUser ? 'flex-row-reverse' : 'flex-row'
      )}
      role="listitem"
      aria-label={`Mensaje de ${isUser ? 'usuario' : 'asistente'}`}
    >
      <Avatar className="h-8 w-8">
        <AvatarFallback>{isUser ? 'U' : 'A'}</AvatarFallback>
      </Avatar>
      <div
        className={cn(
          'max-w-[80%] rounded-lg px-4 py-2',
          isUser
            ? 'bg-blue-600 text-white'
            : 'bg-muted text-muted-foreground'
        )}
      >
        <p className="text-sm whitespace-pre-wrap">{message.content}</p>
        <span className="mt-1 block text-xs opacity-70">
          {message.timestamp}
        </span>
      </div>
    </div>
  );
}