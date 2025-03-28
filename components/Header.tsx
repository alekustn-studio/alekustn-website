"use client";

import Link from 'next/link';
import { useState } from 'react';
import Menu from '../components/Menu';

export default function Header() {
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
          fontSize: '22px',
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
          fontSize: '22px',
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

      <Menu isOpen={isMenuOpen} onClose={() => setIsMenuOpen(false)} />
    </header>
  );
}