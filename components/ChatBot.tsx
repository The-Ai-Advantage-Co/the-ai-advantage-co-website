'use client';

import { useEffect, useRef, useState } from 'react';

type ChatMessage = {
  role: 'user' | 'assistant';
  content: string;
};

const INITIAL_GREETING: ChatMessage = {
  role: 'assistant',
  content:
    "Hi — I'm the AI assistant for The Ai Advantage Co. I can answer quick questions about services, pricing, brand kits, websites, or how it all works. What would you like to know?",
};

export default function ChatBot() {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState<ChatMessage[]>([INITIAL_GREETING]);
  const [input, setInput] = useState('');
  const [sending, setSending] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLTextAreaElement>(null);

  // Auto-scroll on new messages
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages, sending]);

  // Focus input when panel opens
  useEffect(() => {
    if (open) {
      setTimeout(() => inputRef.current?.focus(), 200);
    }
  }, [open]);

  async function sendMessage() {
    const trimmed = input.trim();
    if (!trimmed || sending) return;

    const newUserMsg: ChatMessage = { role: 'user', content: trimmed };
    const nextMessages = [...messages, newUserMsg];
    setMessages(nextMessages);
    setInput('');
    setSending(true);
    setError(null);

    try {
      // Send everything except the initial canned greeting
      const apiMessages = nextMessages.filter(
        (m, i) => !(i === 0 && m === INITIAL_GREETING),
      );

      const res = await fetch('/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ messages: apiMessages }),
      });

      const data = await res.json();

      if (!res.ok) {
        setError(data.error || 'Something went wrong. Try again.');
        return;
      }

      setMessages([
        ...nextMessages,
        { role: 'assistant', content: data.reply },
      ]);
    } catch {
      setError(
        "Couldn't reach the chatbot — check your connection or use the enquiry form.",
      );
    } finally {
      setSending(false);
    }
  }

  function handleKeyDown(e: React.KeyboardEvent<HTMLTextAreaElement>) {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      sendMessage();
    }
  }

  return (
    <>
      {/* Floating launcher button */}
      <button
        type="button"
        className="chatbot-launcher"
        onClick={() => setOpen((v) => !v)}
        aria-label={open ? 'Close chat' : 'Open chat'}
        aria-expanded={open}
      >
        {open ? (
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
            <line x1="18" y1="6" x2="6" y2="18" />
            <line x1="6" y1="6" x2="18" y2="18" />
          </svg>
        ) : (
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
            <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" />
          </svg>
        )}
      </button>

      {/* Chat panel */}
      <div
        className={`chatbot-panel ${open ? 'is-open' : ''}`}
        role="dialog"
        aria-label="Chat with The Ai Advantage assistant"
        aria-hidden={!open}
      >
        <div className="chatbot-header">
          <div className="chatbot-header-text">
            <div className="chatbot-title">Ask The Ai Advantage</div>
            <div className="chatbot-sub">Brief questions answered. Replies in seconds.</div>
          </div>
          <button
            type="button"
            className="chatbot-close"
            onClick={() => setOpen(false)}
            aria-label="Close chat"
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <line x1="18" y1="6" x2="6" y2="18" />
              <line x1="6" y1="6" x2="18" y2="18" />
            </svg>
          </button>
        </div>

        <div className="chatbot-messages">
          {messages.map((m, i) => (
            <div key={i} className={`chatbot-msg chatbot-msg-${m.role}`}>
              <div className="chatbot-bubble">{m.content}</div>
            </div>
          ))}
          {sending && (
            <div className="chatbot-msg chatbot-msg-assistant">
              <div className="chatbot-bubble chatbot-typing">
                <span></span><span></span><span></span>
              </div>
            </div>
          )}
          {error && (
            <div className="chatbot-msg chatbot-msg-assistant">
              <div className="chatbot-bubble chatbot-error">{error}</div>
            </div>
          )}
          <div ref={messagesEndRef} />
        </div>

        <form
          className="chatbot-input-row"
          onSubmit={(e) => {
            e.preventDefault();
            sendMessage();
          }}
        >
          <textarea
            ref={inputRef}
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={handleKeyDown}
            placeholder="Ask a question…"
            rows={1}
            disabled={sending}
            className="chatbot-input"
            aria-label="Your message"
          />
          <button
            type="submit"
            disabled={!input.trim() || sending}
            className="chatbot-send"
            aria-label="Send"
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <line x1="22" y1="2" x2="11" y2="13" />
              <polygon points="22 2 15 22 11 13 2 9 22 2" />
            </svg>
          </button>
        </form>

        <div className="chatbot-footer">
          For detailed quotes, use the{' '}
          <a href="/contact">enquiry form</a>.
        </div>
      </div>
    </>
  );
}
