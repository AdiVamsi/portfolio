'use client';

import Image from 'next/image';
import { useChat } from '@ai-sdk/react';
import { DefaultChatTransport, getToolName, isToolUIPart } from 'ai';
import { AnimatePresence, motion } from 'framer-motion';
import { AlertCircle, ArrowLeft, RotateCcw, Sparkles } from 'lucide-react';
import { useEffect, useRef, useState } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';

import ChatComposer from './ChatComposer';
import ChatLanding from './ChatLanding';
import ChatMessageContent from './ChatMessageContent';
import ToolResultCard from './ToolResultCard';

export default function ChatInterface() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const bottomRef = useRef<HTMLDivElement>(null);
  const startedRef = useRef(false);
  const [input, setInput] = useState('');

  const {
    messages,
    sendMessage,
    setMessages,
    status,
    error,
    clearError,
  } = useChat({
    transport: new DefaultChatTransport({ api: '/api/chat' }),
  });

  const isLoading = status === 'submitted' || status === 'streaming';
  const hasMessages = messages.length > 0;

  useEffect(() => {
    const q = searchParams.get('q');
    if (q && !startedRef.current) {
      startedRef.current = true;
      sendMessage({ text: q });
    }
  }, [searchParams, sendMessage]);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages, isLoading]);

  function handleSubmit(event?: React.FormEvent) {
    event?.preventDefault();
    if (!input.trim() || isLoading) return;
    clearError();
    sendMessage({ text: input.trim() });
    setInput('');
  }

  function handleQuickAction(question: string) {
    if (isLoading) return;
    clearError();
    sendMessage({ text: question });
  }

  function handleReset() {
    setMessages([]);
    setInput('');
    clearError();
    startedRef.current = false;
    router.replace('/chat');
  }

  return (
    <div className="min-h-screen" style={{ background: 'var(--background)' }}>
      <header className="sticky top-0 z-20 border-b px-4 py-4 backdrop-blur-xl"
        style={{ borderColor: 'var(--border)', background: 'rgba(255,255,255,0.82)' }}>
        <div className="mx-auto flex w-full max-w-5xl items-center gap-3">
          <button
            onClick={() => router.push('/')}
            className="inline-flex h-11 w-11 items-center justify-center rounded-full border transition-opacity hover:opacity-75"
            style={{ borderColor: 'var(--border)', color: 'var(--text-muted)', background: 'var(--surface)' }}
          >
            <ArrowLeft size={17} />
          </button>

          <div className="flex items-center gap-3">
            <div className="relative h-11 w-11 overflow-hidden rounded-full border bg-white"
              style={{ borderColor: 'var(--accent-border)' }}>
              <Image
                src="/images/adi-profile.png"
                alt="Portrait of Adi"
                fill
                sizes="2.75rem"
                className="scale-[1.32] object-cover"
                style={{ objectPosition: 'center 40%' }}
              />
            </div>

            <div>
              <p className="text-sm font-semibold" style={{ color: 'var(--text)' }}>
                Adi Vamsi Sai
              </p>
              <p className="text-xs" style={{ color: 'var(--text-muted)' }}>
                Interactive portfolio assistant
              </p>
            </div>
          </div>

          <div className="ml-auto flex items-center gap-2">
            <div className="hidden items-center gap-2 rounded-full border px-3 py-1.5 text-xs font-medium sm:inline-flex"
              style={{ borderColor: 'var(--border)', color: 'var(--text-sec)', background: 'var(--surface)' }}>
              <Sparkles size={13} style={{ color: 'var(--accent)' }} />
              GPT-4o mini + tools
            </div>

            {hasMessages && (
              <button
                onClick={handleReset}
                className="inline-flex items-center gap-2 rounded-full border px-3 py-2 text-xs font-medium"
                style={{ borderColor: 'var(--border)', color: 'var(--text-muted)', background: 'var(--surface)' }}
              >
                <RotateCcw size={13} />
                Restart
              </button>
            )}
          </div>
        </div>
      </header>

      {error && (
        <div className="px-4 pt-4">
          <div className="mx-auto flex w-full max-w-5xl items-start gap-3 rounded-2xl border px-4 py-3"
            style={{ borderColor: 'rgba(220,38,38,0.18)', background: 'rgba(220,38,38,0.05)', color: 'var(--text)' }}>
            <AlertCircle size={18} className="mt-0.5 shrink-0" />
            <div>
              <p className="text-sm font-medium">Something went wrong</p>
              <p className="mt-1 text-sm" style={{ color: 'var(--text-muted)' }}>
                {error.message}
              </p>
            </div>
          </div>
        </div>
      )}

      <main className="px-4">
        <div className="mx-auto w-full max-w-5xl">
          {!hasMessages ? (
            <ChatLanding onSelect={handleQuickAction} />
          ) : (
            <div className="py-8">
              <AnimatePresence initial={false}>
                {messages.map((message, index) => {
                  if (message.role === 'user') {
                    const text = message.parts
                      .filter((part) => part.type === 'text')
                      .map((part) => ('text' in part ? part.text : ''))
                      .join('\n');

                    return (
                      <motion.div
                        key={message.id || index}
                        initial={{ opacity: 0, y: 12 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -8 }}
                        className="mb-6 flex justify-end"
                      >
                        <div
                          className="max-w-2xl rounded-[1.75rem] rounded-tr-md px-5 py-4 text-sm leading-7"
                          style={{
                            background: 'var(--accent-dim)',
                            color: 'var(--text)',
                            border: '1px solid var(--accent-border)',
                            boxShadow: 'var(--shadow-card)',
                          }}
                        >
                          <ChatMessageContent text={text} />
                        </div>
                      </motion.div>
                    );
                  }

                  if (message.role !== 'assistant') {
                    return null;
                  }

                  const toolCards = message.parts
                    .map((part, partIndex) => {
                      if (isToolUIPart(part) && part.state === 'output-available') {
                        return (
                          <ToolResultCard
                            key={`${message.id || index}-tool-${partIndex}`}
                            toolName={getToolName(part)}
                            result={part.output}
                          />
                        );
                      }
                      return null;
                    })
                    .filter(Boolean);

                  const text = message.parts
                    .filter((part) => part.type === 'text')
                    .map((part) => ('text' in part ? part.text : ''))
                    .join('\n')
                    .trim();

                  return (
                    <motion.div
                      key={message.id || index}
                      initial={{ opacity: 0, y: 12 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -8 }}
                      className="mb-8"
                    >
                      <div className="mb-3 flex items-center gap-3">
                        <div className="relative h-10 w-10 overflow-hidden rounded-full border bg-white"
                          style={{ borderColor: 'var(--accent-border)' }}>
                          <Image
                            src="/images/adi-profile.png"
                            alt="Portrait of Adi"
                            fill
                            sizes="2.5rem"
                            className="scale-[1.32] object-cover"
                            style={{ objectPosition: 'center 40%' }}
                          />
                        </div>
                        <div>
                          <p className="text-sm font-semibold" style={{ color: 'var(--text)' }}>
                            Adi
                          </p>
                          <p className="text-xs" style={{ color: 'var(--text-muted)' }}>
                            Portfolio copilot
                          </p>
                        </div>
                      </div>

                      <div className="grid gap-3">
                        {toolCards}

                        {text && (
                          <div
                            className="max-w-3xl rounded-[1.85rem] border px-5 py-4"
                            style={{
                              borderColor: 'var(--border)',
                              background: 'var(--surface)',
                              boxShadow: 'var(--shadow-card)',
                              color: 'var(--text-sec)',
                            }}
                          >
                            <ChatMessageContent text={text} />
                          </div>
                        )}
                      </div>
                    </motion.div>
                  );
                })}
              </AnimatePresence>

              {isLoading && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="mb-8"
                >
                  <div className="mb-3 flex items-center gap-3">
                    <div className="relative h-10 w-10 overflow-hidden rounded-full border bg-white"
                      style={{ borderColor: 'var(--accent-border)' }}>
                      <Image
                        src="/images/adi-profile.png"
                        alt="Portrait of Adi"
                        fill
                        sizes="2.5rem"
                        className="scale-[1.32] object-cover"
                        style={{ objectPosition: 'center 40%' }}
                      />
                    </div>
                    <div>
                      <p className="text-sm font-semibold" style={{ color: 'var(--text)' }}>
                        Adi
                      </p>
                      <p className="text-xs" style={{ color: 'var(--text-muted)' }}>
                        Thinking through it
                      </p>
                    </div>
                  </div>
                  <div className="max-w-md rounded-[1.85rem] border px-5 py-4"
                    style={{ borderColor: 'var(--border)', background: 'var(--surface)', boxShadow: 'var(--shadow-card)' }}>
                    <div className="flex gap-2">
                      {[0, 1, 2].map((dot) => (
                        <motion.div
                          key={dot}
                          animate={{ opacity: [0.25, 1, 0.25], y: [0, -3, 0] }}
                          transition={{ duration: 0.9, repeat: Infinity, delay: dot * 0.12 }}
                          className="h-2 w-2 rounded-full"
                          style={{ background: 'var(--accent)' }}
                        />
                      ))}
                    </div>
                  </div>
                </motion.div>
              )}

              <div ref={bottomRef} />
            </div>
          )}
        </div>
      </main>

      <ChatComposer
        input={input}
        onInputChange={setInput}
        onSubmit={handleSubmit}
        onQuickAction={handleQuickAction}
        onReset={handleReset}
        isLoading={isLoading}
        hasMessages={hasMessages}
      />
    </div>
  );
}
