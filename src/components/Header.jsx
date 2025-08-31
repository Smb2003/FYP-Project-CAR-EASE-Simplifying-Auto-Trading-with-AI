import React from "react";
import { Navbar, Nav, Container, Button } from "react-bootstrap";
import "../assets/css/Header.css";


function Header() {
  return (
    <Navbar bg="dark" variant="dark" expand="lg" fixed="top" className="w-100">
      <Container fluid>
        {/* Left: Logo */}
        <Navbar.Brand href="#home">
          <img
            src="/images/CarEase-icon.png"
            alt="CarEase Logo"
            width="40"
            height="40"
            className="d-inline-block align-top"
          />{" "}
          CarEase
        </Navbar.Brand>

        {/* Mobile Toggle */}
        <Navbar.Toggle aria-controls="basic-navbar-nav" />

        <Navbar.Collapse id="basic-navbar-nav" className="justify-content-between">
          {/* Center: Nav links */}
          <Nav className="mx-auto custom-nav">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#cars">Cars</Nav.Link>
            <Nav.Link href="#services">Services</Nav.Link>
            <Nav.Link href="#about">About</Nav.Link>
          </Nav>

          {/* Right: Buttons (desktop only) */}
          <div className="d-none d-lg-block">
            <Button variant="outline-light" className="me-2">
              Login
            </Button>
            <Button variant="light">Signup</Button>
          </div>

          {/* Right: Buttons (mobile only, stacked) */}
          <Nav className="d-lg-none flex-column mt-3">
            <Button variant="outline-light" className="mb-2">
              Login
            </Button>
            <Button variant="light">Signup</Button>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;
