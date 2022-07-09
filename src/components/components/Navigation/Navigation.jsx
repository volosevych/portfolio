import React, { useState } from 'react';
import '../../css/style.scss';
import {Navbar, Container, Nav} from 'react-bootstrap/';

const Navigation = () => {
  const [navbarOpen, setNavbarOpen] = useState(false);

  const handleToggle = () => {
    setNavbarOpen(!navbarOpen)
  }

    return (
      <>
      <Navbar sticky="top">
      <Container>
        <Navbar.Brand blank href="https://github.com/volosevych">volosevych</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <div onClick={handleToggle} className='navbar-burger'>{navbarOpen ? '' : ''}</div>

          <Nav className={`${navbarOpen ? "showMenu" : ""}`}>
            <Nav.Link href="#home"><span>01.</span> Home</Nav.Link>
            <Nav.Link href="#link"><span>02.</span> About Me</Nav.Link>
            <Nav.Link href="#link"><span>03.</span> Skills</Nav.Link>
            <Nav.Link href="#link"><span>04.</span> Projects</Nav.Link>
            <Nav.Link href="#link"><span>05.</span> Portfolio</Nav.Link>
          </Nav>
        
      </Container>
    </Navbar>
    </>
    )
  

}

export default Navigation