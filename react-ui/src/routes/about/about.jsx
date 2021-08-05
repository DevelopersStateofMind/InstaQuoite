import { Card, Button } from "react-bootstrap";
import "./about.css";

const About = () => {
  return (
    <>
      <div className="about-header">
        <h1>The Developers Room</h1>
      </div>
      <div className="card">
        <div className="image-card">
          <Card style={{ width: "20rem" }}>
            <Card.Img variant="top" src="Teila.jpg" />
            <Card.Body>
              <Card.Title>The Developer Room</Card.Title>
              <Card.Text>
                Full Stack Developer | Detail-oriented Legal strategist turned
                developer with experience, zest for solving complex problems and
                growing in my craft. Combining my love for technology with my
                work experiences thus far.
              </Card.Text>
              <a href="https://github.com/settings/profile" target="_blank">
                <Button>Github</Button>
              </a>
              <a
                href="https://www.linkedin.com/in/teila-garraway-37121154/"
                target="_blank"
              >
                <Button>LinkedIn</Button>
              </a>
            </Card.Body>
          </Card>
        </div>
      </div>
    </>
  );
};

export default About;
