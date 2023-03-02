import React from "react";
import { Container, Row, Col } from "react-bootstrap";

function Project() {
  return (
    <Container fluid className="home-section" id="home">
      <Row>
        <Col md={7} className="home-header">
          <h1 className="heading">Hello, Project! </h1>
        </Col>
      </Row>
    </Container>
  );
}

export default Project;
