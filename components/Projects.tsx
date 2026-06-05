'use client'
import { useEffect, useRef } from 'react'

const projects = [
  {
    name: 'PositiveGems',
    subtitle: "India's Number #1 Love Brand",
    url: 'https://positivegems.com',
    tag: 'E-Commerce',
    color: 'from-pink-500 to-rose-600',
    image: '/member-photos/ecom.png',
    description: 'A premium love & gift brand website with elegant design, smooth shopping experience, and tailored product showcases.',
  },
  {
    name: 'KnightX Fitness Gym',
    subtitle: 'Premium Gym & Fitness Center',
    url: 'https://knightxfitness.com',
    tag: 'Fitness',
    color: 'from-gray-900 to-gray-700',
    image: '/member-photos/gym.png',
    description: 'A bold, high-energy gym website with membership plans, trainer profiles, and class scheduling features.',
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
    <section id="works" ref={sectionRef} className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-14 reveal">
          <h2 className="text-3xl md:text-4xl font-black text-gray-900">
            Recent <span className="text-primary">Projects</span>
          </h2>
          <p className="text-gray-500 mt-4 max-w-2xl mx-auto">
            Our recent projects feature cutting-edge design, user-friendly interfaces, and tailored solutions for clients.
          </p>
        </div>

        {/* Featured Projects only — "More Projects" section removed */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, i) => (
            <a key={i}
              href={project.url}
              target="_blank"
              rel="noopener noreferrer"
              className="reveal group rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 block"
              style={{ transitionDelay: `${i * 120}ms` }}>
              {/* Project visual */}
              <div className={`relative h-64 bg-gradient-to-br ${project.color} flex items-center justify-center`}>
                <div className="absolute inset-0 opacity-10"
                  style={{ backgroundImage: 'radial-gradient(circle at 1px 1px, white 1px, transparent 0)', backgroundSize: '24px 24px' }}>
                </div>
                <div className="relative z-10 text-center text-white">
                  <img src={project.image} alt={project.name} className="w-full h-full object-cover mb-3 group-hover:scale-110 transition-transform duration-300" />
                  <span className="bg-white/20 backdrop-blur text-xs font-bold px-3 py-1 rounded-full text-white uppercase tracking-wider">
                    {project.tag}
                  </span>
                </div>
                {/* Hover overlay */}
                {/* <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <span className="bg-white text-gray-900 font-bold px-6 py-3 rounded-full flex items-center gap-2 text-sm group-hover:bg-primary group-hover:text-white transition-colors">
                    Visit Site ↗
                  </span>
                </div> */}
              </div>
              {/* Project info */}
              <div className="bg-white p-5 border border-gray-100">
                <div className="flex items-center justify-between">
                  <div>
                    <div className="flex items-center gap-2 mb-1">
                      <img src={project.image} alt={project.name} className="w-12 h-12 object-cover rounded-full" />
                      <h3 className="font-bold text-gray-900">{project.name}</h3>
                    </div>
                    <p className="text-gray-500 text-sm">{project.description}</p>
                  </div>
                  <span className="ml-4 flex-shrink-0 w-9 h-9 border border-gray-200 rounded-full flex items-center justify-center text-gray-500 group-hover:bg-primary group-hover:text-white group-hover:border-primary transition-all">
                    ↗
                  </span>
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}
