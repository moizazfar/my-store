const products = [
  { id: 1, name: 'Wireless Headphones', price: 2999, emoji: '🎧', desc: 'Crystal clear sound with 30hr battery life.' },
  { id: 2, name: 'Mechanical Keyboard', price: 4999, emoji: '⌨️', desc: 'Tactile switches, RGB backlight, TKL layout.' },
  { id: 3, name: 'USB-C Hub',           price: 1999, emoji: '🔌', desc: '7-in-1 hub with HDMI, USB 3.0, SD card.' },
  { id: 4, name: 'Webcam HD',           price: 3499, emoji: '📷', desc: '1080p autofocus, built-in noise cancel mic.' },
  { id: 5, name: 'Mouse Pad XL',        price:  799, emoji: '🖱️', desc: 'Extra large 80x40cm, non-slip rubber base.' },
  { id: 6, name: 'LED Desk Lamp',       price: 1499, emoji: '💡', desc: 'Touch dimmer, 3 color modes, USB charging.' },
]

export default function ProductDetail({ params }) {
  const product = products.find(p => p.id === parseInt(params.id))

  if (!product) return <h2>Product not found</h2>

  return (
    <div style={{ maxWidth: '500px' }}>
      <div style={{ fontSize: '80px', marginBottom: '24px' }}>{product.emoji}</div>
      <h1 style={{ marginBottom: '8px' }}>{product.name}</h1>
      <p style={{ color: '#555', marginBottom: '16px' }}>{product.desc}</p>
      <p style={{ fontSize: '28px', fontWeight: 'bold', marginBottom: '24px' }}>
        Rs. {product.price.toLocaleString()}
      </p>
      <button style={{
        backgroundColor: 'black',
        color: 'white',
        padding: '14px 32px',
        border: 'none',
        borderRadius: '8px',
        fontSize: '16px',
        cursor: 'pointer',
        width: '100%'
      }}>
        Add to Cart
      </button>
    </div>
  )
}