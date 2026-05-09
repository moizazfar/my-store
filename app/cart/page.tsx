'use client'
import { useCart } from '../context/CartContext'
import Link from 'next/link'

export default function CartPage() {
  const { items, removeItem, total } = useCart()

  if (items.length === 0) {
    return (
      <div style={{ textAlign: 'center', padding: '60px 0' }}>
        <div style={{ fontSize: '64px', marginBottom: '16px' }}>🛒</div>
        <h2>Cart khali hai</h2>
        <Link href="/products" style={{
          backgroundColor: 'black', color: 'white',
          padding: '12px 24px', borderRadius: '8px',
          textDecoration: 'none', display: 'inline-block', marginTop: '16px'
        }}>
          Products dekho
        </Link>
      </div>
    )
  }

  return (
    <div style={{ maxWidth: '600px' }}>
      <h2 style={{ marginBottom: '24px' }}>Tumhara Cart</h2>

      {items.map(item => (
        <div key={item.id} style={{
          display: 'flex', justifyContent: 'space-between', alignItems: 'center',
          padding: '16px', border: '1px solid #eee', borderRadius: '12px', marginBottom: '12px'
        }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
            <span style={{ fontSize: '32px' }}>{item.emoji}</span>
            <div>
              <p style={{ margin: 0, fontWeight: '500' }}>{item.name}</p>
              <p style={{ margin: 0, color: '#666', fontSize: '14px' }}>
                Rs. {item.price.toLocaleString()} × {item.quantity}
              </p>
            </div>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
            <p style={{ margin: 0, fontWeight: 'bold' }}>
              Rs. {(item.price * item.quantity).toLocaleString()}
            </p>
            <button onClick={() => removeItem(item.id)} style={{
              background: 'none', border: '1px solid #eee',
              borderRadius: '6px', padding: '4px 10px', cursor: 'pointer', color: '#e00'
            }}>✕</button>
          </div>
        </div>
      ))}

      <div style={{
        borderTop: '2px solid #000', paddingTop: '16px', marginTop: '8px',
        display: 'flex', justifyContent: 'space-between', alignItems: 'center'
      }}>
        <span style={{ fontSize: '18px', fontWeight: 'bold' }}>Total</span>
        <span style={{ fontSize: '24px', fontWeight: 'bold' }}>Rs. {total.toLocaleString()}</span>
      </div>

      <button style={{
        width: '100%', marginTop: '24px', padding: '16px',
        backgroundColor: 'black', color: 'white', border: 'none',
        borderRadius: '8px', fontSize: '16px', cursor: 'pointer'
      }}>
        Checkout →
      </button>
    </div>
  )
}