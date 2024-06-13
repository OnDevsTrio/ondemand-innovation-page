import Hero from '@/components/home/hero-section/Hero'
import Stacks from '@/components/home/stacks'
import Testimonials from '@/components/home/testimonial'

export default async function Home() {
  return (
    <>
      <Hero />
      <Stacks />
      <Testimonials />
    </>
  )
}
