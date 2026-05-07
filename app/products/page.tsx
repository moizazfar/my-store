import Link from 'next/link'

const products = [
  { id: 1, name: 'Wireless Headphones', price: 2999, emoji: '🎧' },
  { id: 2, name: 'Mechanical Keyboard', price: 4999, emoji: '⌨️' },
  { id: 3, name: 'USB-C Hub',           price: 1999, emoji: '🔌' },
  { id: 4, name: 'Webcam HD',           price: 3499, emoji: '📷' },
  { id: 5, name: 'Mouse Pad XL',        price:  799, emoji: '🖱️' },
  { id: 6, name: 'LED Desk Lamp',       price: 1499, emoji: '💡' },
]

export default function ProductsPage() {
  return (
    <div>
      <h2 style={{ marginBottom: '24px' }}>All Products</h2>
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fill, minmax(220px, 1fr))',
        gap: '24px'
      }}>
        {products.map(product => (
          <Link key={product.id} href={`/products/${product.id}`}
            style={{ textDecoration: 'none', color: 'inherit' }}>
            <div style={{
              border: '1px solid #eee',
              borderRadius: '12px',
              padding: '24px',
              cursor: 'pointer',
              transition: 'box-shadow 0.2s'
            }}>
              <div style={{ fontSize: '48px', marginBottom: '12px' }}>
                {product.emoji}
              </div>
              <h3 style={{ margin: '0 0 8px', fontSize: '16px' }}>
                {product.name}
              </h3>
              <p style={{ margin: 0, fontWeight: 'bold', color: '#1a1a1a' }}>
                Rs. {product.price.toLocaleString()}
              </p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  )
}