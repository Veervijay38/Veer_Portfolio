import React, { Fragment } from "react";
import {
  Container,
  Row,
  Col,
  Card,
  OverlayTrigger,
  Tooltip,
} from "react-bootstrap";
import { Fade } from "react-reveal";
import LottieControl from "../../Components/lottie/TestLottie";
import codinglottie from "../../Components/lottie/programming-computer.json";
import codinglottie1 from "../../Components/lottie/cloudinfra.json";

import { Icon } from "@iconify/react";
const softwareSkills = [
  {
    skillName: "React Native",
    fontAwesomeClassname: "tabler:brand-react-native",
  },
  {
    skillName: "HTML-5",
    fontAwesomeClassname: "vscode-icons:file-type-html",
  },
  {
    skillName: "CSS-3",
    fontAwesomeClassname: "vscode-icons:file-type-css",
  },
  {
    skillName: "JavaScript",
    fontAwesomeClassname: "logos:javascript",
  },
  {
    skillName: "TypeScript",
    fontAwesomeClassname: "logos:typescript-icon",
  },
  {
    skillName: "Reactjs",
    fontAwesomeClassname: "vscode-icons:file-type-reactjs",
  },
  {
    skillName: "Nodejs",
    fontAwesomeClassname: "logos:nodejs",
  },
  {
    skillName: "Redux",
    fontAwesomeClassname: "logos:redux",
  },
  {
    skillName: "NPM",
    fontAwesomeClassname: "logos:npm-icon",
  },
  {
    skillName: "Yarn",
    fontAwesomeClassname: "logos:yarn",
  },
];

function Home2() {
  return (
    <Container fluid className="home-about-section" id="home2">
      <h1 className="h1">What I do</h1>
      <Row className="details-section">
        <Col md={4}>
          <Fade left duration={2000}>
            <LottieControl animationData={codinglottie} />
          </Fade>
        </Col>
        <Col md={4}>
          <Fade right duration={2000}>
            <Card style={{ width: "35rem", height: "25rem" }}>
              <Card.Body>
                <Card.Title style={{ textAlign: "center" }}>
                  Framework Knowledge
                </Card.Title>
                <div className="d-flex justify-content-center flex-wrap mb-2">
                  {softwareSkills.map((skill, i) => {
                    return (
                      <Fragment key={i}>
                        <div className="icon-overlay">
                          <OverlayTrigger
                            placement="bottom"
                            delay={{ show: 250, hide: 400 }}
                            overlay={
                              <Tooltip id="button-tooltip">
                                {skill.skillName}
                              </Tooltip>
                            }
                          >
                            <Icon
                              icon={skill.fontAwesomeClassname}
                              data-inline="false"
                              height={"2rem"}
                              width={"2rem"}
                              className="icon-size"
                            ></Icon>
                          </OverlayTrigger>
                        </div>
                      </Fragment>
                    );
                  })}
                </div>
                <Card.Text>
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </Card.Text>
              </Card.Body>
            </Card>
          </Fade>
        </Col>
      </Row>
      <Row className="details-section2">
        <Col md={4}>
          <Fade left duration={2000}>
            <LottieControl animationData={codinglottie1} />
          </Fade>
        </Col>
        <Col md={4}>
          <Fade right duration={2000}>
            <Card style={{ width: "35rem", height: "25rem" }}>
              <Card.Body>
                <Card.Title style={{ textAlign: "center" }}>
                  Cloud & DB Knowledge
                </Card.Title>
                <div className="d-flex justify-content-center flex-wrap mb-2">
                  {softwareSkills.map((skill, i) => {
                    return (
                      <Fragment key={i}>
                        <div className="icon-overlay">
                          <OverlayTrigger
                            placement="bottom"
                            delay={{ show: 250, hide: 400 }}
                            overlay={
                              <Tooltip id="button-tooltip">
                                {skill.skillName}
                              </Tooltip>
                            }
                          >
                            <Icon
                              icon={skill.fontAwesomeClassname}
                              data-inline="false"
                              height={"2rem"}
                              width={"2rem"}
                              className="icon-size"
                            ></Icon>
                          </OverlayTrigger>
                        </div>
                      </Fragment>
                    );
                  })}
                </div>
                <Card.Text>
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </Card.Text>
              </Card.Body>
            </Card>
          </Fade>
        </Col>
      </Row>
    </Container>
  );
}

export default Home2;
