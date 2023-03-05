import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Particle from "../../Components/Particle";
import AboutME from "./AboutMe";

function About() {
  return (
    <section>
      <Container fluid className="home-section" id="home">
        <Particle />
        <Row className="home-row">
          <Col md={4} className="home-header">
            <h1 className="heading">About Me </h1>
          </Col>
          <Col md={4} className="lottie-style"></Col>
        </Row>
      </Container>
      <AboutME />
    </section>
  );
}

export default About;
