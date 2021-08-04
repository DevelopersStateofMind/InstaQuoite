import { Card, Button } from "react-bootstrap";
import "./aboutme.css";

const aboutme = () => {
  return (
    <div>
      <h1>The Developers Room</h1>
      <h2>Teila Garraway</h2>
      <div className="image-card">
        <Card style={{ width: "20rem" }}>
          <Card.Img variant="top" src="Teila.jpg" />
          <Card.Body>
            <Card.Title>The Developer Room</Card.Title>
            <Card.Text>Who I am? Why I am great? Summary of Teila.</Card.Text>
            <Button variant="primary">GitHub</Button>
          </Card.Body>
        </Card>
      </div>
    </div>
  );
};

export default aboutme;
