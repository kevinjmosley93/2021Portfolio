import Skills from '@components/Skills'
import Hero from '../components/Hero'
import Projects from '../components/Projects'
import { About } from '@components/About'
import { Contact } from '@components/Contact'
import Blog from '@components/Blog'

export default function Home({ posts }) {
  return (
    <div>
      <Hero />
      <About />
      <Projects />
      <Skills />
      <Blog posts={posts} />
      <Contact />
    </div>
  )
}

export async function getStaticProps() {
  const res = await fetch('https://employthevets.com/api/get-blog')
  const posts = await res.json()
  return {
    props: {
      posts,
    }
  }
}
