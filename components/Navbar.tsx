'use client'
import { useState, useEffect } from 'react'
import Link from 'next/link'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const [dark, setDark] = useState(false)

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', handler)
    return () => window.removeEventListener('scroll', handler)
  }, [])

  // Apply dark mode to <html> element
  useEffect(() => {
    if (dark) {
      document.documentElement.classList.add('dark')
    } else {
      document.documentElement.classList.remove('dark')
    }
  }, [dark])

  // Nav links: Service → #service-cards, Contact → #footer-contact
  const links = [
    { label: 'Home', href: '#home' },
    { label: 'About', href: '#about' },
    { label: 'Service', href: '#service-cards' },
    { label: 'Contact', href: '#footer-contact' },
  ]

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'bg-white/95 backdrop-blur-md shadow-md' : 'bg-white'}`}>
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2">
          <div className="flex items-center">
            <span className="text-xl font-black tracking-tighter text-gray-900">WEB</span>
            <div className="w-5 h-5 rounded-full border-2 border-gray-900 flex items-center justify-center mx-0.5">
              <div className="w-2 h-2 bg-primary rounded-full"></div>
            </div>
            <span className="text-xl font-black tracking-tighter text-gray-900">CRAFT</span>
          </div>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          {links.map(link => (
            <a key={link.label} href={link.href}
              className="nav-link text-gray-700 font-medium text-sm hover:text-primary transition-colors duration-200">
              {link.label}
            </a>
          ))}
        </div>

        {/* Right side: only dark mode toggle */}
        <div className="flex items-center gap-3">
          <button
            onClick={() => setDark(!dark)}
            className="w-9 h-9 rounded-full bg-gray-100 flex items-center justify-center text-gray-600 hover:bg-gray-200 transition-colors"
            aria-label="Toggle dark mode"
          >
            {dark ? '☀️' : '🌙'}
          </button>
          {/* Mobile hamburger */}
          <button className="md:hidden ml-2 p-2 rounded-lg hover:bg-gray-100" onClick={() => setMenuOpen(!menuOpen)}>
            <div className={`w-5 h-0.5 bg-gray-700 mb-1 transition-all ${menuOpen ? 'rotate-45 translate-y-1.5' : ''}`}></div>
            <div className={`w-5 h-0.5 bg-gray-700 mb-1 transition-all ${menuOpen ? 'opacity-0' : ''}`}></div>
            <div className={`w-5 h-0.5 bg-gray-700 transition-all ${menuOpen ? '-rotate-45 -translate-y-1.5' : ''}`}></div>
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="md:hidden bg-white border-t px-6 py-4 flex flex-col gap-4 shadow-lg">
          {links.map(link => (
            <a key={link.label} href={link.href}
              onClick={() => setMenuOpen(false)}
              className="text-gray-700 font-medium text-base hover:text-primary transition-colors">
              {link.label}
            </a>
          ))}
        </div>
      )}
    </nav>
  )
}
