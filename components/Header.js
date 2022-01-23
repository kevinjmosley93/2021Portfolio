import React from 'react'
import { useRouter } from 'next/router'
import { Nav, Navbar, Button, Container } from 'react-bootstrap'

const Header = () => {
  const router = useRouter()
  
  const checkPathname = (string, isContact) => {
    if (!router.pathname.includes('blog')) return string
    return isContact ? '/#contact' : '/'
  }
  return (
    <>
      <Navbar
        sticky='top'
        collapseOnSelect
        expand='md'
        variant='dark'
        style={{
          background: 'rgb(23, 23, 23)',
          color: '#ffffff'
        }}>
        <Container className='font-weight-bold'>
          <Navbar.Brand
            className='p-0 m-0'
            href='/'>
            <img
              style={{
                width: '100px',
                height: '85px',
                objectFit: 'contain',
                margin: '0'
              }}
              alt='logo'
              src='https://i.imgur.com/Jzb3RB2.png'
            />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls='responsive-navbar-nav' />
          <Navbar.Collapse
            id='responsive-navbar-nav'
            className=''>
            <Nav className='ml-auto text-center'>
              <Nav.Link href={checkPathname('#about')}>About</Nav.Link>
              <Nav.Link href='/blog'>Blog</Nav.Link>
              <Nav.Link href={checkPathname('#projects')}>Projects</Nav.Link>
              <Nav.Link href={checkPathname('#skills')}>Skills</Nav.Link>
            </Nav>
            <Nav className='ml-2'>
              <Button
                as='a'
                href={checkPathname('#contact', true)}
                className='font-weight-bold'
                variant='link'
                size='md'>
                Contact Me
              </Button>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  )
}

export default Header
