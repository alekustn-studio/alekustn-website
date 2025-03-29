'use client';

import PageLayout from '@/components/PageLayout';
import Image from 'next/image';
import { useEffect, useState } from 'react';

export default function Prints() {
  const [isDesktop, setIsDesktop] = useState(false);
  const [formData, setFormData] = useState({
    email: '',
    artworkName: '',
    country: '',
    comment: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  useEffect(() => {
    const checkIfDesktop = () => {
      setIsDesktop(window.innerWidth >= 1024);
    };

    checkIfDesktop();
    window.addEventListener('resize', checkIfDesktop);
    return () => window.removeEventListener('resize', checkIfDesktop);
  }, []);

  const images = [1, 2, 3, 4, 5, 6].map(num => ({
    src: `/images/prints/${num}.png`,
    alt: `Print ${num}`
  }));

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      const response = await fetch('/api/send-print-request', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || 'Failed to send');
      }
      
      setSubmitStatus('success');
      setFormData({ email: '', artworkName: '', country: '', comment: '' });
    } catch (error) {
      console.error('Error sending form:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <PageLayout>
      <div style={{
        width: '90%',
        maxWidth: '1400px',
        margin: '0 auto',
        padding: '20px',
        marginTop: isDesktop ? '240px' : '140px',
      }}>
        <div style={{
          display: 'flex',
          flexDirection: 'column',
          gap: '64px',
          alignItems: 'center',
        }}>
          <div style={{
            maxWidth: isDesktop ? '1400px' : '800px',
            width: '100%',
            textAlign: 'center',
          }}>
            <div style={{
              fontSize: isDesktop ? '18px' : '16px',
              lineHeight: '1.3',
            }}>
              <p style={{ margin: '0 0 0.5em' }}>
                All of my artworks are available as fine art prints. Each piece can be produced in a variety of sizes and materials — from classic matte papers to museum-grade, archival-quality printing.
              </p>
              <p style={{ margin: '0 0 0.5em' }}>
                You can explore the full range of works on the Collections pages, featured on the homepage. Prints are made to order in collaboration with trusted studios to ensure exceptional quality.
              </p>
              <p style={{ margin: '0 0 0.5em' }}>
                Pricing depends on the chosen format, paper type, and printing method. Shipping is available worldwide and calculated based on your location.
              </p>
              <p style={{ margin: 0 }}>
                If you'd like to order a print, feel free to reach out — I'll help you choose the best option for your space and preferences.
              </p>
            </div>
          </div>

          <div style={{
            display: 'grid',
            gridTemplateColumns: isDesktop ? 'repeat(3, 1fr)' : 'repeat(2, 1fr)',
            gap: isDesktop ? '32px' : '16px',
            width: '100%',
            marginBottom: '-32px',
          }}>
            {images.map((image, index) => (
              <div key={index} style={{
                width: '100%',
                position: 'relative',
              }}>
                <Image
                  src={image.src}
                  alt={image.alt}
                  width={1200}
                  height={1600}
                  style={{
                    width: '100%',
                    height: 'auto',
                    objectFit: 'cover',
                  }}
                />
              </div>
            ))}
          </div>

          <div style={{
            maxWidth: isDesktop ? '1400px' : '800px',
            width: '100%',
            textAlign: 'center',
            marginTop: '32px',
            marginBottom: '64px',
          }}>
            <div style={{
              fontSize: isDesktop ? '18px' : '16px',
              lineHeight: '1.3',
            }}>
              <p style={{ margin: '0 0 0.5em' }}>
                To order a print or ask a question — you can either reach out directly or use the form below.
              </p>
              <p style={{ margin: '0 0 1.5em' }}>
                I'll get back to you with available formats, materials and shipping details.
              </p>
              
              <div style={{ marginBottom: '1.5em' }}>
                <p style={{ margin: '0 0 0.5em', fontWeight: '600' }}>
                  Payment options
                </p>
                <p style={{ margin: '0 0 0.5em' }}>
                  I accept a variety of payment methods to make the ordering process simple and flexible.
                </p>
                <p style={{ margin: '0 0 0.5em' }}>
                  You can pay via Stripe (bank card), cryptocurrency, or direct transfer.
                </p>
                <p style={{ margin: '0 0 0.5em' }}>
                  If you're unsure which option works best for you — feel free to reach out, and I'll help you find the most convenient solution.
                </p>
              </div>

              <div style={{
                display: 'flex',
                flexDirection: isDesktop ? 'row' : 'column',
                gap: isDesktop ? '32px' : '16px',
                justifyContent: 'center',
                alignItems: 'center',
              }}>
                <a
                  href="https://t.me/aleks_ustya"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    fontSize: isDesktop ? '48px' : '36px',
                    textDecoration: 'underline',
                    textUnderlineOffset: '8px',
                    color: 'inherit',
                    padding: '16px 32px',
                    transition: 'opacity 0.2s ease',
                    cursor: 'pointer',
                  }}
                  onMouseEnter={(e) => e.currentTarget.style.opacity = '0.7'}
                  onMouseLeave={(e) => e.currentTarget.style.opacity = '1'}
                >
                  Write in Telegram
                </a>
                <a
                  href="https://www.instagram.com/alekustn"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    fontSize: isDesktop ? '48px' : '36px',
                    textDecoration: 'underline',
                    textUnderlineOffset: '8px',
                    color: 'inherit',
                    padding: '16px 32px',
                    transition: 'opacity 0.2s ease',
                    cursor: 'pointer',
                  }}
                  onMouseEnter={(e) => e.currentTarget.style.opacity = '0.7'}
                  onMouseLeave={(e) => e.currentTarget.style.opacity = '1'}
                >
                  Message on Instagram
                </a>
              </div>
            </div>
          </div>

          <div style={{
            width: '90%',
            maxWidth: '1400px',
            margin: '0 auto',
            padding: '0 20px',
            marginBottom: '120px',
          }}>
            <form onSubmit={handleSubmit} style={{
              display: 'flex',
              flexDirection: 'column',
              gap: '24px',
              width: '100%',
            }}>
              <div style={{
                display: 'flex',
                flexDirection: 'column',
                gap: '8px',
                width: '100%',
              }}>
                <input
                  type="email"
                  required
                  placeholder="Email"
                  value={formData.email}
                  onChange={(e) => setFormData(prev => ({ ...prev, email: e.target.value }))}
                  style={{
                    fontSize: '18px',
                    padding: '12px',
                    border: '1px solid #ccc',
                    borderRadius: '4px',
                    width: '100%',
                  }}
                />
              </div>

              <div style={{
                display: 'flex',
                flexDirection: 'column',
                gap: '8px',
                width: '100%',
              }}>
                <input
                  type="text"
                  placeholder="Artwork name (optional)"
                  value={formData.artworkName}
                  onChange={(e) => setFormData(prev => ({ ...prev, artworkName: e.target.value }))}
                  style={{
                    fontSize: '18px',
                    padding: '12px',
                    border: '1px solid #ccc',
                    borderRadius: '4px',
                    width: '100%',
                  }}
                />
              </div>

              <div style={{
                display: 'flex',
                flexDirection: 'column',
                gap: '8px',
                width: '100%',
              }}>
                <input
                  type="text"
                  required
                  placeholder="Country (for delivery estimate)"
                  value={formData.country}
                  onChange={(e) => setFormData(prev => ({ ...prev, country: e.target.value }))}
                  style={{
                    fontSize: '18px',
                    padding: '12px',
                    border: '1px solid #ccc',
                    borderRadius: '4px',
                    width: '100%',
                  }}
                />
              </div>

              <div style={{
                display: 'flex',
                flexDirection: 'column',
                gap: '8px',
                width: '100%',
              }}>
                <textarea
                  placeholder="Optional comment"
                  value={formData.comment}
                  onChange={(e) => setFormData(prev => ({ ...prev, comment: e.target.value }))}
                  style={{
                    fontSize: '18px',
                    padding: '12px',
                    border: '1px solid #ccc',
                    borderRadius: '4px',
                    width: '100%',
                    minHeight: '100px',
                    resize: 'vertical',
                  }}
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                style={{
                  fontSize: '18px',
                  padding: '12px 24px',
                  backgroundColor: 'black',
                  color: 'white',
                  border: 'none',
                  borderRadius: '4px',
                  cursor: isSubmitting ? 'not-allowed' : 'pointer',
                  opacity: isSubmitting ? 0.7 : 1,
                }}
              >
                {isSubmitting ? 'Sending...' : 'Send request'}
              </button>

              {submitStatus === 'success' && (
                <p style={{ color: 'green', textAlign: 'center', margin: 0 }}>
                  Request sent successfully!
                </p>
              )}

              {submitStatus === 'error' && (
                <p style={{ color: 'red', textAlign: 'center', margin: 0 }}>
                  Failed to send request. Please try again.
                </p>
              )}
            </form>
          </div>
        </div>
      </div>
    </PageLayout>
  );п
}