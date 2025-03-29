'use client';
import { Metadata } from 'next';
import PageLayout from '@/components/PageLayout';
import { useEffect, useState } from 'react';

export const metadata: Metadata = {
  title: 'Products - ALEKUSTN'
};

export default function Products() {
  const [isDesktop, setIsDesktop] = useState(false);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const checkIfDesktop = () => {
        setIsDesktop(window.innerWidth >= 1024);
      };

      checkIfDesktop();
      window.addEventListener('resize', checkIfDesktop);
      return () => window.removeEventListener('resize', checkIfDesktop);
    }
  }, []);

  return (
    <PageLayout>
      <div style={{
        height: '100vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        textAlign: 'center',
        padding: '20px',
        fontFamily: 'inherit'
      }}>
        <h1 style={{
          fontSize: '32px',
          marginBottom: '16px'
        }}>
          Coming soon
        </h1>
        <p style={{
          fontSize: isDesktop ? '18px' : '16px',
          marginBottom: '8px'
        }}>
          A collection of digital tools and ideas.
        </p>
        <p style={{
          fontSize: isDesktop ? '18px' : '16px'
        }}>
          This space is still in progress – more to come.
        </p>
      </div>
    </PageLayout>
  );
} 