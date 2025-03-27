"use client";

import Link from 'next/link';
import { useState, useEffect } from 'react';
import Menu from './Menu';
import { useRouter } from 'next/router';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.scrollY;
      
      // Показываем хедер если:
      // 1. Скроллим вверх (prevScrollPos > currentScrollPos)
      // 2. Находимся в начале страницы (currentScrollPos < 100)
      const isVisible = prevScrollPos > currentScrollPos || currentScrollPos < 100;

      setVisible(isVisible);
      setPrevScrollPos(currentScrollPos);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [prevScrollPos]);

  const commonStyles = {
    position: 'fixed',
    top: '32px',
    fontSize: '32px',
    letterSpacing: '0.05em',
    color: '#000000',
    background: 'none',
    border: 'none',
    padding: 0,
    fontFamily: 'Georgia, serif'
  } as const;

  const MenuItem = ({ href, text }: { href: string; text: string }) => {
    const router = useRouter();
    const isActive = router.pathname === href;

    return (
      <Link
        href={href}
        style={{
          fontSize: '18px',
          color: isActive ? '#000' : '#666',
          textDecoration: 'none',
          transition: 'all 0.3s ease',
          transform: 'translateY(0)',
          display: 'inline-block', // важно для работы transform
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.transform = 'translateY(-3px)';
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.transform = 'translateY(0)';
        }}
      >
        {text}
      </Link>
    );
  };

  return (
    <header style={{
      padding: '0 20px',
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      position: 'fixed',
      top: '32px',
      left: 0,
      right: 0,
      backgroundColor: '#fff',
      zIndex: 1000,
      opacity: visible ? 1 : 0,
      visibility: visible ? 'visible' : 'hidden',
      transition: 'opacity 0.3s, visibility 0.3s'
    }}>
      {/* Логотип */}
      <Link 
        href="/" 
        style={{ ...commonStyles, left: '32px' }}
        className="hover:opacity-70 transition-colors"
      >
        ALEKUSTN
      </Link>

      {/* Кнопка меню */}
      <button
        onClick={() => setIsMenuOpen(!isMenuOpen)}
        style={{
          ...commonStyles,
          right: '32px',
          opacity: isMenuOpen ? 0 : 1,
          visibility: isMenuOpen ? 'hidden' : 'visible',
          transition: 'opacity 0.3s, visibility 0.3s'
        }}
        className="hover:opacity-70 transition-colors"
      >
        Menu
      </button>

      {/* Меню */}
      <div 
        style={{
          position: 'fixed',
          top: 0,
          right: isMenuOpen ? '0' : '-100%',
          width: '100%',
          maxWidth: '600px',
          height: '100%',
          transition: 'right 0.3s ease-in-out'
        }}
      >
        <Menu 
          isOpen={isMenuOpen} 
          onClose={() => setIsMenuOpen(false)} 
        />
      </div>
    </header>
  );
} 