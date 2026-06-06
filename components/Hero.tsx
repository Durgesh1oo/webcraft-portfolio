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
    <section id="home" className="relative pt-16 lg:min-h-screen flex items-center overflow-hidden bg-white">
      {/* Background pattern — diagonal lines (gym/energy feel) */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.03]"
        style={{
          backgroundImage: 'repeating-linear-gradient(45deg, #111 0, #111 1px, transparent 0, transparent 50%)',
          backgroundSize: '20px 20px',
        }}>
      </div>
      {/* Orange glow top-right */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] rounded-full pointer-events-none"
        style={{ background: 'radial-gradient(circle, rgba(249,115,22,0.08) 0%, transparent 70%)' }}>
      </div>

      <div className="max-w-7xl mx-auto px-6 w-full" ref={heroRef}>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start py-12 lg:min-h-[calc(100vh-64px)]">

          {/* ── Col 1–6: Heading + CTA ── */}
          <div className="lg:col-span-6 flex flex-col">
            {/* Eyebrow */}
            <div className="flex items-center gap-2 mb-5">
              <span className="inline-block w-8 h-0.5 bg-orange-500"></span>
              <span className="text-orange-500 font-bold text-xs tracking-[0.2em] uppercase">Gym Web Specialists</span>
            </div>

            {/* Heading */}
            <div className="mb-8">
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-black leading-none tracking-tight text-gray-900 uppercase">
                WE BUILD
              </h1>
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-black leading-none tracking-tight uppercase mt-1">
                <span style={{ color: '#f97316' }}>POWERFUL</span>
              </h1>
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-black leading-none tracking-tight text-gray-900 uppercase mt-1">
                GYM WEBSITES
              </h1>
            </div>

            {/* Sub-headline */}
            <p className="text-gray-500 text-base leading-relaxed mb-8 max-w-md">
              Websites that attract members, showcase your gym's strength, and turn every visitor into a paying client. Built exclusively for fitness businesses.
            </p>

            {/* CTA row */}
            <div className="flex flex-wrap items-center gap-4 mb-8">
              <a href="#footer-contact" className="btn-primary">
                Get a Free Quote ↗
              </a>
              <a href="#testimonials" className="flex items-center gap-2 text-gray-600 font-semibold hover:text-orange-500 transition-colors text-sm">
                <span>Client Reviews</span>
                <span className="text-lg">★</span>
              </a>
            </div>

            {/* Avatars + social proof */}
            <div className="flex items-center gap-4 mb-8">
              <div className="flex -space-x-3">
                {[...Array(4)].map((_, i) => (
                  <div key={i} className="w-10 h-10 rounded-full border-2 border-white overflow-hidden"
                    style={{ zIndex: 4 - i }}>
                    <div className="w-full h-full flex items-center justify-center text-white text-xs font-bold"
                      style={{ background: ['#f97316','#ef4444','#111827','#374151'][i] }}>
                      {['💪','🏋️','🥊','🔥'][i]}
                    </div>
                  </div>
                ))}
                <div className="w-10 h-10 rounded-full border-2 border-white bg-orange-500 flex items-center justify-center text-white text-xs font-bold">+</div>
              </div>
              <span className="text-gray-400 text-sm font-medium">15+ Gym Owners Trust Us</span>
            </div>

            {/* Contact card */}
            <div className="bg-gray-50 border border-gray-100 rounded-2xl p-5 inline-flex flex-wrap items-center gap-5 max-w-lg mb-8">
              <a href="https://wa.me/919354855980" target="_blank" rel="noopener noreferrer"
                className="w-14 h-14 rounded-full bg-green-500 flex items-center justify-center shadow-lg animate-pulse-ring flex-shrink-0">
                <svg width="26" height="26" viewBox="0 0 24 24" fill="white">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                </svg>
              </a>
              <a href="tel:+919625631185"
                className="w-14 h-14 rounded-full flex items-center justify-center shadow-lg hover:opacity-90 transition-colors flex-shrink-0"
                style={{ background: '#f97316' }}>
                <svg width="22" height="22" viewBox="0 0 24 24" fill="white">
                  <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/>
                </svg>
              </a>
              <div className="flex-1 min-w-0">
                <p className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-0.5">Talk to us today</p>
                <p className="text-sm font-bold text-gray-700">Free consultation for gym owners</p>
              </div>
              <a href="#works" className="font-bold text-gray-600 flex items-center gap-1 hover:text-orange-500 transition-colors text-sm whitespace-nowrap">
                Our Work <span>↗</span>
              </a>
            </div>

            {/* Mobile stats */}
            <div className="flex lg:hidden items-center justify-around bg-gray-50 border border-gray-100 rounded-2xl py-5 px-6 mb-6">
              <div className="text-center">
                <div className="text-4xl font-black text-gray-900 leading-none">
                  2<sup className="text-xl" style={{ color: '#f97316' }}>+</sup>
                </div>
                <div className="text-xs text-gray-500 font-semibold tracking-widest uppercase mt-1 leading-tight">YEARS<br/>EXPERIENCE</div>
              </div>
              <div className="w-px h-12 bg-gray-200"></div>
              <div className="text-center">
                <div className="text-4xl font-black text-gray-900 leading-none">15<sup className="text-xl" style={{ color: '#f97316' }}>+</sup></div>
                <div className="text-xs text-gray-500 font-semibold tracking-widest uppercase mt-1 leading-tight">GYM SITES<br/>DELIVERED</div>
              </div>
            </div>

            {/* Mobile filler */}
            <div className="flex lg:hidden flex-col gap-4">
              <FillerCards />
            </div>
          </div>

          {/* ── Middle col: filler cards (desktop) ── */}
          <div className="hidden lg:flex lg:col-span-3 flex-col gap-4 pt-2">
            <FillerCards />
          </div>

          {/* ── Stats col (desktop) ── */}
          <div className="hidden lg:flex lg:col-span-3 flex-col items-end text-right gap-10 pt-2">
            <div>
              <div className="text-7xl font-black text-gray-900 leading-none">
                2<sup className="text-3xl" style={{ color: '#f97316' }}>+</sup>
              </div>
              <div className="text-xs text-gray-500 font-semibold tracking-widest uppercase mt-2 leading-tight">
                YEARS<br/>EXPERIENCE
              </div>
            </div>
            <div>
              <div className="text-7xl font-black text-gray-900 leading-none">15<sup className="text-3xl" style={{ color: '#f97316' }}>+</sup></div>
              <div className="text-xs text-gray-500 font-semibold tracking-widest uppercase mt-2 leading-tight">
                GYM SITES<br/>DELIVERED
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom-right services panel (desktop) */}
      <a href="#service-cards"
        className="absolute bottom-0 right-0 w-80 lg:w-96 h-64 rounded-tl-3xl hidden lg:flex flex-col items-end p-6 cursor-pointer transition-colors duration-200"
        style={{ background: 'linear-gradient(135deg, #f97316 0%, #ea580c 100%)' }}>
        <div className="flex items-center gap-2 text-white font-bold text-sm">
          OUR GYM SERVICES <span>↗</span>
        </div>
        {/* <div className="mt-4 w-full">
          <div className="w-full h-40 rounded-2xl overflow-hidden bg-white/10 flex flex-col items-center justify-center gap-3 border border-white/20">
            <img src="/member-photos/gymweb.jpeg" alt="" />
          </div>
        </div> */}
        <div className="mt-4 w-full">
          <div className="w-full h-40 rounded-2xl overflow-hidden">
            <img src="/member-photos/gymweb.jpg" alt="Services" className="w-full h-full object-cover" />
          </div>
        </div>
      </a>
    </section>
  )
}

function FillerCards() {
  return (
    <>
      {/* Motivation card */}
      <div className="relative rounded-2xl p-6 shadow-xl overflow-hidden min-h-[260px]"
        style={{ background: 'linear-gradient(135deg, #111827 0%, #1f2937 100%)' }}>
        <div className="absolute -top-8 -right-8 w-28 h-28 rounded-full" style={{ background: 'rgba(249,115,22,0.15)' }}></div>
        <div className="absolute -bottom-8 -left-8 w-24 h-24 rounded-full" style={{ background: 'rgba(249,115,22,0.1)' }}></div>
        <div className="absolute top-4 left-5 text-5xl font-serif" style={{ color: 'rgba(249,115,22,0.2)' }}>"</div>
        <div className="relative z-10 mt-6">
          <div>
            <p className="text-orange-400 text-sm font-semibold">Train</p>
            <h2 className="text-white text-5xl font-black leading-none">hard.</h2>
          </div>
          <div className="ml-10 mt-2">
            <p className="text-orange-400 text-sm font-semibold">Look</p>
            <h2 className="text-white text-4xl font-black leading-none">great.</h2>
          </div>
          <div className="ml-20 mt-2">
            <p className="text-orange-400 text-sm font-semibold">Go</p>
            <h2 className="text-white text-5xl font-black leading-none">online.</h2>
          </div>
        </div>
      </div>

      {/* Process card */}
      <div className="bg-white border border-gray-100 rounded-2xl p-5 shadow-sm">
        <p className="text-gray-400 text-xs font-semibold uppercase tracking-widest mb-3">How We Work</p>
        <div className="space-y-3">
          {[
            { step: '01', label: 'Strategy & Discovery' },
            { step: '02', label: 'Design & Develop' },
            { step: '03', label: 'Launch & Get Members' },
          ].map((s, i) => (
            <div key={i} className="flex items-center gap-3">
              <span className="text-xs font-black w-6 flex-shrink-0" style={{ color: '#f97316' }}>{s.step}</span>
              <div className="flex-1 h-px bg-gray-100"></div>
              <span className="text-xs font-semibold text-gray-600">{s.label}</span>
            </div>
          ))}
        </div>
      </div>
    </>
  )
}
