"use client";

import Link from 'next/link';
import { useState } from 'react';
import MenuTest from '@/components/MenuTest';

export default function HeaderTest() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header style={{
      padding: '0 32px',
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      position: 'fixed',
      top: '32px',
      left: '0',
      right: '0',
      zIndex: 1000
    }}>
      <Link 
        href="/"
        style={{
          fontSize: '20px',
          letterSpacing: '0.05em',
          color: '#000000',
          fontFamily: 'Georgia, serif',
          transition: 'opacity 0.3s ease'
        }}
        onMouseEnter={e => e.currentTarget.style.opacity = '0.7'}
        onMouseLeave={e => e.currentTarget.style.opacity = '1'}
      >
        ALEKUSTN
      </Link>

      <button
        onClick={() => setIsMenuOpen(true)}
        style={{
          fontSize: '20px',
          letterSpacing: '0.05em',
          color: '#000000',
          background: 'none',
          border: 'none',
          cursor: 'pointer',
          fontFamily: 'Georgia, serif',
          transition: 'opacity 0.3s ease',
          padding: 0
        }}
        onMouseEnter={e => e.currentTarget.style.opacity = '0.7'}
        onMouseLeave={e => e.currentTarget.style.opacity = '1'}
      >
        Menu
      </button>

      <div style={{
        position: 'fixed',
        top: 0,
        right: 0,
        width: '500px',
        height: '100%',
        visibility: isMenuOpen ? 'visible' : 'hidden',
        transform: isMenuOpen ? 'translateX(0)' : 'translateX(100%)',
        transition: 'transform 0.3s ease-in-out, visibility 0.3s ease-in-out'
      }}>
        <MenuTest onClose={() => setIsMenuOpen(false)} />
      </div>
    </header>
  );
} 