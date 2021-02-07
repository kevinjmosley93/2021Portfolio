import React from 'react'
import { Nav, Navbar } from 'react-bootstrap'

const Header = () => {
  return (
    <>
      <Navbar
        sticky='top'
        collapseOnSelect
        expand='lg'
        bg='dark'
        variant='dark'>
        <Navbar.Brand href='/'>Kevin J Mosley</Navbar.Brand>
        <Navbar.Toggle aria-controls='responsive-navbar-nav' />
        <Navbar.Collapse id='responsive-navbar-nav'>
          <Nav className='ml-auto'>
            <Nav.Link href='#projects'>Projects</Nav.Link>
            <Nav.Link href='#about'>About</Nav.Link>
            <Nav.Link href='#skills'>Skils</Nav.Link>
            <Nav.Link href='#contact'>Contact</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </>
  )
}

export default Header
