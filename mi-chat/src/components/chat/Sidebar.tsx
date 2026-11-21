import { Conversation } from '@/lib/types';
import { Button } from '@/components/ui/button';
import { ScrollArea } from '@/components/ui/scroll-area';

interface SidebarProps {
  conversations: Conversation[];
  activeId?: string;
  onSelect?: (id: string) => void;
}

export function Sidebar({ conversations, activeId, onSelect }: SidebarProps) {
  return (
    <aside className="flex h-full w-64 flex-col border-r bg-sidebar">
      <div className="p-4">
        <h2 className="text-lg font-semibold">Conversaciones</h2>
      </div>
      <ScrollArea className="flex-1">
        <nav className="space-y-1 p-2" aria-label="Lista de conversaciones">
          {conversations.map((conv) => (
            <Button
              key={conv.id}
              variant={conv.id === activeId ? 'secondary' : 'ghost'}
              className="w-full justify-start"
              onClick={() => onSelect?.(conv.id)}
            >
              {conv.title}
            </Button>
          ))}
        </nav>
      </ScrollArea>
    </aside>
  );
}