import { Navbar, Container } from "react-bootstrap";

const Footer = () => {
  return (
    <footer className="Footer mt-5">
      <Navbar expand={"md" | "lg" | "xl" | "xxl"} variant="light" bg="light">
        <Container>
          <Navbar.Brand href="/">
          </Navbar.Brand>
        </Container>
      </Navbar>
      <ul className="Footer-text">
              <li>Copyright 2021</li>
              <li>
                <a href="https://github.com/DevelopersStateofMind">GitHub</a>
              </li>
            </ul>
    </footer>
  );
};

export default Footer;
