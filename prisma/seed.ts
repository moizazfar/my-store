import 'dotenv/config'
import { PrismaClient } from '@prisma/client'
import { PrismaPg } from '@prisma/adapter-pg'

const connectionString = process.env.DATABASE_URL
if (!connectionString) {
  throw new Error('DATABASE_URL is not set')
}

const adapter = new PrismaPg({ connectionString })
const prisma = new PrismaClient({ adapter })

async function main() {
  await prisma.product.createMany({
    data: [
      { name: 'Wireless Headphones', price: 2999, emoji: '🎧', description: 'Crystal clear sound with 30hr battery life.' },
      { name: 'Mechanical Keyboard',  price: 4999, emoji: '⌨️', description: 'Tactile switches, RGB backlight, TKL layout.' },
      { name: 'USB-C Hub',            price: 1999, emoji: '🔌', description: '7-in-1 hub with HDMI, USB 3.0, SD card.' },
      { name: 'Webcam HD',            price: 3499, emoji: '📷', description: '1080p autofocus, built-in noise cancel mic.' },
      { name: 'Mouse Pad XL',         price:  799, emoji: '🖱️', description: 'Extra large 80x40cm, non-slip rubber base.' },
      { name: 'LED Desk Lamp',        price: 1499, emoji: '💡', description: 'Touch dimmer, 3 color modes, USB charging.' },
    ]
  })
  console.log('Products added!')
}

main()
  .catch(console.error)
  .finally(() => prisma.$disconnect())