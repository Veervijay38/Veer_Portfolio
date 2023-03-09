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
import { skillsSection } from "./Skills";
import { Icon } from "@iconify/react";

function AboutME() {
  return (
    <Container fluid className="about-section-2" id="about2">
      <h1 className="h1">What I do</h1>
      {skillsSection.data.map((skill, i) => {
        return (
          <Row key={i} className="details-section">
            <Col lg={4} style={{ alignSelf: "center" }}>
              <Fade bottom duration={2000}>
                <LottieControl animationData={skill.lottieAnimationFile} />
              </Fade>
            </Col>
            <Col lg={4}>
              <Fade bottom duration={2000}>
                <Card style={{ width: "35rem", height: "30rem" }}>
                  <Card.Body>
                    <Card.Title style={{ textAlign: "center" }}>
                      {skill.title}
                    </Card.Title>
                    <div className="d-flex justify-content-center flex-wrap mb-2">
                      {skill.softwareSkills.map((softwareSkills, i) => {
                        return (
                          <Fragment key={i}>
                            <div className="icon-overlay">
                              <OverlayTrigger
                                placement="bottom"
                                delay={{ show: 250, hide: 400 }}
                                overlay={
                                  <Tooltip id="button-tooltip">
                                    {softwareSkills.skillName}
                                  </Tooltip>
                                }
                              >
                                <Icon
                                  icon={softwareSkills.fontAwesomeClassname}
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
                    {skill.skills.map((skills, i) => {
                      return <Card.Text key={i}>{skills}</Card.Text>;
                    })}
                  </Card.Body>
                </Card>
              </Fade>
            </Col>
          </Row>
        );
      })}
    </Container>
  );
}

export default AboutME;
