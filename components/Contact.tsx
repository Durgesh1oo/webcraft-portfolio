'use client'
import { useEffect, useRef, useState } from 'react'

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' })
  const [submitted, setSubmitted] = useState(false)
  const sectionRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('visible') }),
      { threshold: 0.1 }
    )
    sectionRef.current?.querySelectorAll('.reveal').forEach(el => observer.observe(el))
    return () => observer.disconnect()
  }, [])

  const handleSubmit = (e: React.MouseEvent) => {
    e.preventDefault()
    if (form.name && form.email && form.message) {
      setSubmitted(true)
      setTimeout(() => setSubmitted(false), 4000)
      setForm({ name: '', email: '', message: '' })
    }
  }

  return (
    <section id="contact" className="py-24 bg-white" ref={sectionRef}>
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Form */}
          <div className="reveal">
            <p className="text-primary font-semibold text-sm mb-2">Get in touch</p>
            <h2 className="text-3xl md:text-4xl font-black text-gray-900 mb-2">
              Let's Chat 👋 Consultation Is Free!
            </h2>
            <p className="text-gray-500 text-sm mb-8">
              Have questions or feedback? We're here to help. Send us a message, and we'll respond within 2 hours
            </p>

            <div className="space-y-5">
              <div>
                <label className="block text-gray-700 font-medium text-sm mb-1.5">Name</label>
                <input
                  type="text"
                  placeholder="Name"
                  value={form.name}
                  onChange={e => setForm({ ...form, name: e.target.value })}
                  className="w-full px-4 py-3.5 rounded-xl bg-gray-50 border border-gray-200 outline-none focus:border-primary focus:ring-2 focus:ring-primary/10 transition-all text-sm placeholder-gray-400"
                />
              </div>
              <div>
                <label className="block text-gray-700 font-medium text-sm mb-1.5">Email</label>
                <input
                  type="email"
                  placeholder="Email"
                  value={form.email}
                  onChange={e => setForm({ ...form, email: e.target.value })}
                  className="w-full px-4 py-3.5 rounded-xl bg-gray-50 border border-gray-200 outline-none focus:border-primary focus:ring-2 focus:ring-primary/10 transition-all text-sm placeholder-gray-400"
                />
              </div>
              <div>
                <label className="block text-gray-700 font-medium text-sm mb-1.5">Message</label>
                <textarea
                  placeholder="Message"
                  rows={5}
                  value={form.message}
                  onChange={e => setForm({ ...form, message: e.target.value })}
                  className="w-full px-4 py-3.5 rounded-xl bg-gray-50 border border-gray-200 outline-none focus:border-primary focus:ring-2 focus:ring-primary/10 transition-all text-sm placeholder-gray-400 resize-none"
                />
              </div>
              <button
                onClick={handleSubmit}
                className="btn-primary w-full justify-center py-4 rounded-xl text-base">
                {submitted ? '✓ Message Sent!' : 'Submit'}
              </button>
            </div>
          </div>

          {/* Illustration */}
          <div className="reveal flex justify-center">
            <div className="w-full max-w-md h-96 bg-gradient-to-br from-blue-50 to-indigo-50 rounded-3xl flex items-center justify-center relative overflow-hidden border border-blue-100">
              {/* Decorative circles */}
              <div className="absolute -top-10 -right-10 w-40 h-40 bg-orange-400/20 rounded-full"></div>
              <div className="absolute -bottom-5 -left-5 w-32 h-32 bg-blue-400/20 rounded-full"></div>
              <div className="text-center text-blue-400 relative z-10">
                <div className="text-7xl mb-4 animate-float">📨</div>
                <p className="text-sm font-medium opacity-70">Contact Illustration</p>
                <p className="text-xs opacity-50 mt-1">Replace with actual image</p>
                <div className="mt-6 space-y-2">
                  <div className="bg-white/80 rounded-xl px-5 py-3 inline-flex items-center gap-2 shadow-sm text-sm text-gray-700">
                    <span className="text-orange-400 text-xl">🔔</span>
                    <span className="font-medium">We reply in 2 hours</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
