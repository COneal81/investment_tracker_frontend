import React from 'react'
import {Link} from 'react-router-dom'
import {Navbar, Nav} from 'react-bootstrap';
import navLogo from '../images/smLogo.png'

const NavBar = () => {
    return(
        
<Navbar bg="light" expand="sm">
  <Navbar.Brand as={Link} to="/"><img height="50" width="50" src={navLogo} alt="navLogo"/></Navbar.Brand>
  <Navbar.Toggle aria-controls="basic-navbar-nav" />
  <Navbar.Collapse id="basic-navbar-nav">
    <Nav className="mr-auto">
    <Nav.Link as={Link} to="/">Home</Nav.Link>
      <Nav.Link as={Link} to="/items">Items</Nav.Link>
      <Nav.Link as={Link} to="/items/new">Add Item</Nav.Link>
    </Nav>
   
  </Navbar.Collapse>
</Navbar>
 
    )
}
export default NavBar