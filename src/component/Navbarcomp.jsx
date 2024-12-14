import React, { useEffect, useState } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { Container, Nav, Navbar } from 'react-bootstrap';

function MyNavbar() {
  const [navbarBlur, setNavbarBlur] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const location = useLocation();

  const handleScroll = () => {
    if (window.scrollY > 50) {
      setNavbarBlur(true);
    } else {
      setNavbarBlur(isDropdownOpen);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [isDropdownOpen]);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  const handleToggle = () => {
    setIsDropdownOpen((prevState) => !prevState);
    if (!isDropdownOpen) {
      setNavbarBlur(true);
    } else {
      if (window.scrollY <= 50) {
        setNavbarBlur(false);
      }
    }
  };

  return (
    <Navbar
      expand="lg"
      className={`navbar ${navbarBlur ? 'navbar-blur' : ''}`}
      onToggle={handleToggle}
    >
      <Container>
        <Navbar.Brand as={NavLink} to="/">
          Anzaa
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mx-auto Navlink">
            <Nav.Link as={NavLink} to="/">
              Home
            </Nav.Link>
            <Nav.Link as={NavLink} to="/about">
              About
            </Nav.Link>
            <Nav.Link as={NavLink} to="/service">
              Services
            </Nav.Link>
          </Nav>
          <div className="contact-button">
            <Nav.Link as={NavLink} to="/contact">
              <button>Contact</button>
            </Nav.Link>
          </div>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default MyNavbar;