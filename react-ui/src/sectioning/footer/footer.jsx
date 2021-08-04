import { Navbar, Container, Nav } from "react-bootstrap";
import "./footer.css";

const Footer = () => {
  return (
    <footer className="Footer">
      <Navbar
        expand={"md" | "lg" | "xl" | "xxl"}
        variant="primary"
        bg="primary"
      >
        <Container>
          <Navbar.Brand href="/"></Navbar.Brand>
          <Nav className="text-white bg-transparent">
            <Nav.Link href=" ">Copyright 2021</Nav.Link>
            <Nav.Link href="#https://github.com/DevelopersStateofMind">
              Github
            </Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </footer>
  );
};

export default Footer;
