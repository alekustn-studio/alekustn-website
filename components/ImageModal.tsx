'use client';

import { useState, useEffect } from 'react';

interface ImageModalProps {
  src: string;
  alt: string;
  images: string[];
  currentIndex: number;
}

export default function ImageModal({ src, alt, images, currentIndex }: ImageModalProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [activeIndex, setActiveIndex] = useState(currentIndex);
  const [showControls, setShowControls] = useState(false);
  const [slideDirection, setSlideDirection] = useState<'left' | 'right' | null>(null);

  const handleOpen = () => {
    setActiveIndex(currentIndex);
    setIsOpen(true);
  };

  const handleNext = (e?: React.MouseEvent) => {
    e?.stopPropagation();
    setSlideDirection('left');
    setActiveIndex((prev) => (prev + 1) % images.length);
  };

  const handlePrev = (e?: React.MouseEvent) => {
    e?.stopPropagation();
    setSlideDirection('right');
    setActiveIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!isOpen) return;
      
      if (e.key === 'ArrowRight') {
        handleNext();
      }
      if (e.key === 'ArrowLeft') {
        handlePrev();
      }
      if (e.key === 'Escape') {
        setIsOpen(false);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, images.length]);

  const normalizePath = (path: string) => {
    return path.startsWith('/') ? path : `/${path}`;
  };

  return (
    <>
      <img
        src={normalizePath(src)}
        alt={alt}
        onClick={handleOpen}
        style={{
          width: '100%',
          height: 'auto',
          maxWidth: '300px',
          padding: '8px',
          cursor: 'pointer'
        }}
      />
      {isOpen && (
        <div
          style={{
            position: 'fixed',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundColor: 'rgba(0, 0, 0, 0.8)',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            zIndex: 1000
          }}
          onClick={() => setIsOpen(false)}
          onMouseMove={(e) => {
            const x = e.clientX;
            const width = window.innerWidth;
            setShowControls(x < width * 0.2 || x > width * 0.8);
          }}
          onMouseLeave={() => setShowControls(false)}
        >
          <button
            onClick={handlePrev}
            style={{
              position: 'absolute',
              left: '20px',
              color: 'white',
              fontSize: '24px',
              background: 'none',
              border: 'none',
              cursor: 'pointer',
              padding: '20px',
              opacity: showControls ? 1 : 0,
              transition: 'opacity 0.3s ease',
              pointerEvents: showControls ? 'auto' : 'none',
              zIndex: 1001
            }}
          >
            ←
          </button>
          <div
            style={{
              position: 'relative',
              width: '90%',
              height: '90vh',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              overflow: 'hidden'
            }}
          >
            <img
              key={activeIndex}
              src={normalizePath(images[activeIndex])}
              alt={`Collection image ${activeIndex + 1}`}
              style={{
                maxWidth: '100%',
                maxHeight: '100%',
                objectFit: 'contain',
                animation: slideDirection 
                  ? 'fade 0.2s ease' 
                  : undefined
              }}
              onClick={(e) => e.stopPropagation()}
              onAnimationEnd={() => setSlideDirection(null)}
            />
          </div>
          <button
            onClick={handleNext}
            style={{
              position: 'absolute',
              right: '20px',
              color: 'white',
              fontSize: '24px',
              background: 'none',
              border: 'none',
              cursor: 'pointer',
              padding: '20px',
              opacity: showControls ? 1 : 0,
              transition: 'opacity 0.3s ease',
              pointerEvents: showControls ? 'auto' : 'none',
              zIndex: 1001
            }}
          >
            →
          </button>
          <div
            style={{
              position: 'absolute',
              bottom: '20px',
              left: '50%',
              transform: 'translateX(-50%)',
              color: 'white',
              fontSize: '16px',
              padding: '8px 16px',
              backgroundColor: 'rgba(0, 0, 0, 0.5)',
              borderRadius: '20px',
              zIndex: 1001
            }}
          >
            {activeIndex + 1} / {images.length}
          </div>
        </div>
      )}
      <style jsx global>{`
        @keyframes fade {
          from {
            opacity: 0.3;
          }
          to {
            opacity: 1;
          }
        }
      `}</style>
    </>
  );
} 