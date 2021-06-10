import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import {
  AiFillGithub,
  AiOutlineTwitter,
  AiFillInstagram,
} from "react-icons/ai";
import { FaLinkedinIn,FaFacebookSquare } from "react-icons/fa";

function Footer() {
  let date = new Date();
  let year = date.getFullYear();
  return (
    <Container fluid className="footer">
      <Row>
        <Col md="4" className="footer-copywright">
          <h3>Designed and Developed by Shivam Ravi</h3>
        </Col>
        <Col md="4" className="footer-copywright">
          <h3>Copyright © {year} SR</h3>
        </Col>
        <Col md="4" className="footer-body">
          <ul className="footer-icons">
            
            
            <li className="social-icons">
              <a
                href="https://linkedin.com/in/shivam-ravi-b4b1161a4"
                style={{ color: "white" }}
              >
                <FaLinkedinIn />
              </a>
            </li>
             <li className="social-icons">
              <a
                href="https://www.facebook.com/shivam.ravi.3/"
                style={{ color: "white" }}
              >
                <FaFacebookSquare />
              </a>
            </li>
            <li className="social-icons">
              <a
                href="https://www.instagram.com/_shivam.official.com_/"
                style={{ color: "white" }}
              >
                <AiFillInstagram />
              </a>
            </li>
          </ul>
        </Col>
      </Row>
    </Container>
  );
}

export default Footer;
