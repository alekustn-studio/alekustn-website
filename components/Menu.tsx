"use client";

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { CSSProperties } from 'react';

interface MenuProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function Menu({ isOpen, onClose }: MenuProps) {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  const commonLinkStyles: CSSProperties = {
    position: 'relative',
    fontSize: '32px',
    letterSpacing: '0.05em',
    color: '#000000',
    background: 'none',
    border: 'none',
    padding: 0,
    cursor: 'pointer',
    fontWeight: '400',
    display: 'block',
    marginBottom: '24px'
  };

  const bigLinkStyles: CSSProperties = {
    ...commonLinkStyles,
    fontSize: '60px',
    marginBottom: '32px',
    letterSpacing: '0.02em'
  };

  const handleSubscribe = async () => {
    try {
      const response = await fetch('/api/subscribe', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email }),
      });

      if (response.ok) {
        setMessage('Thank you for subscribing!');
        setEmail(''); // очищаем поле
        // Убираем сообщение через 3 секунды
        setTimeout(() => setMessage(''), 3000);
      } else {
        setMessage('Subscription error');
        setTimeout(() => setMessage(''), 3000);
      }
    } catch (error) {
      setMessage('Subscription error');
      setTimeout(() => setMessage(''), 3000);
    }
  };

  return (
    <div 
      style={{
        transform: isOpen ? 'translateX(0)' : 'translateX(100%)',
        transition: 'all 0.3s ease-in-out',
        position: 'fixed',
        top: 0,
        right: 0,
        bottom: 0,
        width: '100%',
        maxWidth: '600px',
        backgroundColor: 'rgba(255, 255, 255, 0.65)',
        backdropFilter: 'blur(5px)',
        WebkitBackdropFilter: 'blur(5px)',
        zIndex: 50,
        opacity: isOpen ? 1 : 0,
        pointerEvents: isOpen ? 'auto' : 'none'
      }}
    >
      <div style={{ position: 'absolute', top: '32px', right: '32px' }}>
        <button
          onClick={onClose}
          style={{
            position: 'fixed',
            top: '32px',
            right: '32px',
            fontSize: '32px',
            letterSpacing: '0.05em',
            color: '#000000',
            fontFamily: 'Georgia, serif'
          }}
        >
          Close
        </button>
      </div>

      <div style={{ position: 'absolute', top: '120px', left: '32px', right: '32px' }}>
        <nav style={{ display: 'flex', flexDirection: 'column', maxWidth: '300px' }}>
          <div style={{ marginTop: '60px' }}>
            {['Products', 'Prints', 'About'].map((item) => (
              <Link
                key={item}
                href={`/${item.toLowerCase()}`}
                style={bigLinkStyles}
                className="hover:opacity-70 transition-opacity no-underline"
              >
                {item}
              </Link>
            ))}
          </div>
        </nav>

        <div style={{ marginTop: '32px' }}>
          <input
            type="email"
            placeholder={message || "Enter your email"}
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            style={{
              width: '100%',
              padding: '16px 0',
              border: 'none',
              borderBottom: '1px solid black',
              outline: 'none',
              color: 'black',
              fontSize: '24px',
              fontFamily: 'inherit',
              background: 'none'
            }}
          />
          <button
            onClick={handleSubscribe}
            style={{
              width: '100%',
              marginTop: '16px',
              padding: '16px 0',
              backgroundColor: 'rgba(80, 80, 80, 0.95)',
              color: 'white',
              border: 'none',
              fontSize: '24px',
              cursor: 'pointer',
              transition: 'opacity 0.2s ease-in-out',
              fontFamily: 'inherit'
            }}
            className="hover:opacity-80"
          >
            Subscribe
          </button>
        </div>
      </div>

      {/* Социальные сети и копирайт внизу */}
      <div style={{ 
        position: 'fixed',
        bottom: '32px',
        left: '32px'
      }}>
        <Link
          href="https://x.com/ALEKUSTN"
          style={commonLinkStyles}
          className="hover:opacity-70 transition-opacity no-underline"
          target="_blank"
        >
          Twitter
        </Link>
        <Link
          href="https://www.instagram.com/alekustn"
          style={commonLinkStyles}
          className="hover:opacity-70 transition-opacity no-underline"
          target="_blank"
        >
          Instagram
        </Link>
        <div style={{ 
          marginTop: '32px',
          fontSize: '32px',
          color: '#444444',
          opacity: 1
        }}>
          © ALEKUSTN - 2025
        </div>
      </div>
    </div>
  );
}