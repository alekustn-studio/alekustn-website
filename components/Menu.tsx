"use client";

import Link from 'next/link';

interface MenuProps {
  onClose: () => void;
  isOpen: boolean;
}

export default function Menu({ onClose, isOpen }: MenuProps) {
  return (
    <div style={{
      position: 'fixed',
      top: 0,
      right: 0,
      width: '450px',
      height: '100%',
      backgroundColor: 'rgba(255, 255, 255, 0.7)',
      backdropFilter: 'blur(8px)',
      WebkitBackdropFilter: 'blur(8px)',
      zIndex: 50,
      visibility: isOpen ? 'visible' : 'hidden',
      transform: isOpen ? 'translateX(0)' : 'translateX(100%)',
      transition: 'transform 0.3s ease-in-out, visibility 0.3s ease-in-out',
      overflowX: 'hidden'
    }}>
      <button
        onClick={onClose}
        style={{
          position: 'absolute',
          top: '36px',
          right: '32px',
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
        Close
      </button>

      <nav style={{
        position: 'absolute',
        top: '100px',
        left: '32px'
      }}>
        {['Products', 'Prints', 'About'].map((item) => (
          <Link
            key={item}
            href={`/${item.toLowerCase()}`}
            style={{
              display: 'block',
              fontSize: '42px',
              marginBottom: '24px',
              letterSpacing: '0.05em',
              color: '#000000',
              fontFamily: 'Georgia, serif',
              transition: 'opacity 0.3s ease'
            }}
            onMouseEnter={e => e.currentTarget.style.opacity = '0.7'}
            onMouseLeave={e => e.currentTarget.style.opacity = '1'}
          >
            {item}
          </Link>
        ))}
      </nav>

      <div style={{
        position: 'absolute',
        bottom: '280px',
        left: '32px',
        width: 'calc(100% - 64px)'
      }}>
        <input
          type="email"
          placeholder="Enter your email"
          style={{
            width: '100%',
            background: 'transparent',
            borderBottom: '1px solid black',
            fontSize: '18px',
            padding: '16px 0',
            outline: 'none',
            fontFamily: 'Georgia, serif',
            borderTop: 'none',
            borderLeft: 'none',
            borderRight: 'none'
          }}
        />
        <button
          style={{
            width: '100%',
            marginTop: '16px',
            background: 'rgba(51, 51, 51, 0.8)',
            color: 'white',
            fontSize: '18px',
            padding: '12px 0',
            fontFamily: 'Georgia, serif',
            border: 'none',
            cursor: 'pointer',
            transition: 'opacity 0.3s ease'
          }}
          onMouseEnter={e => e.currentTarget.style.opacity = '0.7'}
          onMouseLeave={e => e.currentTarget.style.opacity = '1'}
        >
          Subscribe
        </button>
      </div>

      <div style={{
        position: 'absolute',
        bottom: '32px',
        left: '32px',
        width: 'calc(100% - 64px)'
      }} className="menu-buttons">
        <Link
          href="https://x.com/ALEKUSTN"
          target="_blank"
          style={{
            display: 'block',
            fontSize: '20px',
            marginBottom: '16px',
            color: '#000000',
            fontFamily: 'Georgia, serif',
            transition: 'opacity 0.3s ease'
          }}
          onMouseEnter={e => e.currentTarget.style.opacity = '0.7'}
          onMouseLeave={e => e.currentTarget.style.opacity = '1'}
        >
          Twitter
        </Link>
        <Link
          href="https://www.instagram.com/alekustn"
          target="_blank"
          style={{
            display: 'block',
            fontSize: '20px',
            marginBottom: '16px',
            color: '#000000',
            fontFamily: 'Georgia, serif',
            transition: 'opacity 0.3s ease'
          }}
          onMouseEnter={e => e.currentTarget.style.opacity = '0.7'}
          onMouseLeave={e => e.currentTarget.style.opacity = '1'}
        >
          Instagram
        </Link>
        <div style={{
          fontSize: '20px',
          color: '#666666',
          fontFamily: 'Georgia, serif'
        }}>
          © ALEKUSTN - 2025
        </div>
      </div>
    </div>
  );
}