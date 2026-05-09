'use client'
import Link from 'next/link'
import { useCart } from '../context/CartContext'

export default function Navbar() {
  const { count } = useCart()

  return (
    <nav style={{
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      padding: '16px 32px',
      borderBottom: '1px solid #eee',
      backgroundColor: 'white',
      position: 'sticky',
      top: 0,
      zIndex: 100
    }}>
      <Link href="/" style={{ fontSize: '20px', fontWeight: 'bold', textDecoration: 'none', color: 'black' }}>
        MyStore
      </Link>
      <div style={{ display: 'flex', gap: '24px', alignItems: 'center' }}>
        <Link href="/products" style={{ textDecoration: 'none', color: '#333' }}>Products</Link>
        <Link href="/cart" style={{
          textDecoration: 'none',
          color: 'white',
          backgroundColor: 'black',
          padding: '8px 16px',
          borderRadius: '8px',
          fontSize: '14px'
        }}>
          🛒 Cart {count > 0 && `(${count})`}
        </Link>
      </div>
    </nav>
  )
}