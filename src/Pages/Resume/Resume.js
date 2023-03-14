import React from "react";
import { Container, Row, Col, Card, Image, Button } from "react-bootstrap";
import {
  FaMapMarkerAlt,
  FaEnvelope,
  // FaTimes,
  // FaBars,
  FaRegAddressCard,
  FaHeart,
} from "react-icons/fa";
import { BsBuildings, BsFillAwardFill } from "react-icons/bs";
import { AiOutlineDownload } from "react-icons/ai";
import { GiAutoRepair } from "react-icons/gi";
import { IoSchool } from "react-icons/io5";
import { CgPhone } from "react-icons/cg";
import Particle from "../../Components/Particle";
// import { NavDropdown } from "react-bootstrap";
import Social from "../../Components/Social";
import MyResume from "../../Assets/Veervijaysinh_Rana_Resume.pdf";
import ProfilePic from "../../Assets/ProfilePic.jpeg";

function Resume() {
  // const [isOpen, setIsOpen] = useState(false);

  // const handleToggle = () => {
  //   setIsOpen(!isOpen);
  // };
  return (
    <Container className="mt-4">
      <Particle />
      <Row className="justify-content-center">
        <Col xs={12} sm={4}>
          <Card className="main_card position-fixed">
            <Image src={ProfilePic} fluid className="rounded-circle" />
            <Card.Body>
              <Card.Title>Veervijaysinh Rana</Card.Title>
              <Card.Text>Software Developer</Card.Text>
              <hr />
              <Card.Text>
                <FaMapMarkerAlt />: Stoney creek, ON, Canada
              </Card.Text>
              <Card.Text>
                <FaEnvelope />: virajrana123@gmail.com
              </Card.Text>
              <Card.Text>
                <CgPhone />: +1(289) 439-7949
              </Card.Text>
              <hr />
              <Social />
              <Button variant="primary" href={MyResume} download>
                <AiOutlineDownload /> Download Resume
              </Button>
            </Card.Body>
          </Card>
          {/* <div className="floating-nav-trigger">
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
              className="dropdown"
            >
              <NavDropdown.Item href="#action/1.5">About</NavDropdown.Item>
              <NavDropdown.Item href="#action/1.2">
                Wrok Experience
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/1.3">Skills</NavDropdown.Item>
              <NavDropdown.Item href="#action/1.4">Education</NavDropdown.Item>
            </NavDropdown>
          </div> */}
        </Col>
        <Col xs={12} sm={8} className="scrollable-card">
          <Card className="text-center">
            <Card.Body>
              <Card.Title className="title_text">BACKGROUND</Card.Title>
              <hr />
              <Card.Body>
                <Card.Title
                  id="action/1.1"
                  style={{
                    textAlign: "left",
                    fontFamily: "Gill Sans",
                  }}
                >
                  <FaRegAddressCard /> About
                </Card.Title>
                <hr />
                <Card.Text
                  style={{ textAlign: "left", fontFamily: "Gill Sans" }}
                >
                  I'm a senior React Native developer with 4.9+ years of
                  experience and 1+ years of React JS experience, I am
                  passionate about building high-quality web and mobile
                  applications that meet the needs of end-users and drive
                  business success. Throughout my career, I have honed my skills
                  in developing custom UI components, integrating third-party
                  APIs, and optimizing app performance and scalability.
                </Card.Text>
              </Card.Body>
              <Card.Body>
                <Card.Title
                  id="#action/1.2"
                  style={{
                    textAlign: "left",
                    fontFamily: "Gill Sans",
                  }}
                >
                  <BsBuildings /> Wrok Experience
                </Card.Title>
                <hr />
                <Card.Text style={{ textAlign: "left" }}>
                  <storng className="role">
                    Sr. React Native Developer (Team Lead)
                  </storng>
                  <br />
                  <code className="company">
                    WovVtech technology | Jan 2022 - present
                  </code>
                </Card.Text>
                <Card.Text>
                  <ul className="left-align">
                    <li>
                      Work as a team lead and provide guidance to a working
                      group.
                    </li>
                    <li>
                      As a team lead, I take on the responsibility of leading
                      daily Scrum calls and providing assistance to resolve any
                      project issues that arise.
                    </li>
                    <li>
                      As a key contributor, I successfully implemented Chat and
                      Push Notification features in two distinct applications,
                      enhancing their functionality and overall user experience.
                    </li>
                    <li>
                      I successfully deployed three applications on both the
                      AppStore and Google Play, making them available to users
                      across various platforms.
                    </li>
                    <li>
                      Here are some of the apps that I have worked on:
                      <ul className="font-small">
                        <li>
                          AppSCoT (Android/IOS) - Play Store link:{" "}
                          <a href="https://play.google.com/store/apps/details?id=com.AppSCot92">
                            https://play.google.com/store/apps/details?id=com.AppSCot92
                          </a>
                        </li>
                        <li>
                          Nexus One (Android/IOS) - Play Store link:{" "}
                          <a href=" https://play.google.com/store/apps/details?id=com.nexusmalls.elantenexusone">
                            https://play.google.com/store/apps/details?id=com.nexusmalls.elantenexusone
                          </a>
                        </li>
                        <li>
                          HP Saksham (Android/IOS) - Play Store link:{" "}
                          <a href="https://play.google.com/store/apps/details?id=com.hp.saksham">
                            https://play.google.com/store/apps/details?id=com.hp.saksham
                          </a>
                        </li>
                      </ul>
                    </li>
                  </ul>
                </Card.Text>
                <hr />
                <Card.Text style={{ textAlign: "left" }}>
                  <storng className="role">Sr. React Native Developer</storng>
                  <br />
                  <code className="company">
                    I-Pangram Digital Services LLP | July 2021 - Dec 2021
                  </code>
                </Card.Text>
                <Card.Text>
                  <ul className="left-align">
                    <li>
                      Work across disciplines with team members representing a
                      product, design, web development, and product marketing
                    </li>
                    <li>
                      Testing all applications against software and hardware
                      versions. Provide timely turnaround and documentation of
                      bug fixes during the test cycle.
                    </li>
                    <li>
                      Successfully integrated several modules including
                      react-navigation, react-native-firebase, react-native-iap,
                      MongoDB, SQLite, and react-redux, enhancing the
                      functionality and user experience of the applications I
                      worked on.
                    </li>
                    <li>
                      As a team member, I take responsibility for attending
                      meetings and providing timely updates to clients, ensuring
                      effective communication and collaboration throughout the
                      project lifecycle.
                    </li>
                    <li>
                      I possess knowledge and experience with security and
                      identity management solutions such as OAuth, certificates,
                      and encryption, enabling me to develop secure and robust
                      applications that safeguard user data and privacy.
                    </li>
                    <li>
                      I have extensive experience integrating third-party tools
                      and services into applications, including PubNub, Google
                      Fit, HealthKit, Google Maps, Firebase Services, AWS
                      Services, and Google Cloud Services, as well as various
                      third-party APIs. This expertise allows me to enhance the
                      functionality and features of applications and deliver
                      high-quality, scalable solutions to clients.
                    </li>
                    <li>
                      ResQR (Android/IOS) - Play Store link:{" "}
                      <a href="https://play.google.com/store/apps/details?id=com.resqr">
                        https://play.google.com/store/apps/details?id=com.resqr
                      </a>
                    </li>
                  </ul>
                </Card.Text>
                <hr />
                <Card.Text style={{ textAlign: "left" }}>
                  <storng className="role">React Native Developer</storng>
                  <br />
                  <code className="company">
                    Kalyani Studio Pvt Ltd | Dec 2016 - June 2021
                  </code>
                </Card.Text>
                <Card.Text>
                  <ul className="left-align">
                    <li>
                      As a team member, I actively contributed to the adoption
                      of agile methodologies and effective development best
                      practices within my division, which led to improved
                      product development processes and enhanced team
                      collaboration and efficiency.
                    </li>
                    <li>
                      I have successfully integrated in-app subscription
                      services with RevenueCat, enabling clients to effectively
                      monetize their applications and generate recurring revenue
                      streams.
                    </li>
                    <li>
                      As an AWS developer, I have extensive experience setting
                      up and configuring various AWS services, including
                      DynamoDB, Cognito, S3, Amplify, Identity and Access
                      Management (IAM), and deploying websites through AWS. This
                      expertise enables me to develop scalable and secure
                      applications that leverage the full potential of AWS
                      services.
                    </li>
                    <li>
                      Ability to develop modular, reusable components in
                      Javascript/Typescript.
                    </li>
                    <li>
                      Design and implement new features, create UI, debugging.
                    </li>
                    <li>
                      Gativan (Android/IOS) - Play Store link:{" "}
                      <a href="https://play.google.com/store/apps/details?id=com.KStudio.Gativan">
                        https://play.google.com/store/apps/details?id=com.KStudio.Gativan
                      </a>
                    </li>
                    <li>
                      Developed & Deployed website using ReactJs/AWS link:{" "}
                      <a href="https://www.gativan.in/">
                        https://www.gativan.in
                      </a>
                    </li>
                  </ul>
                </Card.Text>
              </Card.Body>
              <Card.Body>
                <Card.Title
                  id="#action/1.3"
                  style={{
                    textAlign: "left",
                    fontFamily: "Gill Sans",
                  }}
                >
                  <GiAutoRepair /> Skills
                </Card.Title>
                <hr />
                <Card.Body style={{ textAlign: "left" }}>
                  <ul className="list-unstyled clear-margin">
                    <li>
                      <storng className="role">Frontend</storng>
                      <div>
                        <span className="label-keyword">
                          <p>React Native / Android / IOS</p>
                        </span>
                        <span className="label-keyword">
                          <p>React Js</p>
                        </span>
                        <span className="label-keyword">
                          <p>HTML / JSX</p>
                        </span>
                        <span className="label-keyword">
                          <p>Javascript / Typescript</p>
                        </span>
                        <span className="label-keyword">
                          <p>Redux / Apollo</p>
                        </span>
                        <span className="label-keyword">
                          <p>SCSS / CSS / BEM / Styled Component</p>
                        </span>
                      </div>
                      <hr />
                      <storng className="role">Devops</storng>
                      <div>
                        <span className="label-keyword">
                          <p>AWS</p>
                        </span>
                        <span className="label-keyword">
                          <p>G Cloud</p>
                        </span>
                        <span className="label-keyword">
                          <p>Azure</p>
                        </span>
                        <span className="label-keyword">
                          <p>MongoDB</p>
                        </span>
                        <span className="label-keyword">
                          <p>Caching</p>
                        </span>
                        <span className="label-keyword">
                          <p>Heroku</p>
                        </span>
                      </div>
                    </li>
                  </ul>
                </Card.Body>
              </Card.Body>
              <Card.Body>
                <Card.Title
                  id="#action/1.4"
                  style={{
                    textAlign: "left",
                    fontFamily: "Gill Sans",
                  }}
                >
                  <IoSchool /> Education
                </Card.Title>
                <hr />
                <Card.Text style={{ textAlign: "left" }}>
                  <storng className="role">
                    Bachelor of Engineering | May 2016
                  </storng>
                  <br />
                  <code className="company">
                    Gujarat Technological University, Ahmedbabd,Gujarat
                  </code>
                </Card.Text>
              </Card.Body>
              <Card.Body>
                <Card.Title
                  id="#action/1.5"
                  style={{
                    textAlign: "left",
                    fontFamily: "Gill Sans",
                  }}
                >
                  <BsFillAwardFill /> Awards
                </Card.Title>
                <hr />
                <Card.Text style={{ textAlign: "left" }}>
                  <storng className="role">Rising Star of the Year</storng>
                  <br />
                  <code className="company">Kalyani Studio (2020)</code>
                </Card.Text>
              </Card.Body>
              <Card.Body>
                <Card.Title
                  id="#action/1.6"
                  style={{
                    textAlign: "left",
                    fontFamily: "Gill Sans",
                  }}
                >
                  <FaHeart /> Interests
                </Card.Title>
                <hr />
                <Card.Text style={{ textAlign: "left" }}>
                  <code className="company">Gaming</code>
                  <br />
                  <code className="company">Football</code>
                  <br />
                  <code className="company">Cricket</code>
                  <br />
                  <code className="company">Tennis</code>
                  <br />
                  <code className="company">Music</code>
                </Card.Text>
              </Card.Body>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}

export default Resume;
