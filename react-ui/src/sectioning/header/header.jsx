import React from "react";
import { NavLink } from "react-router-dom";
// import Greeting from "../../components/UI/greeting";
import "./header.css";
import { Navbar, Container, Nav } from "react-bootstrap";

const Header = () => {
  return (
    <header>
      <Navbar bg="light" expand="lg">
        <Container>
          <Navbar.Brand className="logoinline" href="/">
            <img src="InstaQuoteLogo.png" alt="mylogo" />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="nav-bar-links">
              <Nav.Link href="/">Home</Nav.Link>
              <Nav.Link href="/quotecalculator">Quote Calculator</Nav.Link>
              <Nav.Link href="/listofquotes">List of quotes</Nav.Link>
              <Nav.Link href="/aboutme">About Me</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  );
};

export default Header;
