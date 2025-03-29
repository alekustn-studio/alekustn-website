"use client";
import Link from 'next/link';

export default function CollectionGrid() {
  // Массив коллекций в хронологическом порядке (новые в начале)
  const collections = [
    {
      id: 13,
      imagePath: "/images/collection-13.png", // Новое изображение
    },
    {
      id: 12,
      imagePath: "/images/collection-12.png", // Новое изображение
    },
    {
      id: 11,
      imagePath: "/images/collection-11.png", // Новое изображение
    },
    {
      id: 10,
      imagePath: "/images/collection-10.png", // Новое изображение
    },
    {
      id: 9,
      imagePath: "/images/collection-9.png", // Новое изображение
    },
    {
      id: 8,
      imagePath: "/images/collection-8.jpg", // Новое изображение .jpg
    },
    {
      id: 7,
      imagePath: "/images/collection-7.png", // Новое изображение
    },
    {
      id: 6,
      imagePath: "/images/collection-6.png", // Новое изображение
    },
    {
      id: 5,
      imagePath: "/images/collection-5.png", // Новое изображение
    },
    {
      id: 4,
      imagePath: "/images/collection-4.png",
    },
    {
      id: 3,
      imagePath: "/images/collection-3.png",
    },
    {
      id: 2,
      imagePath: "/images/collection-2.png", // Путь к новой картинке
    },
    {
      id: 1,
      imagePath: "/images/collection-1.png", // Существующая картинка
    }
  ];

  return (
    <div 
      className="collection-grid"
      style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(5, 1fr)',
        gap: '16px',
        padding: '0 32px',
        marginTop: '100px'
      }}
    >
      {/* Отображаем только коллекции */}
      {collections.map((collection) => (
        <Link
          key={collection.id}
          href={`/collection/${collection.id}`}
          style={{ 
            position: 'relative',
            aspectRatio: '1',
            width: '100%',
            overflow: 'hidden',
            cursor: 'pointer',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center'
          }}
        >
          <div
            onMouseEnter={e => {
              const img = e.currentTarget.querySelector('img');
              if (img) img.style.transform = 'scale(0.98)';
            }}
            onMouseLeave={e => {
              const img = e.currentTarget.querySelector('img');
              if (img) img.style.transform = 'scale(1)';
            }}
          >
            <img
              src={collection.imagePath}
              alt={`Collection ${collection.id}`}
              style={{ 
                width: '100%',
                height: '100%',
                objectFit: 'cover',
                objectPosition: 'center center',
                transition: 'transform 0.2s ease-in-out'
              }}
            />
          </div>
        </Link>
      ))}
    </div>
  );
} 