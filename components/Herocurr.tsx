'use client'
import { useEffect, useRef } from 'react'

export default function Hero() {
  const heroRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const el = heroRef.current
    if (!el) return
    el.style.opacity = '0'
    setTimeout(() => {
      el.style.transition = 'opacity 0.8s ease'
      el.style.opacity = '1'
    }, 100)
  }, [])

  return (
    <section id="home" className="relative pt-16 min-h-screen flex items-center overflow-hidden bg-white">
      {/* Background subtle grid */}
      <div className="absolute inset-0 pointer-events-none"
        style={{ backgroundImage: 'radial-gradient(circle at 1px 1px, #e5e7eb 1px, transparent 0)', backgroundSize: '32px 32px', opacity: 0.4 }}>
      </div>

      <div className="max-w-7xl mx-auto px-6 w-full" ref={heroRef}>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start min-h-[calc(100vh-64px)] py-12">

          {/* ── Col 1–6: Heading + buttons ── */}
          <div className="lg:col-span-6 flex flex-col">
            {/* Heading */}
            <div className="mb-8">
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-black leading-none tracking-tight text-gray-900 uppercase">
                THE DIGITAL
              </h1>
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-black leading-none tracking-tight uppercase mt-2">
                <span className="text-primary">AGENCY</span>
                <span className="text-gray-900"> DELIVERING</span>
              </h1>
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-black leading-none tracking-tight text-gray-900 uppercase mt-2">
                FINEST SOLUTIONS
              </h1>
            </div>

            {/* Reviews + avatars */}
            <div className="flex flex-wrap items-center gap-4 mb-8">
              <a href="#testimonials" className="btn-primary">Reviews ↗</a>
              <div className="flex items-center gap-3">
                <div className="flex -space-x-3">
                  {[...Array(4)].map((_, i) => (
                    <div key={i} className="w-10 h-10 rounded-full border-2 border-white overflow-hidden"
                      style={{ zIndex: 4 - i }}>
                      <div className="w-full h-full bg-gradient-to-br from-blue-400 to-purple-500 flex items-center justify-center text-white text-xs font-bold">
                        {['A','B','C','D'][i]}
                      </div>
                    </div>
                  ))}
                  <div className="w-10 h-10 rounded-full border-2 border-white bg-gray-800 flex items-center justify-center text-white text-xs font-bold">+99</div>
                </div>
                <span className="text-gray-400 text-sm">Happy Clients</span>
              </div>
            </div>

            {/* Works card */}
            <div className="bg-gray-100 rounded-2xl p-5 inline-flex flex-wrap items-center gap-6 max-w-lg mb-8">
              <a href="https://wa.me/919354855980" target="_blank" rel="noopener noreferrer"
                className="w-14 h-14 rounded-full bg-green-500 flex items-center justify-center shadow-lg animate-pulse-ring">
                <svg width="26" height="26" viewBox="0 0 24 24" fill="white">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                </svg>
              </a>
              <a href="tel:+919625631185"
                className="w-14 h-14 rounded-full bg-blue-600 flex items-center justify-center shadow-lg hover:bg-blue-700 transition-colors">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="white">
                  <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/>
                </svg>
              </a>
              <a href="#works" className="ml-auto font-semibold text-gray-700 flex items-center gap-2 hover:text-primary transition-colors">
                WORKS <span className="text-lg">↗</span>
              </a>
            </div>

            {/* ── MOBILE ONLY: stats in a single row ── */}
            <div className="flex lg:hidden items-center justify-around bg-gray-50 border border-gray-100 rounded-2xl py-5 px-6 mb-6">
              <div className="text-center">
                <div className="text-4xl font-black text-gray-900 leading-none">
                  2<sup className="text-xl text-primary">+</sup>
                </div>
                <div className="text-xs text-gray-500 font-semibold tracking-widest uppercase mt-1 leading-tight">
                  YEARS<br/>EXPERIENCE
                </div>
              </div>
              <div className="w-px h-12 bg-gray-200"></div>
              <div className="text-center">
                <div className="text-4xl font-black text-gray-900 leading-none">15</div>
                <div className="text-xs text-gray-500 font-semibold tracking-widest uppercase mt-1 leading-tight">
                  PROJECTS<br/>COMPLETED
                </div>
              </div>
            </div>

            {/* ── MOBILE ONLY: filler cards ── */}
            <div className="flex lg:hidden flex-col gap-4">
              <FillerCards />
            </div>
          </div>

          {/* ── Col 7–9: Middle filler (desktop only) ── */}
          <div className="hidden lg:flex lg:col-span-3 flex-col gap-4 pt-2">
            <FillerCards />
          </div>

          {/* ── Col 10–12: Stats (desktop only, vertical) ── */}
          <div className="hidden lg:flex lg:col-span-3 flex-col items-end text-right gap-10 pt-2">
            <div>
              <div className="text-7xl font-black text-gray-900 leading-none">
                2<sup className="text-3xl text-primary">+</sup>
              </div>
              <div className="text-xs text-gray-500 font-semibold tracking-widest uppercase mt-2 leading-tight">
                YEARS<br/>EXPERIENCE
              </div>
            </div>
            <div>
              <div className="text-7xl font-black text-gray-900 leading-none">15</div>
              <div className="text-xs text-gray-500 font-semibold tracking-widest uppercase mt-2 leading-tight">
                PROJECTS<br/>COMPLETED
              </div>
            </div>
          </div>

        </div>
      </div>

      {/* Bottom right blue box (desktop only) */}
      <a href="#service-cards"
        className="absolute bottom-0 right-0 w-80 lg:w-96 h-64 bg-blue-600 rounded-tl-3xl hidden lg:flex flex-col items-end p-6 cursor-pointer hover:bg-blue-700 transition-colors duration-200">
        <div className="flex items-center gap-2 text-white font-bold text-sm">
          SERVICES <span>↗</span>
        </div>
        <div className="mt-4 w-full">
          <div className="w-full h-40 rounded-2xl overflow-hidden">
            <img src="/member-photos/services.jpg" alt="Services" className="w-full h-full object-cover" />
          </div>
        </div>
      </a>
    </section>
  )
}

function FillerCards() {
  return (
    <>
      {/* "What we do" gradient card */}
      {/* <div className="relative bg-gradient-to-br from-blue-600 to-indigo-700 rounded-2xl p-5 shadow-xl overflow-hidden">
        <div className="absolute -top-6 -right-6 w-24 h-24 bg-white/10 rounded-full"></div>
        <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-white/10 rounded-full"></div>
        <p className="text-white/70 text-xs font-semibold uppercase tracking-widest mb-2 relative z-10">What we do</p>
        <h3 className="text-white text-lg font-black leading-snug relative z-10">
          Websites that<br/>convert visitors<br/>into customers.
        </h3>
        
      </div> */}
      <div className="relative bg-gradient-to-br from-blue-600 to-indigo-700 rounded-2xl p-6 shadow-xl overflow-hidden min-h-[260px]">

          {/* Decorative circles */}
          <div className="absolute -top-8 -right-8 w-28 h-28 bg-white/10 rounded-full"></div>
          <div className="absolute -bottom-8 -left-8 w-24 h-24 bg-white/10 rounded-full"></div>

          {/* Quote mark */}
          <div className="absolute top-4 left-5 text-white/20 text-5xl font-serif">
            "
          </div>

          {/* Stair Quote */}
          <div className="relative z-10 mt-6">

            <div>
              <p className="text-white/80 text-sm font-medium">
                Dream
              </p>
              <h2 className="text-white text-5xl font-black leading-none">
                big.
              </h2>
            </div>

            <div className="ml-12 mt-2">
              <p className="text-white/80 text-sm font-medium">
                Start
              </p>
              <h2 className="text-white text-4xl font-black leading-none">
                small.
              </h2>
            </div>

            <div className="ml-24 mt-2">
              <p className="text-white/80 text-sm font-medium">
                Act
              </p>
              <h2 className="text-white text-5xl font-black leading-none">
                now.
              </h2>
            </div>
        </div>
      </div>

      {/* Our Process card */}
      <div className="bg-white border border-gray-100 rounded-2xl p-5 shadow-sm">
        <p className="text-gray-400 text-xs font-semibold uppercase tracking-widest mb-3">Steps to Success</p>
        <div className="space-y-3">
          {[
            { step: '01', label: 'Discover & Plan' },
            { step: '02', label: 'Design & Build' },
            { step: '03', label: 'Launch & Grow' },
          ].map((s, i) => (
            <div key={i} className="flex items-center gap-3">
              <span className="text-xs font-black text-primary w-6 flex-shrink-0">{s.step}</span>
              <div className="flex-1 h-px bg-gray-100"></div>
              <span className="text-xs font-semibold text-gray-600">{s.label}</span>
            </div>
          ))}
        </div>
      </div>

    
    </>
  )
}
