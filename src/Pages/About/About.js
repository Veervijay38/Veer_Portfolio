import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Particle from "../../Components/Particle";
import AboutME from "./AboutMe";
import Image from "../../Assets/Deskguy.png";
import { GiBulletBill } from "react-icons/gi";

function About() {
  return (
    <section>
      <Container fluid className="about-section" id="about">
        <Particle />
        <Row className="about-row">
          <Col lg={5} className="about-header">
            <h1 className="about_heading">Brief about Me </h1>
            <p className="about_heading-name">
              Hello, I'm
              <code className="about_main-name"> Veervijaysinh Rana</code>, A
              senior software developer based in
              <code className="about_main-name"> Hamilton</code>, Ontario.
              <br />I have a passion for developing innovative and user-friendly
              mobile and web applications that meet the needs of clients and
              end-users alike.
              <br />
              <br />
              Beyond coding, there are other activities that I thoroughly enjoy!
            </p>
            <ul>
              <li className="about-activity">
                <GiBulletBill /> Engaging in gaming activities.
              </li>
              <li className="about-activity">
                <GiBulletBill /> Playing Tennis, Volleyball
              </li>
              <li className="about-activity">
                <GiBulletBill /> Travelling
              </li>
            </ul>
          </Col>
          <Col lg={4} className="lottie-style">
            <img
              src={Image}
              alt=""
              style={{
                height: 400,
                width: 400,
              }}
            ></img>
          </Col>
        </Row>
      </Container>
      <AboutME />
    </section>
  );
}

export default About;
