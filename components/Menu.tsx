"use client";

import { useState, useEffect } from 'react';
import Link from 'next/link';

interface MenuProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function Menu({ isOpen, onClose }: MenuProps) {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  useEffect(() => {
    if (isOpen) document.body.style.overflow = 'hidden';
    return () => { document.body.style.overflow = 'unset'; };
  }, [isOpen]);

  const handleSubscribe = async () => {
    try {
      const res = await fetch('/api/subscribe', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email })
      });
      if (res.ok) {
        setMessage('Thank you for subscribing!');
        setEmail('');
        setTimeout(() => setMessage(''), 3000);
      } else {
        setMessage('Subscription error');
        setTimeout(() => setMessage(''), 3000);
      }
    } catch {
      setMessage('Subscription error');
      setTimeout(() => setMessage(''), 3000);
    }
  };

  return (
    <div className={`fixed top-0 right-0 bottom-0 w-full max-w-[600px] bg-white/70 backdrop-blur-sm z-50 transition-all duration-300 ${isOpen ? 'translate-x-0 opacity-100 pointer-events-auto' : 'translate-x-full opacity-0 pointer-events-none'}`}>
      <button
        onClick={onClose}
        className="absolute top-8 right-8 text-2xl font-serif hover:opacity-70"
      >
        Close
      </button>

      <div className="absolute top-[120px] left-8 right-8">
        <nav className="flex flex-col max-w-[300px] mt-[60px]">
          {['Products', 'Prints', 'About'].map((item) => (
            <Link
              key={item}
              href={`/${item.toLowerCase()}`}
              className="text-5xl font-normal mb-8 font-serif hover:opacity-70 no-underline"
            >
              {item}
            </Link>
          ))}
        </nav>

        <div className="mt-8">
          <input
            type="email"
            placeholder={message || 'Enter your email'}
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full bg-transparent border-b border-black text-black text-2xl py-4 outline-none font-inherit"
          />
          <button
            onClick={handleSubscribe}
            className="w-full mt-4 bg-neutral-700 text-white text-2xl py-4 hover:opacity-80 transition-opacity font-inherit"
          >
            Subscribe
          </button>
        </div>
      </div>

      <div className="absolute bottom-8 left-8">
        <Link
          href="https://x.com/ALEKUSTN"
          target="_blank"
          className="text-2xl mb-6 block font-serif hover:opacity-70"
        >
          Twitter
        </Link>
        <Link
          href="https://www.instagram.com/alekustn"
          target="_blank"
          className="text-2xl mb-6 block font-serif hover:opacity-70"
        >
          Instagram
        </Link>
        <div className="mt-8 text-2xl text-gray-600">© ALEKUSTN - 2025</div>
      </div>
    </div>
  );
}