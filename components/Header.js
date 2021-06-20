import React from 'react'
import { Nav, Navbar, Button } from 'react-bootstrap'

const Header = () => {
  return (
    <>
      <Navbar
        sticky='top'
        collapseOnSelect
        expand='lg'
        style={{ background: 'rgba(23, 23, 23, .4)', color: '#ffffff' }}>
        <div className='container'>
          <Navbar.Brand href='/'>
            <img
              style={{ width: '155px', objectFit: 'cover', padding: '0' }}
              alt='logo'
              src='https://i.imgur.com/ZwGNWOU.png'
            />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls='responsive-navbar-nav' />
          <Navbar.Collapse id='responsive-navbar-nav'>
            <Nav className='ml-auto text-center'>
              <Nav.Link href='#about'>About</Nav.Link>
              <Nav.Link href='#projects'>Projects</Nav.Link>
              <Nav.Link href='#skills'>Skills</Nav.Link>
            </Nav>
            <Nav className='ml-2'>
              <Button
                as='a'
                href='#contact'
                className=''
                variant='link'
                size='md'>
                Contact Me
              </Button>
            </Nav>
          </Navbar.Collapse>
        </div>
      </Navbar>
    </>
  )
}

export default Header
