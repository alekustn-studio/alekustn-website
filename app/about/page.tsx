'use client';

import PageLayout from '@/components/PageLayout';
import Image from 'next/image';
import { useEffect, useState } from 'react';

export default function About() {
  const [isDesktop, setIsDesktop] = useState(false);

  useEffect(() => {
    const checkIfDesktop = () => {
      setIsDesktop(window.innerWidth >= 1024);
    };

    checkIfDesktop();
    window.addEventListener('resize', checkIfDesktop);
    return () => window.removeEventListener('resize', checkIfDesktop);
  }, []);

  const SecondImage = () => (
    <div style={{
      width: '100%',
      maxWidth: isDesktop ? '700px' : '800px',
    }}>
      <Image
        src="/images/about/2.png"
        alt="ALEKUSTN"
        width={1600}
        height={2000}
        style={{
          width: '100%',
          height: 'auto',
          objectFit: 'cover',
        }}
      />
    </div>
  );

  const ThirdText = () => (
    <div style={{
      maxWidth: isDesktop ? '700px' : '800px',
      width: '100%',
    }}>
      <div style={{
        fontSize: isDesktop ? '18px' : '16px',
        lineHeight: '1.4',
      }}>
        <p style={{ margin: 0 }}>
          Photography, for me, is a quiet form of attention.
        </p>
        <p style={{ margin: 0 }}>
          A way to observe the natural world not as scenery, but as movement, texture, and light.
        </p>
        <p style={{ margin: 0 }}>
          The forest, the sea, the sky — they speak in subtle moments, and I try to listen.
        </p>
      </div>
    </div>
  );

  const ThirdImage = () => (
    <div style={{
      width: '100%',
      maxWidth: isDesktop ? '700px' : '800px',
    }}>
      <Image
        src="/images/about/3.png"
        alt="ALEKUSTN"
        width={1600}
        height={2000}
        style={{
          width: '100%',
          height: 'auto',
          objectFit: 'cover',
        }}
      />
    </div>
  );

  return (
    <PageLayout>
      <div style={{
        width: '90%',
        maxWidth: '1400px',
        margin: '0 auto',
        padding: '20px',
        marginTop: isDesktop ? '240px' : '140px',
        marginBottom: '120px',
      }}>
        <div style={{
          display: 'flex',
          flexDirection: 'column',
          gap: '32px',
        }}>
          <div style={{
            display: 'flex',
            flexDirection: isDesktop ? 'row' : 'column',
            gap: isDesktop ? '80px' : '64px',
            alignItems: isDesktop ? 'flex-start' : 'center',
          }}>
            <div style={{
              display: 'flex',
              flexDirection: 'column',
              gap: '32px',
              maxWidth: isDesktop ? '600px' : '800px',
              width: '100%',
            }}>
              <div style={{
                fontSize: isDesktop ? '18px' : '16px',
                lineHeight: '1.4',
              }}>
                <p style={{ margin: 0 }}>
                  My name is Aleksei Ustinov – I'm a generative artist and photographer, exploring the intersection of code, form, and emotion.
                </p>
                <p style={{ margin: 0 }}>
                  My work blends structure and spontaneity — from algorithmic visuals and photography inspired by nature to digital tools and automation.
                </p>
                <p style={{ margin: 0 }}>
                  This space is a growing ecosystem of ideas — a place where art meets function, and experiments evolve into products.
                </p>
              </div>
              {isDesktop && (
                <>
                  <SecondImage />
                  <ThirdText />
                </>
              )}
            </div>

            <div style={{
              display: 'flex',
              flexDirection: 'column',
              gap: '32px',
              width: '100%',
            }}>
              <div style={{
                width: '100%',
                maxWidth: isDesktop ? '700px' : '800px',
              }}>
                <Image
                  src="/images/about/1.PNG"
                  alt="ALEKUSTN"
                  width={1600}
                  height={2000}
                  style={{
                    width: '100%',
                    height: 'auto',
                    objectFit: 'cover',
                  }}
                  priority
                />
              </div>
              
              {isDesktop && (
                <>
                  <div style={{
                    maxWidth: isDesktop ? '700px' : '800px',
                    width: '100%',
                  }}>
                    <div style={{
                      fontSize: isDesktop ? '18px' : '16px',
                      lineHeight: '1.4',
                    }}>
                      <p style={{ margin: 0 }}>
                        I see code not just as a tool, but as a language – one that speaks in patterns, rhythm, and controlled randomness.
                      </p>
                      <p style={{ margin: 0 }}>
                        In generative art, there's no final brushstroke – only motion, variables, and choices.
                      </p>
                      <p style={{ margin: 0 }}>
                        Each work becomes a dialogue between intention and accident.
                      </p>
                    </div>
                  </div>
                  <ThirdImage />
                </>
              )}
            </div>
          </div>

          {!isDesktop && <SecondImage />}

          {!isDesktop && <ThirdText />}

          {!isDesktop && <ThirdImage />}
        </div>
      </div>
    </PageLayout>
  );
}