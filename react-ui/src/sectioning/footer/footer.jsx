import { NavLink } from "react-router-dom";
import { Navbar, Container } from "react-bootstrap";

const Footer = () => {
  return (
    <footer className="Footer mt-5">
      <Navbar expand={"md" | "lg" | "xl" | "xxl"} variant="light" bg="light">
        <Container>
          <Navbar.Brand href="/">
            <ul className="Footer-text">
              <li>Copyright 2021</li>
              <li>
                <a href="#">GitHub</a>
              </li>
            </ul>
          </Navbar.Brand>
        </Container>
      </Navbar>
    </footer>
  );
};

export default Footer;
