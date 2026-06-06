'use client'
import { useEffect, useRef } from 'react'

const services = [
  {
    image: '/member-photos/gym_web.jpeg',
    emoji_bg: 'from-orange-100 to-orange-50',
    title: 'Gym Website Development',
    desc: 'High-performance, mobile-first websites tailored for fitness centers — membership pages, trainer bios, class schedules, and online booking built in.',
  },
  {
    image: '/member-photos/uiux.avif',
    emoji_bg: 'from-red-100 to-red-50',
    title: 'Fitness Brand UI/UX Design',
    desc: 'Bold, energetic interface design that mirrors your gym\'s identity. Every pixel crafted to inspire action and drive membership sign-ups.',
  },
  {
    image: '/member-photos/logo.jpeg',
    emoji_bg: 'from-yellow-100 to-yellow-50',
    title: 'Gym Logo & Visual Identity',
    desc: 'Powerful logos, brand kits, and visual systems that communicate strength, discipline, and professionalism — making your gym unforgettable.',
  },
  {
    image: '/member-photos/hosting.jpeg',
    emoji_bg: 'from-amber-100 to-amber-50',
    title: 'Speed & Hosting Solutions',
    desc: 'Lightning-fast, secure hosting with 99.9% uptime. Your gym website stays online 24/7 so prospects can find you any time, any day.',
  },
  {
    image: '/member-photos/mobilefirst.jpeg',
    emoji_bg: 'from-orange-100 to-orange-50',
    title: 'Mobile-First Fitness Pages',
    desc: 'Fully responsive across all devices. 80% of gym visitors search on mobile — we make sure your site converts them on every screen size.',
  },
  {
    image: '/member-photos/seo.jpeg',
    emoji_bg: 'from-red-100 to-red-50',
    title: 'Local SEO for Gyms',
    desc: 'Rank #1 when locals search "gym near me." We optimize every page so your fitness center dominates Google Maps and local search results.',
  },
  {
    image: '/member-photos/fitnessgraphic.jpeg',
    emoji_bg: 'from-yellow-100 to-yellow-50',
    title: 'Fitness Graphic Design',
    desc: 'Social media graphics, promotional banners, class posters, and marketing materials that pack a punch and grow your community online.',
  },
  {
    image: '/member-photos/video.jpeg',
    emoji_bg: 'from-amber-100 to-amber-50',
    title: 'Promo Video Editing',
    desc: 'Cinematic gym highlight reels, trainer intro videos, and transformation stories edited to pump up your brand and attract new members.',
  },
]

const stats = [
  { num: '15+', label: 'Gym Websites Built' },
  { num: '2+', label: 'Years in Fitness Web' },
  { num: '3', label: 'Expert Team Members' },
]

export default function Services() {
  const sectionRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('visible') }),
      { threshold: 0.1 }
    )
    sectionRef.current?.querySelectorAll('.reveal').forEach(el => observer.observe(el))
    return () => observer.disconnect()
  }, [])

  return (
    <section id="service" ref={sectionRef} className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">

        {/* Hero intro split — desktop only */}
        <div className="hidden lg:grid grid-cols-2 gap-16 items-center mb-24">
          <div className="reveal">
            <div className="accent-bar"></div>
            <h2 className="text-4xl md:text-5xl font-black text-gray-900 leading-tight mb-6">
              We Build Websites That<br/>
              <span style={{ color: '#f97316' }}>Fill Your Gym</span> With Members
            </h2>
            <p className="text-gray-500 text-base leading-relaxed mb-8 max-w-lg">
              We exclusively serve fitness businesses. Every website we build is engineered to rank on Google, look incredible on mobile, and convert gym-curious visitors into paying members — automatically.
            </p>
            <div className="flex flex-wrap gap-3">
              <a href="#works"
                className="inline-flex items-center gap-2 px-7 py-3 rounded-full border-2 font-bold hover:border-orange-500 hover:text-orange-500 transition-all duration-200"
                style={{ borderColor: '#e5e7eb', color: '#374151' }}>
                See Our Gym Builds ↗
              </a>
              <a href="#footer-contact" className="btn-primary py-3">
                Start Your Project
              </a>
            </div>
          </div>

          <div className="reveal flex justify-center">
            <div className="w-full max-w-md h-72 rounded-2xl overflow-hidden border border-gray-100 shadow-lg relative"
              style={{ background: 'linear-gradient(135deg, #111827 0%, #1f2937 100%)' }}>
              {/* Mock browser bar */}
              <div className="flex items-center gap-1.5 px-4 py-3 bg-gray-900 border-b border-white/10">
                <div className="w-3 h-3 rounded-full bg-red-500"></div>
                <div className="w-3 h-3 rounded-full bg-yellow-400"></div>
                <div className="w-3 h-3 rounded-full bg-green-500"></div>
                <div className="flex-1 mx-4 bg-white/10 rounded-full h-5 flex items-center px-3">
                  <span className="text-white/40 text-xs">yourgymdomain.com</span>
                </div>
              </div>
              {/* Mock hero area */}
              <div className="flex flex-col items-center justify-center h-full gap-3 pb-8">
                <div className="text-6xl">🏋️‍♂️</div>
                <div className="text-center px-6">
                  <p className="text-white font-black text-lg uppercase tracking-tight">KNIGHTX FITNESS GYM</p>
                  <p className="text-orange-400 text-xs font-semibold mt-1">Premium Gym Website · Membership · Booking</p>
                </div>
                <div className="flex gap-2 mt-2">
                  <div className="px-4 py-1.5 rounded-full text-white text-xs font-bold" style={{ background: '#f97316' }}>JOIN NOW</div>
                  <div className="px-4 py-1.5 rounded-full border border-white/30 text-white text-xs font-semibold">View Plans</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* ALL SERVICES header */}
        <div id="service-cards" className="text-center mb-14 reveal">
          <div className="flex justify-center mb-3">
            <div className="accent-bar"></div>
          </div>
          <p className="font-bold text-sm tracking-widest uppercase mb-3" style={{ color: '#f97316' }}>ALL SERVICES</p>
          <h2 className="text-3xl md:text-4xl font-black text-gray-900">
            Everything Your Gym Website <span style={{ color: '#f97316' }}>Needs</span> to Win
          </h2>
          <p className="text-gray-500 mt-4 max-w-2xl mx-auto text-base">
            From bold design to local SEO, we cover every digital touchpoint that turns a gym browser into a loyal, dues-paying member.
          </p>
        </div>

        {/* Service cards — 2 cols on mobile, 4 on desktop */}
        <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6">
          {services.map((svc, i) => (
            <div key={i}
              className="service-card reveal bg-white border border-gray-100 rounded-2xl p-3 lg:p-6 shadow-sm hover:shadow-lg cursor-pointer group"
              style={{ transitionDelay: `${i * 60}ms` }}>
              {/* Image container — fixed height, overflow-hidden, no flex wrapper */}
              <div className={`w-full h-36 rounded-xl overflow-hidden bg-gradient-to-br ${svc.emoji_bg} mb-4 group-hover:scale-105 transition-transform duration-300`}>
                <img
                  src={svc.image}
                  alt={svc.title}
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="text-sm lg:text-base font-bold text-gray-900 mb-1 lg:mb-2 leading-snug">{svc.title}</h3>
              <p className="text-gray-500 text-xs lg:text-sm leading-relaxed hidden sm:block">{svc.desc}</p>
            </div>
          ))}
        </div>

        {/* Stats bar */}
        <div className="mt-20 rounded-2xl py-10 px-8 grid grid-cols-1 md:grid-cols-3 gap-8 reveal"
          style={{ background: 'linear-gradient(135deg, #111827 0%, #1f2937 100%)' }}>
          {stats.map((stat, i) => (
            <div key={i} className="text-center">
              <div className="text-5xl font-black leading-none" style={{ color: '#f97316' }}>{stat.num}</div>
              <div className="text-gray-400 text-sm mt-2 font-semibold">{stat.label}</div>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}
