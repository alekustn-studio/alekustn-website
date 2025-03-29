"use client";

import Link from 'next/link';
import { useState, useEffect } from 'react';
import Menu from './Menu';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isHidden, setIsHidden] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      setIsHidden(currentScrollY > lastScrollY && currentScrollY > 50);
      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);

  return (
    <header style={{
      padding: '0 32px',
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      position: 'fixed',
      top: isHidden ? '-100px' : '32px',
      left: '0',
      right: '0',
      zIndex: 1000,
      transition: 'top 0.3s ease-in-out'
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