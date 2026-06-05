import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'WebCraft Studio | Custom Web Solutions',
  description: 'We build custom websites tailored to your business needs. Web development, UI/UX design, SEO optimization, and more.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
