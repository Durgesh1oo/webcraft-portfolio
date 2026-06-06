'use client'

const testimonials = [
  {
    name: 'Priyanshu Nagar',
    text: 'WebCraft transformed my startup\'s online presence with their exceptional web development skills. The team was responsive, creative, and professional. Highly recommend their services to any growing business!',
  },
  {
    name: 'Manav Tandon',
    text: 'Exceptional graphic design services! The team is incredibly talented and responsive, producing visually striking and impactful designs. Their creativity and attention to detail exceeded our expectations. Highly recommended!',
  },
  {
    name: 'Yash Rajwaniya',
    text: 'Fantastic experience working with this team! Their nature-inspired designs are breathtaking, and they excel in client communication. They are responsive, attentive, and committed to delivering exceptional results.',
  },
  {
    name: 'Varun Singh',
    text: "WebCraft's creativity and execution are unparalleled. They brought our vision to life flawlessly with their web development services. The team's innovative approach and dedication are superb. Highly satisfied!",
  },
  {
    name: 'Kshitiz Kaushik',
    text: "Top-notch development from WebCraft! Their expertise significantly boosted our website's performance and aesthetics. The team's technical proficiency and attention to detail are truly impressive. Outstanding experience!",
  },
  {
    name: 'Santosh Kumar',
    text: 'Efficient, reliable, and professional web development services by WebCraft. They made our website shine with their expert skills. The team\'s commitment to quality is evident in every detail. Best service around!',
  },
  {
    name: 'Anvii',
    text: 'Excellent client service and impressive designs! The team is attentive, responsive, and truly captures the beauty in their work. Their dedication to client satisfaction is commendable. Highly recommended!',
  },
  {
    name: 'Kapil Dave',
    text: 'Outstanding service! They created a beautiful graphic design tailored to our needs. Professional, timely, and attentive to detail. Highly impressed with their creativity and technical expertise. Definitely recommend them!',
  },
]

export default function Testimonials() {
  const row1 = testimonials.slice(0, 4)
  const row2 = testimonials.slice(4, 8)

  return (
    /* id="testimonials" so "Reviews" button in Hero scrolls here */
    <section id="testimonials" className="py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-14">
          <h2 className="text-3xl md:text-4xl font-black text-gray-900">
            Hear From Our <span className="text-primary">Clients</span>
          </h2>
          <p className="text-gray-500 mt-4 max-w-2xl mx-auto">
            Discover what our satisfied clients have to say about their experiences with us.
          </p>
        </div>
      </div>

      {/* Scrolling row 1 — left to right */}
      <div className="mb-4 overflow-hidden">
        <div className="marquee-track">
          {[...row1, ...row1].map((t, i) => (
            <TestimonialCard key={i} {...t} />
          ))}
        </div>
      </div>

      {/* Scrolling row 2 — right to left */}
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

function TestimonialCard({ name, text }: { name: string; text: string }) {
  return (
    <div className="flex-shrink-0 w-80 bg-white border border-gray-100 rounded-2xl p-6 mx-3 shadow-sm">
      <p className="text-gray-600 text-sm leading-relaxed mb-5 line-clamp-4">{text}</p>
      <div className="flex items-center gap-3">
        <div className="w-10 h-10 rounded-full bg-gradient-to-br from-blue-400 to-purple-500 flex items-center justify-center text-white text-sm font-bold flex-shrink-0">
          {name.charAt(0)}
        </div>
        <div>
          <p className="font-semibold text-gray-800 text-sm">{name}</p>
          <div className="flex gap-0.5 mt-0.5">
            {[...Array(5)].map((_, i) => (
              <span key={i} className="text-yellow-400 text-xs">★</span>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
