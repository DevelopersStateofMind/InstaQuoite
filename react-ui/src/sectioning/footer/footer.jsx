import React from "react";
import { Nav } from "react-bootstrap";
import "./footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <Nav.Link href="/">Copyright 2021</Nav.Link>
      <Nav.Link
        href="#https://github.com/DevelopersStateofMind"
        target="_blank"
      >
        Github
      </Nav.Link>
    </footer>
  );
};

export default Footer;
