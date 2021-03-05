import { Col, Container, Image, Jumbotron, Row, Button } from 'react-bootstrap'

export default function Hero() {
  return (
    <div className='wrapper container'>
      <div className='leftContent'>
        <h1>Hey, I'm Kevin!</h1>
        <p>
          After 5 years in the U.S. Navy, I now build modern Web Applications
          with mostly <span className='bg-dark text-info'>React</span> &{' '}
          <span className='bg-dark text-info'>Nodejs</span>
        </p>
        <p>
          <Button
            as='a'
            target='_blank'
            href='https://drive.google.com/file/d/1V81jhvK0xJHTDbujs5h8SrWLtFTx2SM6/view?usp=sharing'
            className='text-info bg-dark'
            variant='link'
            size='sm'>
            View Resume
          </Button>
        </p>
      </div>
      <div className='rightContent'>
        <Image
          height='600px'
          width='600px'
          src='https://i.imgur.com/Atjc3ra.png'
        />
      </div>
    </div>
  )
}
