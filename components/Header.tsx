"use client";

import Link from 'next/link';
import { useState, useEffect } from 'react';
import Menu from './Menu';
import { usePathname } from 'next/navigation';

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

  const pathname = usePathname();

  return (
    <header className={`fixed top-8 left-0 right-0 px-5 flex justify-between items-center bg-white z-[1000] transition-all duration-300 ${visible ? 'opacity-100 visible' : 'opacity-0 invisible'}`}>
      {/* Логотип */}
      <Link 
        href="/" 
        className="text-2xl font-serif tracking-wide hover:opacity-70 transition-all"
      >
        ALEKUSTN
      </Link>

      {/* Кнопка меню */}
      <button
        onClick={() => setIsMenuOpen(true)}
        className={`text-2xl font-serif tracking-wide hover:opacity-70 transition-all ${isMenuOpen ? 'opacity-0 invisible' : 'opacity-100 visible'}`}
      >
        Menu
      </button>

      {/* Меню */}
      <div 
        className={`fixed top-0 right-0 w-full max-w-[600px] h-full transition-all duration-300 ${isMenuOpen ? 'right-0' : '-right-full'}`}
      >
        <Menu 
          isOpen={isMenuOpen} 
          onClose={() => setIsMenuOpen(false)} 
        />
      </div>
    </header>
  );
} 