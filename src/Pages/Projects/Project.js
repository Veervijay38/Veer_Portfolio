import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectList from "./ProjectList";
import Particle from "../../Components/Particle";
import { webprojects, mobileprojects } from "./portfoliodetails";

function Project() {
  return (
    <Container fluid className="project-section" id="project">
      <Particle />
      <Row className="justify-content-center">
        <h1 className="project-title" style={{ color: "aliceblue" }}>
          My Project Potfolio
        </h1>
        <Col md={8} className="project-header">
          <h2 className="project-title1" style={{ color: "aliceblue" }}>
            Mobile Development
          </h2>
          <ProjectList projects={mobileprojects} />
        </Col>
        <Col md={8} className="project-header">
          <h2 className="project-title1" style={{ color: "aliceblue" }}>
            Web Development
          </h2>
          <ProjectList projects={webprojects} />
        </Col>
      </Row>
    </Container>
  );
}

export default Project;
