import React from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';

const Header = () => {
    return (
        <header>
           <Navbar bg="dark" variant='dark' expand="lg" class="navbar navbar-expand-lg navbar-dark bg-primary" collapseOnSelect>
               <Container>
  <Navbar.Brand href="/">ShopMaster</Navbar.Brand>
  <Navbar.Toggle aria-controls="basic-navbar-nav" />
  <Navbar.Collapse id="basic-navbar-nav">
    <Nav className="ml-auto">
      <Nav.Link href="/cart"> cart <i className='fas fa-shopping-cart'></i></Nav.Link>
      <Nav.Link href="/login">Sign In <i className='fas fa-user'></i> </Nav.Link>
    </Nav>
   
  </Navbar.Collapse>
                     
  </Container>
</Navbar>
        </header>
    )
}

export default Header
