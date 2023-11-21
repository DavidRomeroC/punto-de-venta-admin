import Navbar from '@/components/Navbar'
import './globals.css'
import type { Metadata } from 'next'


export const metadata: Metadata = {
  title: 'Punto de venta'
}

export default function RootLayout({ children, }: { children: React.ReactNode }) {
  return (
    <html lang="es">
      <body className='grid grid-cols-1 gap-4 font-mono'>
        <Navbar />
        <div className='flex justify-center h-auto'>
          {children}
        </div>
      </body>
    </html>
  )
}
