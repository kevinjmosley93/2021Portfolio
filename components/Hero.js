import { Col, Container, Image, Row, Button } from 'react-bootstrap'

export default function Hero() {
  return (
    <Container>
      <Row className='my-5 align-items-center'>
        <Col md='7'>
          <h1>Hey, I'm Kevin!</h1>
          <p style={{ lineHeight: '2.5rem' }} className='my-5'>
            After 5 years in the U.S. Navy, I now build modern Web Applications
            with mostly <span className='bg-dark text-info'>React</span> &{' '}
            <span className='bg-dark text-info'>Node.js</span>
          </p>
          <Button
            as='a'
            target='_blank'
            href='https://drive.google.com/file/d/1V81jhvK0xJHTDbujs5h8SrWLtFTx2SM6/view?usp=sharing'
            className='text-info bg-dark'
            variant='link'
            size='lg'>
            View Resume
          </Button>
        </Col>
        <Col md='5'>
          <Image
            className='rounded-circle'
            height='500px'
            width='500px'
            src='https://i.imgur.com/xUuc3Fk.png'
          />
        </Col>
      </Row>
    </Container>
  )
}
