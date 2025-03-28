"use client";

import Link from 'next/link';
import { useState } from 'react';
import MenuTest from '@/components/MenuTest';

export default function HeaderTest() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header style={{
      padding: '0 20px',
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      position: 'fixed',
      top: '32px',
      left: '0',
      right: '0',
      backgroundColor: '#fff',
      zIndex: 1000
    }}>
      <Link 
        href="/"
        style={{
          fontSize: '16px',
          letterSpacing: '0.05em',
          color: '#000000'
        }}
      >
        ALEKUSTN
      </Link>

      <button
        onClick={() => setIsMenuOpen(true)}
        style={{
          fontSize: '16px',
          letterSpacing: '0.05em',
          color: '#000000',
          background: 'none',
          border: 'none',
          padding: 0,
          cursor: 'pointer'
        }}
      >
        Menu
      </button>

      <div style={{
        position: 'fixed',
        top: 0,
        right: isMenuOpen ? 0 : '-100%',
        width: '100%',
        maxWidth: '600px',
        height: '100%',
        transition: 'right 0.3s ease-in-out'
      }}>
        <MenuTest onClose={() => setIsMenuOpen(false)} />
      </div>
    </header>
  );
} 