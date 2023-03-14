import React from "react";
import { Container, Col, Row } from "react-bootstrap";
import Tilt from "react-parallax-tilt";
import Myavtar from "../../Assets/avatar.svg";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="home-about-section">
      <Row>
        <Col lg={8} className="home-about-description">
          <h1 className="h1">Who am I</h1>
          <p className="home-about-body">
            I am a senior <strong className="blue">Software Developer </strong>{" "}
            with <strong className="blue">4.9+ years</strong> of
            <strong className="blue"> React Native</strong> experience and{" "}
            <strong className="blue">1.5+ years </strong>of{" "}
            <strong className="blue">React JS </strong>experience. I am
            passionate about building high-quality web and mobile applications
            that meet the needs of end-users and drive business success.
            Throughout my career, I have honed my skills in developing custom UI
            components, integrating third-party APIs, and optimizing app
            performance and scalability.
            <br />
            <br /> My technical expertise includes proficiency in{" "}
            <strong className="blue">
              JavaScript, TypeScript, React Native, React JS, Redux,
            </strong>{" "}
            and related libraries and frameworks. I have also worked extensively
            with various web and mobile development tools and technologies,
            including{" "}
            <strong className="blue">Xcode, Android Studio, and Expo.</strong>{" "}
            In addition to my technical skills, I am a strong communicator and
            collaborator who enjoys working closely with designers, product
            managers, and other stakeholders to deliver high-quality products on
            time and within budget. I am also comfortable working independently
            and taking ownership of complex projects from start to finish.{" "}
            <br />
            <br />
            Overall, I am a dedicated and experienced developer who is committed
            to excellence in everything I do. I am excited about the opportunity
            to leverage my skills and experience to help bring innovative web
            and mobile apps to life and make a meaningful contribution to the
            field of software development.
          </p>
        </Col>
        <Col lg={4} className="myAvtar d-flex justify-content-center">
          <Tilt>
            <img src={Myavtar} className="img-fluid" alt="avatar" />
          </Tilt>
        </Col>
      </Row>
    </Container>
  );
}

export default Home2;
