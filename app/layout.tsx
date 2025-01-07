import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Cult of Done Poster',
  description: 'A poster for the Cult of Done Manifesto',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
