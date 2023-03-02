import React from "react";
import { Container, Row, Col } from "react-bootstrap";

function About() {
  return (
    <Container fluid className="home-section" id="home">
      <Row>
        <Col md={7} className="home-header">
          <h1 className="heading">Hello, About page! </h1>
          <h1 className="heading-name">
            My name is <code className="main-name"> Veervijaysinh Rana</code>
          </h1>
        </Col>
      </Row>
    </Container>
  );
}

export default About;
