'use client'
import { useEffect, useRef } from 'react'

const projects = [
  {
    name: 'KnightX Fitness Gym',
    subtitle: 'Premium Gym & Fitness Center — Delhi',
    url: 'https://knightxfitness.com',
    tag: 'Gym Website',
    tagColor: '#f97316',
    image: '/member-photos/gym.png',
    browserBar: '#1a1a1a',
    stats: ['Membership Pages', 'Trainer Profiles', 'Class Schedule', 'Online Booking'],
    description: 'A bold, high-energy gym website with membership plans, trainer profiles, class scheduling, and a local-SEO-optimised homepage that ranks on Google.',
  },
  {
    name: 'PositiveGems',
    subtitle: "India's #1 Love & Gift Brand",
    url: 'https://positivegems.com',
    tag: 'E-Commerce',
    tagColor: '#ea580c',
    image: '/member-photos/ecom.png',
    browserBar: '#1a1a1a',
    stats: ['Product Catalogue', 'Smooth Checkout', 'Mobile-First', 'Brand Design'],
    description: 'A premium e-commerce experience with elegant product pages, seamless shopping flow, and conversion-optimised design that drives repeat purchases.',
  },
]

export default function Projects() {
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
    <section id="works" ref={sectionRef} className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">

        {/* Header */}
        <div className="text-center mb-14 reveal">
          <div className="flex justify-center mb-2">
            <div className="accent-bar"></div>
          </div>
          <h2 className="text-3xl md:text-4xl font-black text-gray-900">
            Gyms We've <span style={{ color: '#f97316' }}>Transformed</span> Online
          </h2>
          <p className="text-gray-500 mt-4 max-w-2xl mx-auto">
            Real websites we built for fitness businesses — designed to attract members, rank locally, and look powerful on any device.
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, i) => (
            <a
              key={i}
              href={project.url}
              target="_blank"
              rel="noopener noreferrer"
              className="reveal group rounded-2xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-300 block bg-white border border-gray-100"
              style={{ transitionDelay: `${i * 120}ms` }}
            >
              {/* Browser mockup wrapper */}
              <div className="relative overflow-hidden" style={{ background: '#1e1e2e' }}>
                {/* Browser chrome bar */}
                <div className="flex items-center gap-2 px-4 py-2.5" style={{ background: project.browserBar }}>
                  {/* Traffic lights */}
                  <div className="flex gap-1.5">
                    <div className="w-3 h-3 rounded-full bg-red-500 opacity-80"></div>
                    <div className="w-3 h-3 rounded-full bg-yellow-400 opacity-80"></div>
                    <div className="w-3 h-3 rounded-full bg-green-500 opacity-80"></div>
                  </div>
                  {/* URL bar */}
                  <div className="flex-1 mx-3 bg-white/10 rounded-full h-5 flex items-center px-3 gap-1.5">
                    <svg width="8" height="8" viewBox="0 0 24 24" fill="none">
                      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2z" fill="rgba(255,255,255,0.4)"/>
                    </svg>
                    <span className="text-white/40 text-xs truncate">{project.url.replace('https://', '')}</span>
                  </div>
                  {/* Tag pill */}
                  <span className="text-white text-xs font-bold px-2.5 py-0.5 rounded-full flex-shrink-0"
                    style={{ background: project.tagColor }}>
                    {project.tag}
                  </span>
                </div>

                {/* Screenshot image — full width, fills the card */}
                <div className="relative w-full overflow-hidden" style={{ height: '240px' }}>
                  <img
                    src={project.image}
                    alt={project.name}
                    className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
                  />
                  {/* Hover overlay */}
                  <div className="absolute inset-0 bg-black/55 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <span className="text-white font-bold px-6 py-3 rounded-full text-sm border-2 border-white/80 backdrop-blur-sm">
                      Visit Live Site ↗
                    </span>
                  </div>
                </div>
              </div>

              {/* Info section */}
              <div className="p-5">
                <div className="flex items-start justify-between gap-3">
                  <div className="flex-1 min-w-0">
                    <h3 className="font-black text-gray-900 text-base mb-0.5">{project.name}</h3>
                    <p className="text-gray-400 text-xs mb-3">{project.subtitle}</p>
                    <p className="text-gray-500 text-sm leading-relaxed mb-4">{project.description}</p>
                    {/* Feature pills */}
                    <div className="flex flex-wrap gap-1.5">
                      {project.stats.map((s, j) => (
                        <span key={j}
                          className="text-xs font-semibold px-2.5 py-1 rounded-full border"
                          style={{ borderColor: 'rgba(249,115,22,0.3)', color: '#ea580c', background: 'rgba(249,115,22,0.05)' }}>
                          {s}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Arrow button */}
                  <div
                    className="flex-shrink-0 w-9 h-9 border border-gray-200 rounded-full flex items-center justify-center text-gray-400 group-hover:border-orange-500 group-hover:text-white transition-all duration-200"
                    style={{}}
                    onMouseEnter={() => {}}
                  >
                    <span className="group-hover:hidden">↗</span>
                    <span
                      className="hidden group-hover:inline"
                      style={{ color: '#f97316' }}
                    >↗</span>
                  </div>
                </div>
              </div>
            </a>
          ))}
        </div>

        {/* CTA strip */}
        <div className="mt-14 reveal text-center">
          <div className="inline-block rounded-2xl px-10 py-8 border border-orange-100"
            style={{ background: 'linear-gradient(135deg, #fff7ed 0%, #ffffff 100%)' }}>
            <p className="text-gray-900 font-black text-xl mb-2">Ready to be our next success story?</p>
            <p className="text-gray-500 text-sm mb-5">Join 15+ gym owners who trusted WebCraft to build their digital presence.</p>
            <a href="#footer-contact" className="btn-primary">
              Start Your Gym Website ↗
            </a>
          </div>
        </div>

      </div>
    </section>
  )
}
