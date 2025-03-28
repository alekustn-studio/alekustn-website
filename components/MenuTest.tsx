"use client";

import Link from 'next/link';

interface MenuTestProps {
  onClose: () => void;
}

export default function MenuTest({ onClose }: MenuTestProps) {
  return (
    <div style={{
      position: 'fixed',
      top: 0,
      right: 0,
      bottom: 0,
      width: '100%',
      maxWidth: '600px',
      backgroundColor: 'rgba(255, 255, 255, 0.7)',
      backdropFilter: 'blur(8px)',
      zIndex: 50
    }}>
      <button
        onClick={onClose}
        style={{
          position: 'fixed',
          top: '32px',
          right: '32px',
          fontSize: '16px',
          letterSpacing: '0.05em',
          color: '#000000',
          background: 'none',
          border: 'none',
          padding: 0,
          cursor: 'pointer'
        }}
      >
        Close
      </button>

      <div style={{
        position: 'absolute',
        top: '120px',
        left: '32px',
        right: '32px'
      }}>
        <nav style={{
          display: 'flex',
          flexDirection: 'column',
          maxWidth: '300px',
          marginTop: '60px'
        }}>
          {['Products', 'Prints', 'About'].map((item) => (
            <Link
              key={item}
              href={`/${item.toLowerCase()}`}
              style={{
                fontSize: '32px',
                marginBottom: '32px',
                letterSpacing: '0.05em',
                color: '#000000'
              }}
            >
              {item}
            </Link>
          ))}
        </nav>

        <div style={{ marginTop: '64px' }}>
          <input
            type="email"
            placeholder="Enter your email"
            style={{
              width: '100%',
              background: 'transparent',
              borderBottom: '1px solid black',
              fontSize: '16px',
              padding: '16px 0',
              outline: 'none'
            }}
          />
          <button
            style={{
              width: '100%',
              marginTop: '16px',
              background: '#404040',
              color: 'white',
              fontSize: '16px',
              padding: '16px 0'
            }}
          >
            Subscribe
          </button>
        </div>

        <div style={{
          position: 'absolute',
          bottom: '32px',
          left: 0
        }}>
          <Link
            href="https://x.com/ALEKUSTN"
            target="_blank"
            style={{
              fontSize: '16px',
              marginBottom: '24px',
              display: 'block'
            }}
          >
            Twitter
          </Link>
          <Link
            href="https://www.instagram.com/alekustn"
            target="_blank"
            style={{
              fontSize: '16px',
              marginBottom: '24px',
              display: 'block'
            }}
          >
            Instagram
          </Link>
          <div style={{
            marginTop: '32px',
            fontSize: '16px',
            color: '#666666'
          }}>
            © ALEKUSTN - 2025
          </div>
        </div>
      </div>
    </div>
  );
} 