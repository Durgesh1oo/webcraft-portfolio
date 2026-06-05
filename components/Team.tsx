'use client'
import { useEffect, useRef } from 'react'

const teamMembers = [
  {
    name: 'DURGESH KUMAR',
    photo: '/member-photos/durgesh.jpeg',
    role: 'Founder & Full Stack Developer',
    gradient: 'linear-gradient(135deg, #2563EB 0%, #7c3aed 100%)',
    email: 'itsdurgesh1oo@gmail.com',
    linkedin: 'https://www.linkedin.com/in/durgesh-k-3a85a1249/',
    github: '',
  },
  {
    name: 'NAMAN PUNN',
    photo: '/member-photos/naman.jpeg',
    role: 'Founder & Full Stack Developer',
    gradient: 'linear-gradient(135deg, #db2777 0%, #7c3aed 100%)',
    email: 'namanpunn3@gmail.com',
    linkedin: 'https://www.linkedin.com/in/naman-punn-279453205',
    github: '',
  },
  {
    name: 'NITISH KUMAR',
    photo: '/member-photos/nitish.jpeg',
    role: 'Legal Advisor & HR Manager',
    gradient: 'linear-gradient(135deg, #1d4ed8 0%, #4f46e5 100%)',
    email: 'nitishkumarminz@gmail.com',
    linkedin: 'https://www.linkedin.com/in/nitish-kumar-minz-057854240?utm_source=share_via&utm_content=profile&utm_medium=member_ios',
    github: '',
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

    github: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
      </svg>
    ),
  }

  return icons[type] || null
}

export default function Team() {
  const sectionRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) =>
        entries.forEach((e) => {
          if (e.isIntersecting) e.target.classList.add('visible')
        }),
      { threshold: 0.1 }
    )

    sectionRef.current
      ?.querySelectorAll('.reveal')
      .forEach((el) => observer.observe(el))

    return () => observer.disconnect()
  }, [])

  return (
    <section id="about" ref={sectionRef} className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start mb-16">
          <div className="reveal">
            <p className="text-gray-400 font-semibold text-sm mb-3 tracking-wide">
              Our Team
            </p>

            <h2 className="text-4xl md:text-5xl font-black text-gray-900 leading-tight">
              Let's Meet Our
              <br />
              <span className="text-primary">Web Craft</span> Innovators
            </h2>
          </div>

          <div className="reveal">
            <p className="text-gray-600 leading-relaxed mt-4 lg:mt-8">
              Our talented WebCraft team is a group of innovative thinkers and
              skilled professionals dedicated to transforming your ideas into
              reality. With expertise in Web Development, Graphic Design, and
              User Interface Designing & User Experience Research, we ensure
              exceptional results for every project we undertake.
            </p>
          </div>
        </div>

        {/* Team Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {teamMembers.map((member, i) => (
            <div
              key={i}
              className="reveal team-card group cursor-pointer"
              style={{ transitionDelay: `${i * 100}ms` }}
            >
              <div
                className="relative rounded-2xl overflow-hidden p-7 flex items-end min-h-[180px]"
                style={{ background: member.gradient }}
              >
                <div className="relative z-10 flex-1">
                  <h3 className="text-xl font-black text-white tracking-wide mb-1">
                    {member.name}
                  </h3>

                  <p className="text-white/70 text-sm mb-4">{member.role}</p>

                  {/* Social Links */}
                  <div className="flex gap-3">
                    <a
                      href={`mailto:${member.email}`}
                      className="social-icon"
                      aria-label="Email"
                    >
                      <SocialIcon type="mail" />
                    </a>

                    <a
                      href={member.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="social-icon"
                      aria-label="LinkedIn"
                    >
                      <SocialIcon type="linkedin" />
                    </a>

                    <a
                      href={member.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="social-icon"
                      aria-label="GitHub"
                    >
                      <SocialIcon type="github" />
                    </a>
                  </div>
                </div>

                {/* Photo Placeholder */}
                {/* <div className="absolute bottom-0 right-6 w-36 h-48 flex items-end justify-center">
                  <div
                    className="w-32 h-44 bg-white/10 rounded-t-full flex items-center justify-center border-2 border-white/20"
                    style={{ backdropFilter: 'blur(4px)' }}
                  >
                    <div className="text-center text-white/40">
                      <div className="text-4xl">👤</div>
                      <p className="text-xs mt-2 px-2">
                        Photo
                        <br />
                        Placeholder
                      </p>
                    </div>
                  </div>
                </div> */}
                <div className="absolute bottom-0 right-6 w-36 h-48 flex items-end justify-center">
                    <div
                      className="w-32 h-44 overflow-hidden rounded-t-full border-2 border-white/20"
                      style={{ backdropFilter: 'blur(4px)' }}
                    >
                      <img
                        src={member.photo}
                        alt={member.name}
                        width={128}
                        height={176}
                        className="w-full h-full object-cover"
                      />
                    </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}