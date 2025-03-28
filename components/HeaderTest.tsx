"use client";

import Link from 'next/link';
import { useState } from 'react';
import MenuTest from '@/components/MenuTest';

export default function HeaderTest() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="fixed top-8 left-0 right-0 px-5 flex justify-between items-center bg-white z-[1000]">
      <Link href="/" className="text-2xl font-['Georgia'] tracking-wide hover:opacity-70 transition-all">
        ALEKUSTN
      </Link>

      <button
        onClick={() => setIsMenuOpen(true)}
        className="text-2xl font-['Georgia'] tracking-wide hover:opacity-70 transition-all"
      >
        Menu
      </button>

      <div className={`fixed top-0 right-0 w-full max-w-[600px] h-full transition-all duration-300 ${isMenuOpen ? 'translate-x-0' : 'translate-x-full'}`}>
        <MenuTest onClose={() => setIsMenuOpen(false)} />
      </div>
    </header>
  );
} 