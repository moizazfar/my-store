'use client'
import { useCart } from '../context/CartContext'

type Props = {
  product: { id: number; name: string; price: number; emoji: string }
}

export default function AddToCartButton({ product }: Props) {
  const { addItem } = useCart()

  return (
    <button
      onClick={() => addItem(product)}
      style={{
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
  )
}