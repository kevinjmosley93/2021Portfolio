import Skills from '@components/Skills'
import Hero from '../components/Hero'
import Header from '../components/Header'
import Projects from '../components/Projects'
import { About } from '@components/About'
import { Contact } from '@components/Contact'
import { Footer } from '@components/Footer'

export default function Home() {
  return (
    <div className=''>
      <Header />
      <Hero />
      <About />
      <Projects />
      <Skills />
      <Contact />
      <Footer />
    </div>
  )
}
