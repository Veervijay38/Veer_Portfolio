import React, { useState } from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./navbarcomponent.css";
import { CgFileDocument } from "react-icons/cg";
import {
  AiOutlineHome,
  AiOutlineFundProjectionScreen,
  AiOutlineUser,
} from "react-icons/ai";
function NavbarComponent() {
  const [navColour, updateNavbar] = useState(false);
  const [expanded, setExpanded] = useState(false);

  function scrollHandler() {
    if (window.scrollY >= 20) {
      updateNavbar(true);
    } else {
      updateNavbar(false);
    }
  }

  window.addEventListener("scroll", scrollHandler);

  const handleSelect = () => {
    setExpanded(false);
  };

  const handleToggle = () => {
    setExpanded(!expanded);
  };

  const handleLinkClick = () => {
    setExpanded(false);
  };

  return (
    <Navbar
      collapseOnSelect
      expand="lg"
      expanded={expanded}
      fixed="top"
      variant="dark"
      className={navColour ? "sticky" : "navbar"}
    >
      <Container>
        <Navbar.Brand as={Link} to="/" className="NavTitle">
          Veervijaysinh Rana
        </Navbar.Brand>
        <Navbar.Toggle
          onClick={() => handleToggle()}
          aria-controls="responsive-navbar-nav"
        />
        <Navbar.Collapse id="responsive-navbar-nav" className="NavCollapse">
          <Nav onSelect={handleSelect}>
            <Nav.Link as={Link} to="/" exact onClick={handleLinkClick}>
              <AiOutlineHome style={{ marginBottom: "2px" }} /> Home
            </Nav.Link>
            <Nav.Link as={Link} to="/about" exact onClick={handleLinkClick}>
              <AiOutlineUser style={{ marginBottom: "2px" }} /> About
            </Nav.Link>
            <Nav.Link as={Link} to="/project" exact onClick={handleLinkClick}>
              <AiOutlineFundProjectionScreen style={{ marginBottom: "2px" }} />{" "}
              Project
            </Nav.Link>
            <Nav.Link as={Link} to="/resume" exact onClick={handleLinkClick}>
              <CgFileDocument style={{ marginBottom: "2px" }} /> Resume
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavbarComponent;
