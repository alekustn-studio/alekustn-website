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
          cursor: 'pointer'
        }}
      >
        Menu
      </button>

      {isMenuOpen && <MenuTest onClose={() => setIsMenuOpen(false)} />}
    </header>
  );
} 