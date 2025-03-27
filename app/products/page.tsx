import { Metadata } from 'next';
import PageLayout from '@/components/PageLayout';

export const metadata: Metadata = {
  title: 'Products - ALEKUSTN'
};

export default function Products() {
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
          fontSize: '24px',
          marginBottom: '8px'
        }}>
          A collection of digital tools and ideas.
        </p>
        <p style={{
          fontSize: '24px'
        }}>
          This space is still in progress — more to come.
        </p>
      </div>
    </PageLayout>
  );
} 