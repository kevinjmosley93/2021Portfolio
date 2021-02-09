import { Col, Container, Image, Jumbotron, Row, Button } from 'react-bootstrap'

export default function Hero() {
  return (
    <Container className='mt-4'>
      <Row className='m-auto'>
        <Col sm={12} lg={4}>
          <Image
            height='300px'
            width='300px'
            src='https://i.imgur.com/yJdlrwq.png'
          />
        </Col>
        <Col sm={12} lg={8}>
          <h1>Hey, I'm Kevin!</h1>
          <p>
            After 5 years in the U.S. Navy, I now build modern Web Applications
            with mostly <span className='bg-dark text-info'>React</span> &{' '}
            <span className='bg-dark text-info'>Nodejs</span>
          </p>
          <p>
            <Button className='' variant='outline-dark'>
              Learn more
            </Button>
          </p>
        </Col>
      </Row>
    </Container>
  )
}
