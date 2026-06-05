'use client'
import { useEffect, useRef } from 'react'

const plans = [
  {
    name: 'Essential',
    desc: 'Ideal for personal blogs and small business websites.',
    price: '₹45',
    features: [
      '5 GB Storage',
      '5 Professional Business Emails',
      'Bandwidth: 50 GB/month',
      'SSL Certificate Included',
      'Basic Customer Care Support',
    ],
    popular: false,
  },
  {
    name: 'Professional',
    desc: 'Perfect for expanding businesses and high-traffic websites.',
    price: '₹58',
    features: [
      '10 GB Storage',
      '10 Professional Business Emails',
      'Bandwidth: 200 GB/month',
      'SSL Certificate Included',
      'Priority Customer Care Support',
    ],
    popular: true,
  },
  {
    name: 'Ultimate',
    desc: 'Ideal for large E-Commerce requiring maximum performance.',
    price: '₹89',
    features: [
      '25 GB Storage',
      '25 Professional Business Emails',
      'Bandwidth: Unlimited',
      'Enhanced SSL Security',
      '24/7 Premium Customer Care Support',
    ],
    popular: false,
  },
]

// Replaced with relevant tech/work keywords
const techKeywords = [
  'Next.js', 'React', 'Tailwind CSS', 'Node.js', 'MongoDB', 'Shopify',
  'WordPress', 'UI/UX', 'SEO', 'Figma', 'TypeScript', 'E-Commerce',
]

export default function Pricing() {
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
    <section ref={sectionRef} className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">

        {/* Tech keywords strip — replaces client logos */}
        <div className="overflow-hidden mb-20 reveal">
          <div className="flex flex-wrap gap-3 justify-center">
            {techKeywords.map((kw, i) => (
              <span key={i}
                className="px-4 py-2 rounded-full border border-gray-200 text-gray-500 text-sm font-semibold bg-gray-50 hover:border-primary hover:text-primary transition-colors duration-200">
                {kw}
              </span>
            ))}
          </div>
        </div>

        {/* Section header */}
        <div className="text-center mb-14 reveal">
          <h2 className="text-3xl md:text-4xl font-black text-gray-900">
            Discover Our <span className="text-primary">Web Services</span> Plans and Pricing
          </h2>
          <p className="text-gray-500 mt-4 max-w-2xl mx-auto">
            Explore our comprehensive web services plans and competitive pricing for seamless online success.
          </p>
        </div>

        {/* Plans — no newsletter below */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {plans.map((plan, i) => (
            <div key={i}
              className={`reveal relative rounded-2xl p-8 border-2 transition-all duration-300 hover:shadow-xl hover:-translate-y-1 ${
                plan.popular
                  ? 'border-primary shadow-lg shadow-blue-100'
                  : 'border-gray-100 shadow-sm'
              }`}
              style={{ transitionDelay: `${i * 100}ms` }}>

              {plan.popular && (
                <div className="absolute -top-3.5 left-1/2 -translate-x-1/2">
                  <span className="bg-primary text-white text-xs font-bold px-4 py-1.5 rounded-full">Popular</span>
                </div>
              )}

              <h3 className="text-xl font-black text-gray-900 text-center mb-2">{plan.name}</h3>
              <p className="text-gray-500 text-sm text-center mb-5">{plan.desc}</p>

              <div className="text-center mb-6">
                <span className="text-5xl font-black text-gray-900">{plan.price}</span>
                <span className="text-gray-400 text-sm ml-1">/month</span>
              </div>

              <ul className="space-y-3 mb-8">
                {plan.features.map((feat, j) => (
                  <li key={j} className="flex items-center gap-3 text-sm text-gray-600">
                    <span className="text-green-500 font-bold text-base flex-shrink-0">✓</span>
                    <span className={feat.includes('Unlimited') || feat.includes('200') ? 'font-semibold text-gray-800' : ''}>
                      {feat}
                    </span>
                  </li>
                ))}
              </ul>

              {/* <a href="#footer-contact"
                className={`block text-center py-3.5 rounded-xl font-semibold text-sm transition-all duration-200 ${
                  plan.popular
                    ? 'bg-primary text-white hover:bg-blue-700 shadow-md'
                    : 'bg-gray-100 text-gray-700 hover:bg-primary hover:text-white'
                }`}>
                Get started
              </a> */}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
