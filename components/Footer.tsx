import Link from 'next/link'

export default function Footer() {
  return (
    <footer style={{ background: '#0f0f0f' }} className="text-white">
      {/* Wave top */}
      <div className="w-full overflow-hidden leading-none">
        <svg viewBox="0 0 1440 60" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full">
          <path d="M0 30 Q180 0 360 30 Q540 60 720 30 Q900 0 1080 30 Q1260 60 1440 30 L1440 60 L0 60 Z" fill="#0f0f0f"/>
        </svg>
      </div>

      {/* Contact strip */}
      <div id="footer-contact" className="border-b border-white/10">
        <div className="max-w-7xl mx-auto px-6 py-8 grid grid-cols-1 md:grid-cols-3 gap-6">
          <div>
            <p className="text-xs font-bold uppercase tracking-widest mb-2" style={{ color: '#f97316' }}>📞 Call us</p>
            <p className="text-sm text-gray-300">+91 9354855980 &nbsp;|&nbsp; +91 9625631185</p>
          </div>
          <div>
            <p className="text-xs font-bold uppercase tracking-widest mb-2" style={{ color: '#f97316' }}>✉️ Mail us</p>
            <p className="text-sm text-gray-300">itsdurgesh1oo@gmail.com</p>
          </div>
          <div>
            <p className="text-xs font-bold uppercase tracking-widest mb-2" style={{ color: '#f97316' }}>💬 WhatsApp</p>
            <a href="https://wa.me/919354855980" target="_blank" rel="noopener noreferrer"
              className="text-sm text-gray-300 hover:text-orange-400 transition-colors">
              Chat with us for a free consultation →
            </a>
          </div>
        </div>
      </div>

      {/* Main */}
      <div className="max-w-7xl mx-auto px-6 py-14">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-1.5 mb-5">
              <svg width="28" height="28" viewBox="0 0 24 24" fill="none">
                <rect x="1" y="10" width="3" height="4" rx="1" fill="#f97316"/>
                <rect x="4" y="8" width="2" height="8" rx="1" fill="#f97316"/>
                <rect x="6" y="11" width="12" height="2" rx="1" fill="white"/>
                <rect x="18" y="8" width="2" height="8" rx="1" fill="#f97316"/>
                <rect x="20" y="10" width="3" height="4" rx="1" fill="#f97316"/>
              </svg>
              <span className="text-2xl font-black tracking-tighter text-white">WEB</span>
              <span className="text-2xl font-black tracking-tighter" style={{ color: '#f97316' }}>CRAFT</span>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed mb-6">
              We build powerful websites exclusively for gyms and fitness businesses. From local SEO to bold design — we help gym owners attract more members and grow online.
            </p>
            <div className="flex gap-3">
              <a href="https://wa.me/919354855980" target="_blank" rel="noopener noreferrer"
                className="w-9 h-9 rounded-full border border-white/20 flex items-center justify-center text-gray-400 hover:border-green-500 hover:text-green-400 transition-all text-sm">
                💬
              </a>
              <a href="mailto:itsdurgesh1oo@gmail.com"
                className="w-9 h-9 rounded-full border border-white/20 flex items-center justify-center text-gray-400 hover:border-orange-500 hover:text-orange-400 transition-all text-sm">
                ✉️
              </a>
            </div>
          </div>

          {/* Links */}
          <div>
            <h4 className="text-white font-bold mb-4">Quick Links</h4>
            <ul className="space-y-2.5">
              <li><a href="#home" className="text-gray-400 text-sm hover:text-orange-400 transition-colors">Home</a></li>
              <li><a href="#about" className="text-gray-400 text-sm hover:text-orange-400 transition-colors">About Us</a></li>
              <li><a href="#service-cards" className="text-gray-400 text-sm hover:text-orange-400 transition-colors">Our Services</a></li>
              <li><a href="#works" className="text-gray-400 text-sm hover:text-orange-400 transition-colors">Our Work</a></li>
              <li><a href="#testimonials" className="text-gray-400 text-sm hover:text-orange-400 transition-colors">Client Reviews</a></li>
              <li><a href="#footer-contact" className="text-gray-400 text-sm hover:text-orange-400 transition-colors">Contact Us</a></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-white font-bold mb-4">Gym Services</h4>
            <ul className="space-y-2.5">
              {[
                'Gym Website Development',
                'Fitness UI/UX Design',
                'Local SEO for Gyms',
                'Gym Logo & Branding',
                'Membership Landing Pages',
                'Promo Video Editing',
              ].map(svc => (
                <li key={svc}>
                  <a href="#service-cards" className="text-gray-400 text-sm hover:text-orange-400 transition-colors">{svc}</a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom */}
      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-6 py-5 flex flex-col md:flex-row items-center justify-between gap-3">
          <p className="text-gray-400 text-xs">
            Copyright © 2026, All Rights Reserved —{' '}
            <a href="#" className="hover:underline" style={{ color: '#f97316' }}>WebCraft</a>
            {' '}· Built for the Fitness Industry 💪
          </p>
          <div className="flex gap-6">
            <a href="#home" className="text-gray-400 text-xs hover:text-orange-400 transition-colors">Home</a>
            <a href="#footer-contact" className="text-gray-400 text-xs hover:text-orange-400 transition-colors">Contact</a>
          </div>
        </div>
      </div>
    </footer>
  )
}
