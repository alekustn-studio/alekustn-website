'use client'

import { ReactNode } from 'react';
import Header from '@/components/Header';
import Head from 'next/head'

type PageLayoutProps = {
  children: ReactNode;
};

export default function PageLayout({ children }: PageLayoutProps) {
  return (
    <>
      <style jsx global>{`
        a {
          text-decoration: none;
        }
      `}</style>
      <Header />  {/* Добавляем хедер здесь */}
      <div style={{ marginTop: '80px' }}>
        {children}
      </div>
    </>
  );
}