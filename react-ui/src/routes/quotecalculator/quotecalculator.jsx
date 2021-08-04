import { Row, Col, FloatingLabel, Form } from "react-bootstrap";

const quotecalculator = () => {
  class calculate extends React.Component {
    constructor(props) {
      super(props);
      this.state = { value: "" };

      this.handleChange = this.handleChange.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
      this.setState({ value: event.target.value });
    }

    handleSubmit(event) {
      alert("A name was submitted: " + this.state.value);
      event.preventDefault();
    }
    render() {
      // const handleSubmit = (e) => {
      //   e.preventDefault();
      //   //keeps form from refreshing pg.
      //   console.log({ e });

      <div>
        <div>
          <h1>Let's Quote your Job!</h1>
        </div>
        <div className="calculator-cal">
          <form onSubmit={handleSubmit}>
            <Row className="g-2">
              <Col md>
                <FloatingLabel controlId="floatingInputGrid" label="Job Date">
                  <Form.Control type="date" placeholder="Job Date" />
                </FloatingLabel>
                <FloatingLabel controlId="floatingInputGrid" label="Job Number">
                  <Form.Control type="number" placeholder="Enter Job Number" />
                </FloatingLabel>
                <FloatingLabel
                  controlId="floatingInputGrid"
                  label="Hourly Rate"
                >
                  <Form.Control type="number" placeholder="Hourly Rate" />
                </FloatingLabel>
                <FloatingLabel controlId="floatingInputGrid" label="Mileage">
                  <Form.Control type="number" placeholder="Mileage" />
                </FloatingLabel>
              </Col>
            </Row>
            <input type="submit" />
          </form>
        </div>
      </div>;
    }
  }
};

export default quotecalculator;
