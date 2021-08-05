import { Container, Row, Col } from "react-bootstrap";

const Homepage = () => {
  return (
    <>
      <Container>
        <div className="main-header">
          <h1> Welcome to the Quote Calculator!</h1>
        </div>
        <Row>
          <Col>
            <div className="gif-container">
              <img src="QuoteCalculatorPh1.gif" alt="calculator" />
            </div>
          </Col>
          <Col>
            <div>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Suspendisse aliquet posuere turpis, in euismod sem sodales id.
                Ut pharetra purus eget neque ultricies, eget varius sapien
                porta. Aliquam semper aliquet felis, ut dignissim ligula
                volutpat sit amet. Integer pulvinar, urna pharetra accumsan
                scelerisque, mauris justo suscipit massa, a iaculis eros tortor
                sed arcu. Aenean scelerisque leo nisi, id bibendum ex bibendum
                vitae. Pellentesque venenatis convallis metus eget malesuada.
                Cras sodales, urna et ullamcorper rhoncus, elit diam varius
                elit, a blandit libero augue nec orci. Ut ligula enim, pulvinar
                vel luctus quis, ornare non dolor. Sed eget purus nisi.
                Phasellus porttitor dignissim gravida. Phasellus fermentum nunc
                eu lacus tristique, quis cursus diam sollicitudin. Duis eu elit
                mi.
              </p>
            </div>
          </Col>
        </Row>
        <Row>
          <Col>
            <div>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Suspendisse aliquet posuere turpis, in euismod sem sodales id.
                Ut pharetra purus eget neque ultricies, eget varius sapien
                porta. Aliquam semper aliquet felis, ut dignissim ligula
                volutpat sit amet. Integer pulvinar, urna pharetra accumsan
                scelerisque, mauris justo suscipit massa, a iaculis eros tortor
                sed arcu. Aenean scelerisque leo nisi, id bibendum ex bibendum
                vitae. Pellentesque venenatis convallis metus eget malesuada.
                Cras sodales, urna et ullamcorper rhoncus, elit diam varius
                elit, a blandit libero augue nec orci. Ut ligula enim, pulvinar
                vel luctus quis, ornare non dolor. Sed eget purus nisi.
                Phasellus porttitor dignissim gravida. Phasellus fermentum nunc
                eu lacus tristique, quis cursus diam sollicitudin. Duis eu elit
                mi.
              </p>
            </div>
          </Col>
          <Col>
            {" "}
            <div className="pic2-container">
              <img src="QuoteCalculatorPh2.jpg" alt="calculator" />
            </div>
          </Col>
        </Row>
      </Container>

      {/* <a href="../../quotecalculator.quotecalculator">
        <Button>Try Quote Calculator</Button>
      </a> */}
      {/* <UsernameForm /> */}
    </>
  );
};

export default Homepage;
