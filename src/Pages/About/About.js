import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Particle from "../../Components/Particle";
import AboutME from "./AboutMe";
import Image from "../../Assets/Deskguy.png";
import { GiBulletBill } from "react-icons/gi";
import { FaChevronDown } from "react-icons/fa";

function About() {
  const scrollToSection = () => {
    const section = document.getElementById("about-detail-section");
    section.scrollIntoView({ behavior: "smooth" });
  };
  return (
    <section>
      <Container fluid className="about-section" id="about">
        <Particle />
        <Row className="about-row">
          <Col md={5} className="about-header">
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
          <Col md={4} className="about-img-col">
            <img src={Image} alt="imageabout" className="about-image"></img>
          </Col>
        </Row>
        <div className="bouncing-arrow-container">
          <a
            href="#about-detail-section"
            className="bouncing-arrow"
            onClick={scrollToSection}
          >
            <i className="fa fa-angle-down">
              <FaChevronDown size={"1.5rem"} />
            </i>
          </a>
        </div>
      </Container>
      <AboutME />
    </section>
  );
}

export default About;
