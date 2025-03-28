"use client";

import Link from 'next/link';

interface MenuTestProps {
  onClose: () => void;
}

export default function MenuTest({ onClose }: MenuTestProps) {
  return (
    <div className="fixed top-0 right-0 bottom-0 w-full max-w-[600px] bg-white/70 backdrop-blur-sm z-50">
      <button
        onClick={onClose}
        className="absolute top-8 right-8 text-2xl font-['Georgia'] tracking-wide hover:opacity-70 transition-all"
      >
        Close
      </button>

      <div className="absolute top-[120px] left-8 right-8">
        <nav className="flex flex-col max-w-[300px] mt-[60px] space-y-8">
          {['Products', 'Prints', 'About'].map((item) => (
            <Link
              key={item}
              href={`/${item.toLowerCase()}`}
              className="text-4xl font-['Georgia'] tracking-wide hover:opacity-70 transition-all"
            >
              {item}
            </Link>
          ))}
        </nav>

        <div className="mt-16">
          <input
            type="email"
            placeholder="Enter your email"
            className="w-full bg-transparent border-b border-black text-xl py-4 font-['Georgia'] outline-none"
          />
          <button
            className="w-full mt-4 bg-neutral-700 text-white text-xl py-4 font-['Georgia'] hover:opacity-80 transition-all"
          >
            Subscribe
          </button>
        </div>

        <div className="absolute bottom-8 left-0">
          <Link
            href="https://x.com/ALEKUSTN"
            target="_blank"
            className="text-xl font-['Georgia'] tracking-wide block mb-6 hover:opacity-70 transition-all"
          >
            Twitter
          </Link>
          <Link
            href="https://www.instagram.com/alekustn"
            target="_blank"
            className="text-xl font-['Georgia'] tracking-wide block mb-6 hover:opacity-70 transition-all"
          >
            Instagram
          </Link>
          <div className="mt-8 text-xl text-gray-600">© ALEKUSTN - 2025</div>
        </div>
      </div>
    </div>
  );
} 