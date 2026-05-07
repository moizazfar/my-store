import Link from 'next/link'

export default function Navbar() {
  return (
    <nav style={{
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      padding: '16px 32px',
      borderBottom: '1px solid #eee',
      backgroundColor: 'white'
    }}>
      <Link href="/" style={{ fontSize: '20px', fontWeight: 'bold', textDecoration: 'none', color: 'black' }}>
        MyStore
      </Link>
      <div style={{ display: 'flex', gap: '24px' }}>
        <Link href="/products" style={{ textDecoration: 'none', color: '#333' }}>Products</Link>
        <Link href="/cart" style={{ textDecoration: 'none', color: '#333' }}>Cart (0)</Link>
      </div>
    </nav>
  )
}