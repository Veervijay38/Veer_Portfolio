import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectList from "./ProjectList";
import Particle from "../../Components/Particle";

function Project() {
  return (
    <Container fluid className="project-section" id="project">
      <Particle />
      <Row className="justify-content-center">
        <Col md={8} className="project-header">
          <h1 className="project-title" style={{ color: "aliceblue" }}>
            My Projects Portfolio
          </h1>
          <ProjectList />
        </Col>
      </Row>
    </Container>
  );
}

export default Project;
