import Navbar from '@/components/Navbar'
import Hero from '@/components/Hero'
import Services from '@/components/Services'
import Team from '@/components/Team'
import Projects from '@/components/Projects'
import Testimonials from '@/components/Testimonials'
import Footer from '@/components/Footer'
import FloatingButtons from '@/components/FloatingButtons'

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <Services />
      <Team />
      <Projects />
      <Testimonials />
      <Footer />
      <FloatingButtons />
    </main>
  )
}
