import { Col, Container, Image, Row, Button } from 'react-bootstrap'

export default function Hero() {
  return (
    <Container>
      <Row className='my-2 align-items-center'>
        <Col md='7' className=''>
          <h1 className='font-weight-bold'>Hey, I'm Kevin!</h1>
          <p style={{ lineHeight: '2.5rem' }} className='my-5'>
            After 5 years in the U.S. Navy, I now build modern Web Applications
            with mostly{' '}
            <span className='font-weight-bold badge-col'>React</span> &{' '}
            <span className='font-weight-bold badge-col'>Node.js</span>
          </p>
          <div className='social-icons d-flex flex-row justify-content-between w-50'>
            <a
              className='social-icon'
              href='https://www.linkedin.com/in/kevinjmosley/'
              target='_blank'>
              <i className='fa fa-linkedin-in'></i>
            </a>
            <a
              className='social-icon'
              href='https://github.com/kevinjmosley93'
              target='_blank'>
              <i className='fa fa-github'></i>
            </a>
            <a
              className='social-icon'
              href='https://www.facebook.com/kevin.mosley.399/'
              target='_blank'>
              <i className='fa fa-facebook'></i>
            </a>
            <a
              className='social-icon'
              href='mailto:kevinjmosley93@gmail.com'
              target='_blank'>
              <i className='fa fa-envelope'></i>
            </a>
          </div>
          {/* <Button
            as='a'
            target='_blank'
            href='https://drive.google.com/file/d/1V81jhvK0xJHTDbujs5h8SrWLtFTx2SM6/view?usp=sharing'
            className='text-info bg-dark'
            variant='link'
            size='lg'>
            View Resume
          </Button> */}
        </Col>
        <Col md='5' className=''>
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
