'use client'
import { useEffect, useRef } from 'react'

const teamMembers = [
  {
    name: 'DURGESH KUMAR',
    photo: '/member-photos/durgesh.jpeg',
    role: 'Founder & Full Stack Developer',
    gradient: 'linear-gradient(135deg, #111827 0%, #f97316 100%)',
    email: 'itsdurgesh1oo@gmail.com',
    linkedin: 'https://www.linkedin.com/in/durgesh-k-3a85a1249/',
  },
  {
    name: 'NAMAN PUNN',
    photo: '/member-photos/naman.jpeg',
    role: 'Founder & Full Stack Developer',
    gradient: 'linear-gradient(135deg, #1f2937 0%, #ea580c 100%)',
    email: 'namanpunn3@gmail.com',
    linkedin: 'https://www.linkedin.com/in/naman-punn-279453205',
  },
  {
    name: 'NITISH KUMAR',
    photo: '/member-photos/nitish.jpg',
    role: 'Legal Advisor & HR Manager',
    gradient: 'linear-gradient(135deg, #111827 0%, #d97706 100%)',
    email: 'nitishkumarminz@gmail.com',
    linkedin: 'https://www.linkedin.com/in/nitish-kumar-minz-057854240',
  },
]

function SocialIcon({ type }: { type: string }) {
  const icons: Record<string, JSX.Element> = {
    mail: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
        <path d="M20 4H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2zm0 3.2-8 4.8-8-4.8V6l8 4.8 8-4.8v1.2z" />
      </svg>
    ),
    linkedin: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
      </svg>
    ),
  }
  return icons[type] || null
}

export default function Team() {
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
    <section id="about" ref={sectionRef} className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">

        {/* Header */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start mb-16">
          <div className="reveal">
            <div className="accent-bar"></div>
            <h2 className="text-4xl md:text-5xl font-black text-gray-900 leading-tight">
              The Team Behind<br/>
              Your Gym's <span style={{ color: '#f97316' }}>Digital Strength</span>
            </h2>
          </div>
          <div className="reveal">
            <p className="text-gray-600 leading-relaxed mt-4 lg:mt-10">
              We are fitness-web specialists who understand the hustle of running a gym. Our team combines deep web development expertise with a passion for the fitness industry — so every site we build is not just beautiful, it's built to bring in real members.
            </p>
          </div>
        </div>

        {/* Team grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {teamMembers.map((member, i) => (
            <div key={i}
              className="reveal team-card group cursor-pointer"
              style={{ transitionDelay: `${i * 100}ms` }}>
              <div
                className="relative rounded-2xl overflow-hidden min-h-[180px]"
                style={{ background: member.gradient }}>
                <div className="flex items-end">
                  {/* Text — left side, never overlaps photo */}
                  <div className="relative z-10 flex-1 p-7 pr-4" style={{ maxWidth: 'calc(100% - 128px)' }}>
                    <h3 className="text-xl font-black text-white tracking-wide mb-1 break-words">{member.name}</h3>
                    <p className="text-white/70 text-sm mb-4 break-words">{member.role}</p>
                    <div className="flex gap-3 flex-wrap">
                      <a href={`mailto:${member.email}`} className="social-icon" aria-label="Email">
                        <SocialIcon type="mail" />
                      </a>
                      <a href={member.linkedin} target="_blank" rel="noopener noreferrer" className="social-icon" aria-label="LinkedIn">
                        <SocialIcon type="linkedin" />
                      </a>
                    </div>
                  </div>
                  {/* Photo — fixed right */}
                  <div className="flex-shrink-0 self-end" style={{ width: '128px' }}>
                    <div className="w-32 h-44 overflow-hidden rounded-t-full border-2 border-white/20">
                      <img src={member.photo} alt={member.name} width={128} height={176} className="w-full h-full object-cover" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Why choose us bar */}
        <div className="mt-16 reveal">
          <div className="rounded-2xl p-8 border border-orange-100"
            style={{ background: 'linear-gradient(135deg, #fff7ed 0%, #fff 100%)' }}>
            <p className="text-center font-bold text-sm tracking-widest uppercase mb-8" style={{ color: '#f97316' }}>
              Why Gym Owners Choose WebCraft
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 text-center">
              {[
                { icon: '🏋️', title: 'Fitness-First Design', desc: 'Every layout decision is driven by what converts gym visitors into members.' },
                { icon: '🔍', title: 'Local SEO Built-In', desc: 'We optimise for "gym near me" searches so members find you first, not your competition.' },
                { icon: '⚡', title: 'Fast Turnaround', desc: 'Your gym website goes live in days, not months — without compromising on quality.' },
              ].map((item, i) => (
                <div key={i} className="flex flex-col items-center gap-3">
                  <div className="w-14 h-14 rounded-2xl flex items-center justify-center text-2xl"
                    style={{ background: 'rgba(249,115,22,0.1)' }}>
                    {item.icon}
                  </div>
                  <h4 className="font-bold text-gray-900 text-sm">{item.title}</h4>
                  <p className="text-gray-500 text-xs leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

      </div>
    </section>
  )
}
