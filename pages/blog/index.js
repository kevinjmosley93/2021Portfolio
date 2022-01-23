import React from 'react'
import Blog from '../../components/Blog'
const Index = ({ posts }) => {
  return (
    <div className='container'>
      <Blog posts={posts} />
    </div>
  )
}

export default Index

export async function getStaticProps() {
    const res = await fetch('https://employthevets.com/api/get-blog')
    const posts = await res.json()
    return {
      props: {
        posts,
      }
    }
  }
  