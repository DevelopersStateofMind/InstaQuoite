import { Row, Col, FloatingLabel, Form, Button } from "react-bootstrap";
const quotecalculator = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    //keeps form from refreshing pg.
    console.log("test");
  };
  return (
    <form onSubmit={handleSubmit}>
      <Row className="g-2">
        <Col md>
          <FloatingLabel controlId="floatingInputGrid" label="Job Number">
            <Form.Control type="number" placeholder="Enter Job Number" />
          </FloatingLabel>
          <FloatingLabel controlId="floatingInputGrid" label="Job Date">
            <Form.Control type="date" placeholder="Job Date" />
          </FloatingLabel>
          <FloatingLabel controlId="floatingInputGrid" label="Email address">
            <Form.Control type="email" placeholder="name@example.com" />
          </FloatingLabel>
          <FloatingLabel controlId="floatingInputGrid" label="Email address">
            <Form.Control type="email" placeholder="name@example.com" />
          </FloatingLabel>
        </Col>

        <Col md>
          <FloatingLabel
            controlId="floatingSelectGrid"
            label="Works with selects"
          >
            <Form.Select aria-label="Floating label select example">
              <option>Open this select menu</option>
              <option value="1">One</option>
              <option value="2">Two</option>
              <option value="3">Three</option>
            </Form.Select>
          </FloatingLabel>
          <FloatingLabel controlId="floatingInputGrid" label="Email address">
            <Form.Control type="email" placeholder="name@example.com" />
          </FloatingLabel>
          <FloatingLabel controlId="floatingInputGrid" label="Email address">
            <Form.Control type="email" placeholder="name@example.com" />
          </FloatingLabel>
          <FloatingLabel controlId="floatingInputGrid" label="Email address">
            <Form.Control type="email" placeholder="name@example.com" />
          </FloatingLabel>
        </Col>
      </Row>

      <input type="submit" />
    </form>
  );
};

export default quotecalculator;
