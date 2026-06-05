'use client'
import { useEffect, useRef } from 'react'

const services = [
  {
    // icon: '💻',
    image: '/member-photos/webdev.jpg',
    title: 'Web Development',
    desc: 'Building responsive websites with custom designs, secure hosting, and efficient domain management for businesses and startups.',
    color: 'from-blue-100 to-blue-50',
  },
  {
    // icon: '🎨',
    image: '/member-photos/uiux.jpg',
    title: 'UI/UX Design',
    desc: 'Designing visually appealing, user-centered interfaces for seamless navigation, ensuring optimal user engagement and satisfaction.',
    color: 'from-purple-100 to-purple-50',
  },
  {
    // icon: '🖌️',
    image: '/member-photos/webdes.jpg',
    title: 'Web Design',
    desc: 'Crafting visually stunning websites with intuitive navigation, ensuring a seamless user experience across all devices.',
    color: 'from-cyan-100 to-cyan-50',
  },
  {
    // icon: '🌐',
    image: '/member-photos/hosting.jpg',
    title: 'Hosting Services',
    desc: 'Providing reliable hosting solutions with high uptime, security features, and scalable options for business websites.',
    color: 'from-green-100 to-green-50',
  },
  {
    // icon: '🛍️',
    image: '/member-photos/wordpres.png',
    title: 'WordPress & Shopify',
    desc: 'Customizing WordPress, Wix, and Shopify platforms for unique, user-friendly websites tailored to your brand.',
    color: 'from-orange-100 to-orange-50',
  },
  {
    // icon: '🔍',
    image: '/member-photos/seo.jpg',
    title: 'SEO Optimization',
    desc: 'Optimizing website content and structure to improve visibility on search engines, driving organic traffic growth.',
    color: 'from-yellow-100 to-yellow-50',
  },
  {
    // icon: '✏️',
    image: '/member-photos/graphic.jpg',
    title: 'Graphic Designing',
    desc: 'Creating impactful visual identities, including logos and graphics, that resonate with your brand\'s message.',
    color: 'from-pink-100 to-pink-50',
  },
  {
    // icon: '🎬',
    image: '/member-photos/video.jpg',
    title: 'Video Editing',
    desc: 'Crafting professional videos with seamless edits, engaging effects, and captivating storytelling for impactful communication.',
    color: 'from-red-100 to-red-50',
  },
]

export default function Services() {
  const sectionRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => entries.forEach(entry => { if (entry.isIntersecting) entry.target.classList.add('visible') }),
      { threshold: 0.1 }
    )
    sectionRef.current?.querySelectorAll('.reveal').forEach(el => observer.observe(el))
    return () => observer.disconnect()
  }, [])

  return (
    <section id="service" ref={sectionRef} className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        {/* Top: Business Solutions Hero — no "Get Started" button */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-24">
          <div className="reveal">
            <p className="text-gray-400 font-semibold text-sm mb-3 tracking-wide">Our Services</p>
            <h2 className="text-4xl md:text-5xl font-black text-gray-900 leading-tight mb-6">
              We Provide Best<br/>
              <span className="text-primary">Business</span> Solutions
            </h2>
            <p className="text-gray-500 text-base leading-relaxed mb-8 max-w-lg">
              We deliver top-notch business solutions tailored to meet your unique needs, ensuring efficiency, growth, and success. Our expert team leverages innovative strategies and technologies to drive your business forward and achieve outstanding results.
            </p>
            {/* Only "Learn More" button, no "Get Started" */}
            <a href="#works" className="inline-flex items-center gap-2 px-7 py-3 rounded-full border-2 border-gray-200 text-gray-700 font-semibold hover:border-primary hover:text-primary transition-all duration-200">
              Learn More
            </a>
          </div>
          <div className="reveal flex justify-center">
            <div className="w-full max-w-md h-72 bg-gradient-to-br from-blue-50 to-indigo-100 rounded-2xl flex items-center justify-center border border-blue-100 shadow-sm">
              <div className="text-center text-blue-400">
                {/* <div className="text-6xl mb-3">⚙️</div> */}
                {/* <p className="text-sm font-medium opacity-70">Business Solutions Illustration</p> */}
                {/* <p className="text-xs opacity-50 mt-1">  */}
                  <img
                        src='/member-photos/bsnssol.png'
                        alt="buisness solutions illustration"
                        width={128}
                        height={170}
                        className="w-full h-full object-cover"
                      />
                      {/* </p> */}
              </div>
            </div>
          </div>
        </div>

        {/* ALL SERVICES — id="service-cards" for navbar/hero anchor */}
        <div id="service-cards" className="text-center mb-14 reveal">
          <p className="text-primary font-bold text-sm tracking-widest uppercase mb-3">ALL SERVICES</p>
          <h2 className="text-3xl md:text-4xl font-black text-gray-900">
            Complete Business <span className="text-primary">Solutions</span> Delivered
          </h2>
          <p className="text-gray-500 mt-4 max-w-2xl mx-auto text-base">
            We offer comprehensive business solutions, expertly designed to enhance efficiency, drive growth, and achieve exceptional results for your company.
          </p>
        </div>

        {/* Service cards grid — no "Learn More" links */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((svc, i) => (
            <div key={i}
              className="service-card reveal bg-white border border-gray-100 rounded-2xl p-6 shadow-sm hover:shadow-lg cursor-pointer group"
              style={{ transitionDelay: `${i * 60}ms` }}>
              <div className={`w-full h-40 rounded-xl bg-gradient-to-br ${svc.color} flex items-center justify-center mb-5 group-hover:scale-105 transition-transform duration-300`}>
                <img src={svc.image} alt={svc.title} className="w-full h-full object-cover" />
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">{svc.title}</h3>
              <p className="text-gray-500 text-sm leading-relaxed">{svc.desc}</p>
            </div>
          ))}
        </div>

        {/* Stats bar */}
        <div className="mt-20 bg-gray-50 rounded-2xl py-10 px-8 grid grid-cols-2 md:grid-cols-3 gap-8 reveal">
          {[
            { num: '15', label: 'Customers' },
            { num: '2+', label: 'Years Experience' },
            // { num: '79', label: 'E-Commerce Sites' },
            { num: '3', label: 'Team Members' },
          ].map((stat, i) => (
            <div key={i} className="text-center">
              <div className="text-4xl md:text-5xl font-black text-primary leading-none">{stat.num}</div>
              <div className="text-gray-500 text-sm mt-2 font-medium">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
