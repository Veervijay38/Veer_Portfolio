import React from "react";

import { Row } from "react-bootstrap";
import {
  AiFillGithub,
  AiOutlineTwitter,
  AiFillInstagram,
  AiFillFacebook,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

export const socialLinks = {
  linkedin: "https://www.linkedin.com/in/veervijaysinhrana/",
  github: "https://github.com/Veervijay38",
  instagram: "https://www.instagram.com/_veer_vijay_sinh_",
  facebook: "https://www.facebook.com/viraj.rana38",
  twitter: "https://twitter.com/Virajhrana",
};
const size = "1.5rem";
const SocialLinks = () => {
  return (
    <Row md={6}>
      <a
        href={socialLinks.linkedin}
        style={{ color: "white" }}
        target="_blank"
        rel="noopener noreferrer"
      >
        <FaLinkedinIn size={size} />
      </a>
      <a
        href={socialLinks.github}
        style={{ color: "white" }}
        target="_blank"
        rel="noopener noreferrer"
      >
        <AiFillGithub size={size} />
      </a>
      <a
        href={socialLinks.instagram}
        style={{ color: "white" }}
        target="_blank"
        rel="noopener noreferrer"
      >
        <AiFillInstagram size={size} />
      </a>
      <a
        href={socialLinks.facebook}
        style={{ color: "white" }}
        target="_blank"
        rel="noopener noreferrer"
      >
        <AiFillFacebook size={size} />
      </a>
      <a
        href={socialLinks.twitter}
        style={{ color: "white" }}
        target="_blank"
        rel="noopener noreferrer"
      >
        <AiOutlineTwitter size={size} />
      </a>
    </Row>
  );
};

export default SocialLinks;
