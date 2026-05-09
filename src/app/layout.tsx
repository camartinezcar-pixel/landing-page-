import type { Metadata } from 'next'
import { Inter, Playfair_Display } from 'next/font/google'
import '@/styles/globals.css'

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' })
const playfair = Playfair_Display({ subsets: ['latin'], variable: '--font-playfair' })

export const metadata: Metadata = {
  title: 'Carlos Andrés Martínez Cárdenas | Estratega Digital',
  description: 'Transformando ideas en resultados extraordinarios. Consultoría de negocios, estrategia digital y liderazgo.',
  openGraph: {
    title: 'Carlos Andrés Martínez Cárdenas',
    description: 'Estratega Digital & Consultor de Negocios',
    type: 'website',
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es" className="scroll-smooth">
      <body className={`${inter.variable} ${playfair.variable} antialiased`}>
        {children}
      </body>
    </html>
  )
}
