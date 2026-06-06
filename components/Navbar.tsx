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

  useEffect(() => {
    if (dark) document.documentElement.classList.add('dark')
    else document.documentElement.classList.remove('dark')
  }, [dark])

  const links = [
    { label: 'Home', href: '#home' },
    { label: 'About', href: '#about' },
    { label: 'Services', href: '#service-cards' },
    { label: 'Contact', href: '#footer-contact' },
  ]

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      scrolled ? 'bg-white/95 backdrop-blur-md shadow-md' : 'bg-white'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between gap-2">

        {/* Logo — shrink-0 so it never compresses */}
        <Link href="/" className="flex-shrink-0 flex items-center gap-1.5">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
            <rect x="1" y="10" width="3" height="4" rx="1" fill="#f97316"/>
            <rect x="4" y="8" width="2" height="8" rx="1" fill="#f97316"/>
            <rect x="6" y="11" width="12" height="2" rx="1" fill="#111827"/>
            <rect x="18" y="8" width="2" height="8" rx="1" fill="#f97316"/>
            <rect x="20" y="10" width="3" height="4" rx="1" fill="#f97316"/>
          </svg>
          <span className="text-lg font-black tracking-tighter text-gray-900">WEB</span>
          <span className="text-lg font-black tracking-tighter" style={{ color: '#f97316' }}>CRAFT</span>
        </Link>

        {/* Desktop nav links — hidden on mobile */}
        <div className="hidden md:flex items-center gap-6 lg:gap-8">
          {links.map(link => (
            <a key={link.label} href={link.href}
              className="nav-link text-gray-700 font-semibold text-sm hover:text-orange-500 transition-colors duration-200 whitespace-nowrap">
              {link.label}
            </a>
          ))}
        </div>

        {/* Right side controls */}
        <div className="flex items-center gap-2 flex-shrink-0">
          {/* CTA — desktop only, never shown on mobile */}
          <a href="#footer-contact"
            className="hidden lg:inline-flex items-center gap-2 btn-primary text-sm py-2 px-4 whitespace-nowrap">
            Get a Free Quote ↗
          </a>

          {/* Dark mode toggle */}
          <button
            onClick={() => setDark(!dark)}
            className="w-9 h-9 rounded-full bg-gray-100 flex items-center justify-center text-gray-600 hover:bg-gray-200 transition-colors flex-shrink-0"
            aria-label="Toggle dark mode"
          >
            {dark ? '☀️' : '🌙'}
          </button>

          {/* Hamburger — mobile only */}
          <button
            className="md:hidden p-2 rounded-lg hover:bg-gray-100 flex-shrink-0"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            <div className={`w-5 h-0.5 bg-gray-700 mb-1.5 transition-all origin-center ${menuOpen ? 'rotate-45 translate-y-2' : ''}`}/>
            <div className={`w-5 h-0.5 bg-gray-700 mb-1.5 transition-all ${menuOpen ? 'opacity-0 scale-x-0' : ''}`}/>
            <div className={`w-5 h-0.5 bg-gray-700 transition-all origin-center ${menuOpen ? '-rotate-45 -translate-y-2' : ''}`}/>
          </button>
        </div>
      </div>

      {/* Mobile dropdown menu */}
      {menuOpen && (
        <div className="md:hidden bg-white border-t border-gray-100 px-5 py-5 flex flex-col gap-4 shadow-lg">
          {links.map(link => (
            <a key={link.label} href={link.href}
              onClick={() => setMenuOpen(false)}
              className="text-gray-700 font-semibold text-base hover:text-orange-500 transition-colors py-1">
              {link.label}
            </a>
          ))}
          {/* CTA inside mobile menu */}
          <a href="#footer-contact"
            onClick={() => setMenuOpen(false)}
            className="btn-primary text-center justify-center text-sm py-3 mt-1">
            Get a Free Quote ↗
          </a>
        </div>
      )}
    </nav>
  )
}
