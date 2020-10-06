import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';

import { Navbar, Nav, NavDropdown, Container  } from 'react-bootstrap';

import '../css/NavigationBar.css'
import brandlogo from '../assets/brandlogo.png'

const NavigationBar = () => {

    return(
       
<Container fluid className="navbg">
<Container>


<Navbar collapseOnSelect expand="lg" bg="" variant="dark">
<Navbar.Brand href="#home">
<img
  src={brandlogo}
  width="40%"
  height="40%"
  className="d-inline-block align-top brandlogo"
  alt="React Bootstrap logo"
/>
</Navbar.Brand>
<Navbar.Toggle aria-controls="responsive-navbar-nav" />
<Navbar.Collapse id="responsive-navbar-nav">
  <Nav className="mr-auto">
   
  </Nav>
  <Nav>
  
  <button type="button" onclick="" className="mt-2 mr-2 mb-2 ml-2 nav-btn login" >
  <Nav.Link href="" className="text-white">Login</Nav.Link>
  </button>
  
  

  <button type="button" onclick="" className="mt-2 mr-2 mb-2 ml-2 nav-btn register" >
  <Nav.Link href="" className="text-white">Register</Nav.Link>
  </button>
  
  </Nav>
</Navbar.Collapse>
</Navbar>


</Container>
</Container>
    )

}

export default NavigationBar;