"use client";

import { useState } from 'react';
import { subscribeToNewsletter } from '@/lib/wordpress';

export function NewsletterForm() {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [message, setMessage] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;

    setStatus('loading');
    
    try {
      const response = await subscribeToNewsletter(email);
      if (response.success) {
        setStatus('success');
        setMessage(response.message || 'Thanks for subscribing!');
        setEmail('');
      } else {
        setStatus('error');
        setMessage(response.message || 'Something went wrong. Please try again.');
      }
    } catch (err) {
      setStatus('error');
      setMessage('Failed to subscribe. Please try again later.');
    }
  };

  return (
    <div className="w-full max-w-md lg:ml-auto">
      <form onSubmit={handleSubmit} className="flex w-full">
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Enter your Email"
          disabled={status === 'loading'}
          className="bg-forge text-warm px-6 py-3 rounded-l-full w-full outline-none focus:ring-2 ring-charge text-sm font-bold placeholder:text-warm/40 border border-warm/10 border-r-0 disabled:opacity-50"
        />
        <button 
          type="submit"
          disabled={status === 'loading'}
          className="bg-charge text-forge px-6 py-3 rounded-r-full font-black uppercase tracking-widest text-sm hover:bg-warm transition-colors border border-charge disabled:opacity-50 whitespace-nowrap"
        >
          {status === 'loading' ? 'Sending...' : 'Subscribe'}
        </button>
      </form>
      {message && (
        <p className={`mt-2 text-xs font-bold ${status === 'success' ? 'text-charge' : 'text-red-500'}`}>
          {message}
        </p>
      )}
    </div>
  );
}
