import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import LottieControl from "../../Components/lottie/TestLottie";
import codinglottie from "../../Components/lottie/programming.json";
import Home2 from "./Home2";
import TypeWritercomponet from "../../Components/TypeWriter";
import Particle from "../../Components/Particle";
import Social from "../../Components/Social";

function Home() {
  return (
    <section>
      <Container fluid className="home-section" id="home">
        <Particle />
        <Row className="home-row">
          <Col md={4} className="home-header">
            <h1 className="heading">
              Hello, there!{" "}
              <span className="wave" role="img" aria-labelledby="wave">
                👋🏻
              </span>
            </h1>
            <h1 className="heading-name">
              My name is <code className="main-name"> Veervijaysinh Rana</code>
            </h1>
            <div>
              <TypeWritercomponet />
            </div>
            <Social CheckResume={true} />
          </Col>
          <Col md={4} className="lottie-style">
            <LottieControl animationData={codinglottie} />
          </Col>
        </Row>
      </Container>
      <Home2 />
    </section>
  );
}

export default Home;
