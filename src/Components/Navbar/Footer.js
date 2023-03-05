import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import SocialLinks from "../SocialLinks";

function Footer() {
  let date = new Date();
  let year = date.getFullYear();
  return (
    <Container fluid className="footer">
      <Row>
        <Col md={4} className="footer-copywright">
          <h3>Designed and Developed by Veervijaysinh Rana</h3>
        </Col>
        <Col md={4} className="footer-copywright">
          <h3>Copyright © {year} VR</h3>
        </Col>
        <Col md={4} className="footer-body">
          <SocialLinks />
        </Col>
      </Row>
    </Container>
  );
}

export default Footer;
