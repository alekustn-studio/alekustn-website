"use client";

import Link from 'next/link';
import { useState } from 'react';
import MenuTest from '@/components/MenuTest';

export default function HeaderTest() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="fixed top-8 left-0 right-0 px-8 flex justify-between items-center bg-white z-[1000]">
      <Link href="/" className="text-xl font-['Georgia'] tracking-wide">
        ALEKUSTN
      </Link>

      <button
        onClick={() => setIsMenuOpen(true)}
        className="text-xl font-['Georgia'] tracking-wide"
      >
        Menu
      </button>

      {isMenuOpen && <MenuTest onClose={() => setIsMenuOpen(false)} />}
    </header>
  );
} 