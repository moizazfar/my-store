import { prisma } from '@/lib/prisma'
import Link from 'next/link'

export const dynamic = 'force-dynamic'

type Product = {
  id: number
  name: string
  price: number
  emoji: string
}

export default async function ProductsPage() {
  const products = await prisma.product.findMany()

  return (
    <div>
      <h2 style={{ marginBottom: '24px' }}>All Products</h2>
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fill, minmax(220px, 1fr))',
        gap: '24px'
      }}>
        {products.map((product: Product) => (
          <Link key={product.id} href={`/products/${product.id}`}
            style={{ textDecoration: 'none', color: 'inherit' }}>
            <div style={{
              border: '1px solid #eee',
              borderRadius: '12px',
              padding: '24px',
              cursor: 'pointer'
            }}>
              <div style={{ fontSize: '48px', marginBottom: '12px' }}>
                {product.emoji}
              </div>
              <h3 style={{ margin: '0 0 8px', fontSize: '16px' }}>
                {product.name}
              </h3>
              <p style={{ margin: 0, fontWeight: 'bold' }}>
                Rs. {product.price.toLocaleString()}
              </p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  )
}