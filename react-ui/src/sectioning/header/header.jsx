import React from "react";
// import Greeting from "../../components/UI/greeting";
import "./header.css";
import { Navbar, Container, Nav } from "react-bootstrap";

const Header = () => {
  return (
    <header>
      <Navbar className="nav-container" bg="light" expand="lg">
        <Container>
          <Navbar.Brand href="/">
            <div className="logo-container">
              <img src="InstaQuoteLogo.png" alt="mylogo" />
            </div>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <ul className="nav-bar-links">
              <Nav>
                <li>
                  <Nav.Link href="/">Home</Nav.Link>
                </li>
                <li>
                  <Nav.Link href="/quotecalculator">Quote Calculator</Nav.Link>
                </li>
                <li>
                  <Nav.Link href="/quotesummary">Quote Summary</Nav.Link>
                </li>
                <li>
                  <Nav.Link href="/listofquotes">List of quotes</Nav.Link>
                </li>
                <li>
                  <Nav.Link href="/about">About</Nav.Link>
                </li>
              </Nav>
            </ul>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  );
};

export default Header;
