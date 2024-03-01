import type { Metadata } from 'next'
import './globals.scss'
import Header from '@/components/Header/Header'

export const metadata: Metadata = {
  title: 'Audiophile',
  description: 'Audiophile multi-page e-commerce website',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang='en'>
      <body>
        <Header />
        {children}
      </body>
    </html>
  )
}
