import { Geist } from 'next/font/google'
import './globals.css'
import Navbar from './components/Navbar'
import { CartProvider } from './context/CartContext'

const geist = Geist({ subsets: ['latin'] })

export const metadata = {
  title: 'MyStore',
  description: 'My Ecommerce Store',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={geist.className} suppressHydrationWarning>
        <CartProvider>
          <Navbar />
          <main style={{ maxWidth: '1200px', margin: '0 auto', padding: '32px 16px' }}>
            {children}
          </main>
        </CartProvider>
      </body>
    </html>
  )
}