'use client'

const testimonials = [
  {
    name: 'Rohit Verma',
    gym: 'IronCore Fitness, Noida',
    text: 'WebCraft built us a site that actually brings in members. Within 3 weeks of launch we started getting direct calls from Google. Exactly what our gym needed — professional, fast, and built for results.',
  },
  {
    name: 'Ankit Sharma',
    gym: 'PowerHouse Gym, Delhi',
    text: 'They completely understood the fitness industry. Our new website has a class schedule, trainer pages, and membership pricing that looks stunning on mobile. Membership inquiries doubled!',
  },
  {
    name: 'Priya Kapoor',
    gym: 'FitZone Women\'s Fitness, Gurgaon',
    text: 'Exceptional work. The team captured our gym\'s energy in the design. We now rank on Google Maps for "women\'s gym near me" — something we struggled with for years. Highly recommend WebCraft.',
  },
  {
    name: 'Suresh Bhatia',
    gym: 'TitanFit CrossFit Studio',
    text: 'Our old website was embarrassing. WebCraft built us something we are genuinely proud to show clients. The booking integration and membership page alone paid for the website in the first month.',
  },
  {
    name: 'Karan Malhotra',
    gym: 'Elite Strength Academy, Mumbai',
    text: 'WebCraft are specialists — they know what gym owners need. The SEO work they did means we get organic leads every week without spending on ads. Best investment we made for our fitness centre.',
  },
  {
    name: 'Deepak Nair',
    gym: 'GymPro Fitness, Bangalore',
    text: 'Professional, quick, and gym-savvy. They delivered our full website in 10 days with trainer profiles, gallery, and a WhatsApp inquiry button. Our walk-ins increased by 40% in two months.',
  },
  {
    name: 'Yash Rajwaniya',
    gym: 'PeakForm Athletics',
    text: 'Fantastic experience. The designs are energetic, on-brand, and the mobile experience is flawless. They really know how to make a gym look world-class online. Clients always compliment our site.',
  },
  {
    name: 'Varun Singh',
    gym: 'KnightX Fitness Gym, Delhi',
    text: "WebCraft's creativity and execution are unparalleled. They built our entire digital presence — website, SEO, branding. The team's dedication and attention to gym-specific detail is truly impressive.",
  },
]

export default function Testimonials() {
  const row1 = testimonials.slice(0, 4)
  const row2 = testimonials.slice(4, 8)

  return (
    <section id="testimonials" className="py-24 overflow-hidden" style={{ background: '#0f0f0f' }}>
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-14">
          <div className="flex justify-center mb-2">
            <div className="accent-bar"></div>
          </div>
          <h2 className="text-3xl md:text-4xl font-black text-white">
            Gym Owners Love <span style={{ color: '#f97316' }}>What We Build</span>
          </h2>
          <p className="text-gray-400 mt-4 max-w-2xl mx-auto text-sm">
            Real feedback from fitness business owners who trusted WebCraft to take their gym digital.
          </p>
        </div>
      </div>

      {/* Row 1 — left to right */}
      <div className="mb-4 overflow-hidden">
        <div className="marquee-track">
          {[...row1, ...row1].map((t, i) => (
            <TestimonialCard key={i} {...t} />
          ))}
        </div>
      </div>

      {/* Row 2 — right to left */}
      <div className="overflow-hidden">
        <div className="marquee-track" style={{ animationDirection: 'reverse' }}>
          {[...row2, ...row2].map((t, i) => (
            <TestimonialCard key={i} {...t} />
          ))}
        </div>
      </div>
    </section>
  )
}

function TestimonialCard({ name, gym, text }: { name: string; gym: string; text: string }) {
  return (
    <div className="flex-shrink-0 w-80 rounded-2xl p-6 mx-3 border"
      style={{ background: '#1a1a1a', borderColor: '#2a2a2a' }}>
      {/* Stars */}
      <div className="flex gap-0.5 mb-3">
        {[...Array(5)].map((_, i) => (
          <span key={i} className="text-sm" style={{ color: '#f97316' }}>★</span>
        ))}
      </div>
      <p className="text-gray-300 text-sm leading-relaxed mb-5 line-clamp-4">{text}</p>
      <div className="flex items-center gap-3">
        <div className="w-10 h-10 rounded-full flex items-center justify-center text-white text-sm font-bold flex-shrink-0"
          style={{ background: 'linear-gradient(135deg, #f97316, #ea580c)' }}>
          {name.charAt(0)}
        </div>
        <div>
          <p className="font-bold text-white text-sm">{name}</p>
          <p className="text-xs" style={{ color: '#f97316' }}>{gym}</p>
        </div>
      </div>
    </div>
  )
}
