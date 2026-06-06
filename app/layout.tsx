import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'WebCraft — Gym Website Specialists | Fitness Web Design & SEO',
  description: 'We build powerful websites exclusively for gyms and fitness centres. Get a mobile-first, SEO-optimised gym website that attracts members and grows your fitness business.',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
