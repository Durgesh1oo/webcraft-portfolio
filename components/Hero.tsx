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
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center min-h-[calc(100vh-64px)] py-16">
          {/* Left: Text */}
          <div className="lg:col-span-8">
            {/* Main heading — no blue box after "THE DIGITAL" */}
            <div className="mb-4">
              <h1 className="text-6xl md:text-7xl lg:text-8xl font-black leading-none tracking-tight text-gray-900 uppercase">
                THE DIGITAL
              </h1>
              <h1 className="text-6xl md:text-7xl lg:text-8xl font-black leading-none tracking-tight uppercase mt-2">
                <span className="text-primary">AGENCY</span>
                <span className="text-gray-900"> DELIVERING</span>
              </h1>
              <h1 className="text-6xl md:text-7xl lg:text-8xl font-black leading-none tracking-tight text-gray-900 uppercase mt-2">
                FINEST SOLUTIONS
              </h1>
            </div>

            {/* Reviews button → scroll to testimonials */}
            <div className="flex flex-wrap items-center gap-4 mt-8">
              <a href="#testimonials" className="btn-primary">
                Reviews ↗
              </a>
              <div className="flex items-center gap-2">
                <div className="flex -space-x-3">
                  {[...Array(4)].map((_, i) => (
                    <div key={i} className="w-10 h-10 rounded-full border-2 border-white overflow-hidden bg-gray-300"
                      style={{ zIndex: 4 - i }}>
                      <div className="w-full h-full bg-gradient-to-br from-blue-400 to-purple-500 flex items-center justify-center text-white text-xs font-bold">
                        {['A','B','C','D'][i]}
                      </div>
                    </div>
                  ))}
                  <div className="w-10 h-10 rounded-full border-2 border-white bg-gray-800 flex items-center justify-center text-white text-xs font-bold">
                    +99
                  </div>
                </div>
              </div>
            </div>

            {/* Works link card */}
            <div className="mt-8 bg-gray-100 rounded-2xl p-5 inline-flex flex-wrap items-center gap-6 max-w-xl">
              <a href="https://wa.me/919354855980" target="_blank" rel="noopener noreferrer"
                className="w-16 h-16 rounded-full bg-green-500 flex items-center justify-center text-white text-2xl shadow-lg animate-pulse-ring cursor-pointer">
                <svg width="28" height="28" viewBox="0 0 24 24" fill="white">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                </svg>
              </a>
              <a href="tel:+919625631185"
                className="w-16 h-16 rounded-full bg-blue-600 flex items-center justify-center text-white text-2xl shadow-lg cursor-pointer hover:bg-blue-700 transition-colors">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="white">
                  <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/>
                </svg>
              </a>
              <a href="#works" className="ml-auto font-semibold text-gray-700 flex items-center gap-2 hover:text-primary transition-colors">
                WORKS <span className="text-lg">↗</span>
              </a>
            </div>
          </div>

          {/* Right: Stats */}
          <div className="lg:col-span-4 flex flex-col items-end gap-12 text-right">
            <div>
              <div className="text-7xl font-black text-gray-900 leading-none">
                2<sup className="text-3xl text-primary">+</sup>
              </div>
              <div className="text-xs text-gray-500 font-semibold tracking-widest uppercase mt-1 leading-tight">
                YEARS<br/>EXPERIENCE
              </div>
            </div>
            <div>
              <div className="text-7xl font-black text-gray-900 leading-none">15</div>
              <div className="text-xs text-gray-500 font-semibold tracking-widest uppercase mt-1 leading-tight">
                PROJECTS<br/>COMPLETED
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom right blue box — SERVICES links to #service-cards */}
      <a href="#service-cards"
        className="absolute bottom-0 right-0 w-80 lg:w-96 h-64 bg-blue-600 rounded-tl-3xl flex flex-col items-end p-6 hidden lg:flex cursor-pointer hover:bg-blue-700 transition-colors duration-200">
        <div className="flex items-center gap-2 text-white font-bold text-sm">
          SERVICES <span>↗</span>
        </div>
        <div className="mt-4 w-full">
          <div className="w-full h-40 rounded-2xl overflow-hidden">
            <img
              src="/member-photos/services.jpg"
              alt="Services"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </a>
    </section>
  )
}
