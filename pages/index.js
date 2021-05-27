import { useEffect } from 'react'
import Content from '../components/Content'
import Header from '../components/Header'
import Projects from '../components/Projects'

export default function Home({ data }) {
  useEffect(() => {
    console.log('this is data', data)
  }, [])
  return (
    <div className=''>
      <Header />
      <Content />
      <Projects data={data} />
    </div>
  )
}

export async function getServerSideProps(context) {
  console.log('this is context', context.req.headers.referer)
  const res = await fetch(`http://localhost:3000/api/get-projects`)
  const data = await res.json()

  return {
    props: { data } // will be passed to the page component as props
  }
}
