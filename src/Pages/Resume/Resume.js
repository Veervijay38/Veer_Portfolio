import React, { useState } from "react";
import { Container, Row, Col, Card, Image, Button } from "react-bootstrap";
import { FaMapMarkerAlt, FaEnvelope, FaTimes, FaBars } from "react-icons/fa";
import Particle from "../../Components/Particle";
import { NavDropdown } from "react-bootstrap";
import Social from "../../Components/Social";
import MyResume from "../../Assets/Veervijaysinh_Rana_Resume.pdf";
import ProfilePic from "../../Assets/ProfilePic.jpeg";
function Resume() {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };
  return (
    <Container className="mt-4">
      <Particle />
      <Row className="justify-content-center">
        <Col xs={12} sm={4}>
          <Card className="card_one text-center position-fixed">
            <Image
              src={ProfilePic}
              fluid
              style={{ width: 200, height: 200,   }}
              // alt=""
              className="rounded-circle img-center img-fluid shadow shadow-lg--hover mb-4"
            />
            <Card.Body>
              <Card.Title>Veervijaysinh Rana</Card.Title>
              <Card.Text>Software Developer</Card.Text>
              <Card.Text>
                <FaMapMarkerAlt /> Stoney creek, ON, Canada
              </Card.Text>
              <Card.Text>
                <FaEnvelope /> virajrana123@gmail.com
              </Card.Text>
              <Card.Text>Phone: +1(289) 439-7949</Card.Text>
              <div className="d-flex justify-content-center">
                <Social />
              </div>
              <Button variant="primary" href={MyResume} download>
                Download Resume
              </Button>
            </Card.Body>
          </Card>
          <div className="floating-nav-trigger">
            <NavDropdown
              title={
                isOpen ? (
                  <FaTimes className="drawer-icon" />
                ) : (
                  <FaBars className="drawer-icon" />
                )
              }
              id="basic-nav-dropdown"
              onToggle={handleToggle}
              pullRight={true}
              show={isOpen}
              noCaret={true}
            >
              <NavDropdown.Item href="#action/1.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/1.2">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/1.3">
                Something else
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/1.4">
                Separated link
              </NavDropdown.Item>
            </NavDropdown>
          </div>
        </Col>
        <Col xs={12} sm={8} className="scrollable-card">
          <Card className="text-center">
            {/* <Image src="work-pic.jpg" fluid />   */}
            <Card.Body>
              <Card.Title className="text-danger">Work Experience</Card.Title>
              <Card.Text>Web Developer</Card.Text>
              <Card.Text>ABC Company</Card.Text>
              <Card.Text>Jan 2020 - Present</Card.Text>
              <Card.Text>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                tempor arcu non nibh consectetur lobortis. Sed ac eros a lorem
                maximus auctor. Suspendisse rutrum risus in ante volutpat
                varius.
              </Card.Text>
              {/* add more work experience here */}
              <Card.Title className="text-danger">Work Experience</Card.Title>
              <Card.Text>Web Developer</Card.Text>
              <Card.Text>ABC Company</Card.Text>
              <Card.Text>Jan 2020 - Present</Card.Text>
              <Card.Text>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                tempor arcu non nibh consectetur lobortis. Sed ac eros a lorem
                maximus auctor. Suspendisse rutrum risus in ante volutpat
                varius.
              </Card.Text>
              <Card.Title className="text-danger">Work Experience</Card.Title>
              <Card.Text>Web Developer</Card.Text>
              <Card.Text>ABC Company</Card.Text>
              <Card.Text>Jan 2020 - Present</Card.Text>
              <Card.Text>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                tempor arcu non nibh consectetur lobortis. Sed ac eros a lorem
                maximus auctor. Suspendisse rutrum risus in ante volutpat
                varius.
              </Card.Text>
              <Card.Title className="text-danger">Work Experience</Card.Title>
              <Card.Text>Web Developer</Card.Text>
              <Card.Text>ABC Company</Card.Text>
              <Card.Text>Jan 2020 - Present</Card.Text>
              <Card.Text>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                tempor arcu non nibh consectetur lobortis. Sed ac eros a lorem
                maximus auctor. Suspendisse rutrum risus in ante volutpat
                varius.
              </Card.Text>
              <Card.Title id="action/1.1" className="text-danger">
                Work Experience
              </Card.Title>
              <Card.Text>Web Developer</Card.Text>
              <Card.Text>ABC Company</Card.Text>
              <Card.Text>Jan 2020 - Present</Card.Text>
              <Card.Text>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                tempor arcu non nibh consectetur lobortis. Sed ac eros a lorem
                maximus auctor. Suspendisse rutrum risus in ante volutpat
                varius.
              </Card.Text>
              <Card.Title className="text-danger">Work Experience</Card.Title>
              <Card.Text>Web Developer</Card.Text>
              <Card.Text>ABC Company</Card.Text>
              <Card.Text>Jan 2020 - Present</Card.Text>
              <Card.Text>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                tempor arcu non nibh consectetur lobortis. Sed ac eros a lorem
                maximus auctor. Suspendisse rutrum risus in ante volutpat
                varius.
              </Card.Text>
              <Card.Title className="text-danger">Work Experience</Card.Title>
              <Card.Text>Web Developer</Card.Text>
              <Card.Text>ABC Company</Card.Text>
              <Card.Text>Jan 2020 - Present</Card.Text>
              <Card.Text>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                tempor arcu non nibh consectetur lobortis. Sed ac eros a lorem
                maximus auctor. Suspendisse rutrum risus in ante volutpat
                varius.
              </Card.Text>
              <Card.Title className="text-danger">Work Experience</Card.Title>
              <Card.Text>Web Developer</Card.Text>
              <Card.Text>ABC Company</Card.Text>
              <Card.Text>Jan 2020 - Present</Card.Text>
              <Card.Text>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                tempor arcu non nibh consectetur lobortis. Sed ac eros a lorem
                maximus auctor. Suspendisse rutrum risus in ante volutpat
                varius.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}

export default Resume;
