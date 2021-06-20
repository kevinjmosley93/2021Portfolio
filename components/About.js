import React from 'react'
import { Container } from 'react-bootstrap'

export const About = () => {
  return (
    <section className='bg-success py-5'>
      <Container id='about'>
        <h2 className='text-center py-3'>About Me</h2>
        <p style={{ lineHeight: '2rem' }} className='text-center'>
          I use my attention to detail and complex problem solving skills to
          build robust web applications. Apart from being a web developer, the
          one thing I enjoy the most is being a father. Becoming a father has
          been the best thing that happened to me and is the reason I give 110%
          no matter what task is at hand.
        </p>
      </Container>
    </section>
  )
}
