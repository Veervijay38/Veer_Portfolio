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
    <Container fluid className="about-section-2" id="about-detail-section">
      <h1 className="header-tag">What I do</h1>
      {skillsSection.data.map((skill, i) => {
        return (
          <Row key={i} className="details-section">
            <Col md={4} style={{ alignSelf: "center" }}>
              <Fade bottom duration={2000}>
                <LottieControl animationData={skill.lottieAnimationFile} />
              </Fade>
            </Col>
            <Col md={4}>
              <Fade bottom duration={2000}>
                <Card className="card-size">
                  <Card.Body>
                    <Card.Title style={{ textAlign: "center" }}>
                      {skill.title}
                    </Card.Title>
                    <div className="card-div">
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
