import { CollectionData } from '../types/collection'
import CollectionLink from '../components/CollectionLink'
import ImageModal from '../components/ImageModal'

interface CollectionTemplateProps {
  data: CollectionData
}

export default function CollectionTemplate({ data }: CollectionTemplateProps) {
  const textStyle = {
    fontFamily: 'var(--font-playfair)',
    fontSize: '28px',
    color: '#000',
  }

  const labelStyle = {
    ...textStyle,
    color: '#333',
    marginRight: '4px',
  }

  const containerStyle = {
    display: 'block',
    '@media (min-width: 768px)': {
      display: 'flex',
      gap: '32px',
    },
  }

  const metadataStyle = {
    display: 'grid',
    gridTemplateColumns: 'repeat(3, 1fr)',
    gap: '24px',
    '@media (min-width: 768px)': {
      display: 'flex',
      gap: '12px',
    },
  }

  const descriptionStyle = {
    marginTop: '80px',
    '@media (min-width: 768px)': {
      marginTop: 0,
      flex: 1,
    },
  }

  return (
    <div
      style={{
        maxWidth: '1800px',
        margin: '0 auto',
        padding: '180px 32px 32px 32px',
      }}
    >
      <h1
        style={{
          fontFamily: 'var(--font-playfair)',
          fontSize: '24px',
          color: '#000',
          fontWeight: '400',
          fontStyle: 'normal',
          marginBottom: '48px',
        }}
      >
        {data.title}
      </h1>

      <div style={containerStyle}>
        <div style={metadataStyle}>
          <div>
            <div style={{ ...labelStyle, fontSize: '18px' }}>Year</div>
            <div style={{ ...textStyle, fontSize: '18px' }}>{data.year}</div>
          </div>

          <div style={{ textAlign: 'center' }}>
            <div style={{ ...labelStyle, fontSize: '18px' }}>Iterations</div>
            <div style={{ ...textStyle, fontSize: '18px' }}>
              {data.iterations}
            </div>
          </div>

          <div style={{ textAlign: 'right' }}>
            <div style={{ ...labelStyle, fontSize: '18px' }}>Links</div>
            <a href={data.link} style={{ ...textStyle, fontSize: '18px' }}>
              opensea
            </a>
          </div>
        </div>

        <div style={descriptionStyle}>
          <p
            style={{
              fontFamily: 'var(--font-playfair)',
              fontSize: '18px',
              lineHeight: '1.5',
              marginBottom: '32px',
              whiteSpace: 'pre-wrap',
            }}
          >
            {data.description}
          </p>
        </div>
      </div>

      <div className="mt-32" style={{ marginTop: '130px' }}>
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
            gap: '32px',
            maxWidth: '1600px',
            margin: '0 auto',
            padding: '0 24px',
          }}
        >
          {data.images.map((imageUrl, index) => (
            <ImageModal
              key={index}
              src={`/${imageUrl}`}
              alt={`Collection image ${index + 1}`}
              images={data.images}
              currentIndex={index}
            />
          ))}
        </div>
      </div>
    </div>
  )
}
