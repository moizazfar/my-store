import Link from 'next/link'

export default function HomePage() {
  return (
    <div>
      <div style={{ textAlign: 'center', padding: '60px 0' }}>
        <h1 style={{ fontSize: '48px', marginBottom: '16px' }}>
          Welcome to MyStore
        </h1>
        <p style={{ fontSize: '18px', color: '#666', marginBottom: '32px' }}>
          Best products at best prices
        </p>
        <Link href="/products" style={{
          backgroundColor: 'black',
          color: 'white',
          padding: '14px 32px',
          borderRadius: '8px',
          textDecoration: 'none',
          fontSize: '16px'
        }}>
          Shop Now
        </Link>
      </div>
    </div>
  )
}