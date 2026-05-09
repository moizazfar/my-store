import { prisma } from '@/lib/prisma'
import AddToCartButton from '@/app/components/AddToCartButton'

export default async function ProductDetail({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params

  const product = await prisma.product.findUnique({
    where: { id: parseInt(id) }
  })

  if (!product) return <h2>Product not found</h2>

  return (
    <div style={{ maxWidth: '500px' }}>
      <div style={{ fontSize: '80px', marginBottom: '24px' }}>{product.emoji}</div>
      <h1 style={{ marginBottom: '8px' }}>{product.name}</h1>
      <p style={{ color: '#555', marginBottom: '16px' }}>{product.description}</p>
      <p style={{ fontSize: '28px', fontWeight: 'bold', marginBottom: '24px' }}>
        Rs. {product.price.toLocaleString()}
      </p>
      <AddToCartButton product={{
        id: product.id,
        name: product.name,
        price: product.price,
        emoji: product.emoji
      }} />
    </div>
  )
}