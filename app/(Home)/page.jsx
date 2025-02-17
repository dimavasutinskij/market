import About from '@/components/About'
import EcoFriendly from '@/components/EcoFriendly'
import Hero from '@/components/Hero'
import Offers from '@/components/Offers'
import Orgaincs from '@/components/Orgaincs'
import Products from '@/components/Products'
import Testimonials from '@/components/Testimonials'

export default function Home() {
  return (
    <main className='overflow-hidden'>
      <Hero />
      <Offers />
      <About />
      <Products />
      <Testimonials />
      <Orgaincs />
      <EcoFriendly />
    </main>
  )
}
