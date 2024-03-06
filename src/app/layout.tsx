import type { Metadata } from 'next'
import './globals.scss'
import Header from '@/components/Header/Header'
import Footer from '@/components/Footer/Footer'
import { Suspense } from 'react'
import Loading from './loading'

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
        <Suspense fallback={<Loading />}>{children}</Suspense>
        <Footer />
      </body>
    </html>
  )
}
