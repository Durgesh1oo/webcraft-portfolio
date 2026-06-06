import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="bg-dark text-white">
      {/* Wave top */}
      <div className="w-full overflow-hidden leading-none">
        <svg viewBox="0 0 1440 60" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full">
          <path d="M0 30 Q180 0 360 30 Q540 60 720 30 Q900 0 1080 30 Q1260 60 1440 30 L1440 60 L0 60 Z" fill="#0f172a"/>
        </svg>
      </div>

      {/* Contact anchor — navbar "Contact" and pricing "Get started" land here */}
      <div id="footer-contact" className="border-b border-white/10">
        <div className="max-w-7xl mx-auto px-6 py-8 grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* <div>
            <p className="text-gray-400 text-xs font-semibold uppercase tracking-widest mb-2">Find us</p>
            <p className="text-sm text-gray-300">9/501 West Kanti Nagar, Shahdra, Delhi - 51</p>
          </div> */}
          <div>
            <p className="text-gray-400 text-xs font-semibold uppercase tracking-widest mb-2">Call us</p>
            <p className="text-sm text-gray-300">+91 9354855980 , +91 9625631185</p>
          </div>
          <div>
            <p className="text-gray-400 text-xs font-semibold uppercase tracking-widest mb-2">Mail us</p>
            <p className="text-sm text-gray-300">itsdurgesh1oo@gmail.com , namanpunn3@gmail.com</p>
          </div>
        </div>
      </div>

      {/* Main footer */}
      <div className="max-w-7xl mx-auto px-6 py-14">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          {/* Brand */}
          <div className="md:col-span-1">
            <div className="flex items-center mb-4">
              <span className="text-2xl font-black tracking-tighter text-white">WEB</span>
              <div className="w-5 h-5 rounded-full border-2 border-primary flex items-center justify-center mx-0.5">
                <div className="w-2 h-2 bg-primary rounded-full"></div>
              </div>
              <span className="text-2xl font-black tracking-tighter text-white">CRAFT</span>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed mb-6">
              Crafting websites and graphic designs for businesses and startups. Proudly served 15 satisfied clients. Follow for our exciting startup journey.
            </p>
            {/* <p className="text-gray-400 text-xs font-semibold uppercase tracking-widest mb-3">Follow us</p>
            <div className="flex gap-3">
              {[
                { label: 'f', href: '#' },
                { label: 'in', href: '#' },
                { label: '📷', href: '#' },
              ].map((s, i) => (
                <a key={i} href={s.href} className="w-9 h-9 rounded-full border border-white/20 flex items-center justify-center text-gray-400 hover:bg-primary hover:text-white hover:border-primary transition-all duration-200 text-sm">
                  {s.label}
                </a>
              ))}
            </div> */}
          </div>

          {/* Useful Links — About → #about, Our Services → #service-cards */}
          <div className="md:col-span-2 grid grid-cols-2 gap-12">
            <div>
              <h4 className="text-white font-bold mb-4">Useful Links</h4>
              <ul className="space-y-2.5">
                <li><a href="#home" className="text-gray-400 text-sm hover:text-primary transition-colors">Home</a></li>
                <li><a href="#about" className="text-gray-400 text-sm hover:text-primary transition-colors">About</a></li>
              
              </ul>
            </div>
            <div>
              <h4 className="text-white font-bold mb-4">&nbsp;</h4>
              <ul className="space-y-2.5">
                <li><a href="#service-cards" className="text-gray-400 text-sm hover:text-primary transition-colors">Our Services</a></li>
                <li><a href="#works" className="text-gray-400 text-sm hover:text-primary transition-colors">Portfolio</a></li>
                {/* <li><a href="#about" className="text-gray-400 text-sm hover:text-primary transition-colors">About Us</a></li>
                <li><a href="#service-cards" className="text-gray-400 text-sm hover:text-primary transition-colors">Our Services</a></li>
                <li><a href="#about" className="text-gray-400 text-sm hover:text-primary transition-colors">Expert Team</a></li>
                <li><a href="#footer-contact" className="text-gray-400 text-sm hover:text-primary transition-colors">Contact Us</a></li>
                <li><a href="#testimonials" className="text-gray-400 text-sm hover:text-primary transition-colors">Client Reviews</a></li> */}
              </ul>
            </div>
          </div>

          {/* Subscribe */}
          {/* <div>
            <h4 className="text-white font-bold mb-2">Subscribe</h4>
            <p className="text-gray-400 text-xs mb-4">Don't miss to subscribe to our new feeds, kindly fill the form below.</p>
            <div className="flex">
              <input
                type="email"
                placeholder="Email Address"
                className="flex-1 px-4 py-3 bg-white/5 border border-white/20 text-white placeholder-gray-500 outline-none focus:border-primary text-sm rounded-l-lg"
              />
              <button className="px-4 py-3 bg-primary text-white rounded-r-lg hover:bg-blue-700 transition-colors text-sm font-bold">
                →
              </button>
            </div>
          </div> */}
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-6 py-5 flex flex-col md:flex-row items-center justify-between gap-3">
          <p className="text-gray-400 text-xs">
            Copyright © 2026, All Right Reserved{' '}
            <a href="#" className="text-primary hover:underline">Web Craft</a>
          </p>
          <div className="flex gap-6">
            {[
              { label: 'Home', href: '#home' },
              // { label: 'Terms', href: '#' },
              // { label: 'Privacy', href: '#' },
              // { label: 'Policy', href: '#' },
              { label: 'Contact', href: '#footer-contact' },
            ].map(link => (
              <a key={link.label} href={link.href} className="text-gray-400 text-xs hover:text-primary transition-colors">{link.label}</a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}
