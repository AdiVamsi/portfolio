import { Suspense } from 'react';
import ChatInterface from '@/components/chat/ChatInterface';

export default function ChatPage() {
  return (
    <Suspense fallback={
      <div className="min-h-screen flex items-center justify-center"
        style={{ background: 'var(--background)', color: 'var(--text-muted)' }}>
        Loading…
      </div>
    }>
      <ChatInterface />
    </Suspense>
  );
}
