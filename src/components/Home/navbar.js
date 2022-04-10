import React from 'react'
import {Navbar, Container,Nav, Button} from 'react-bootstrap'

export default function NavBar() {
  return (
    <>
  <Navbar collapseOnSelect expand="lg"  variant="light"   style={{backgroundColor: "white"}} >
  <Container>
  <Navbar.Brand href="/iirA">
  <img src={`${process.env.PUBLIC_URL}/images/logo2.png`} className="d-inline-block align-top" alt='app logo' style={{width: "150px"}}/>
</Navbar.Brand>
 
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">
    <Nav className="me-auto">
      <Nav.Link href="/iirA" style={{color:"black",fontSize:"15px" }}>Home</Nav.Link>
      <Nav.Link href="/iirA/about"style={{color:"black",fontSize:"15px" }}>About Us</Nav.Link>
    </Nav>
    <Nav>
      <Button style={{minWidth:"200px", backgroundColor:"blueviolet", color:"white"}} variant="light">Give now</Button>
    </Nav>
  </Navbar.Collapse>
  </Container>
</Navbar>
  </>
  );
}
