import type { Metadata } from 'next'
import '@/styles/globals.css'
import Header from '../components/Header'

// ... остальной код без изменений ...
export const metadata: Metadata = {
  title: 'ALEKUSTN',
  description: 'ALEKUSTN',
  viewport: {
    width: 'device-width',
    initialScale: 1,
    maximumScale: 1,
    userScalable: false
  }
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <Header />
        {children}
      </body>
    </html>
  )
}