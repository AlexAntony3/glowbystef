import React from "react";
import styles from "../styles/Footer.module.css";
import { Col, Container, Row } from "react-bootstrap";
import gbslogo from "../assets/gbslogo.png";

const Footer = () => {
  return (
      <Container fluid className={`${styles.Footer}`}>
        <Row>
          <Col>
            <img src={gbslogo} alt="logo" height="100" />
          </Col>
          <Col className="text-center">
            
            <span>
              <i className="fa-solid fa-phone fa-sm"></i>+ 44 (0) 191 242 4242
            <br/>
            
              <i className="fa-solid fa-location-dot fa-sm"></i>
              Salon Park Way, Newcastle, NE99 9ER, UK
              <br/>
              <i className="fa-solid fa-envelope fa-sm"></i>
              info@glowbystef.co.uk
            </span>
          </Col>
          <Col className="text-center">
            <h5>
              <a
                href="https://www.facebook.com"
                aria-label="link to my facebook page"
                target="_blank"
                rel="noreferrer"
              >
                <i className="fa-brands fa-facebook"></i>
              </a>
              <a
                href="https://www.instagram.com"
                aria-label="link to my instagram page"
                target="_blank"
                rel="noreferrer"
              >
                <i className="fa-brands fa-instagram"></i>
              </a>
              <a
                href="https://www.twitter.com"
                aria-label="link to my twitter page"
                target="_blank"
                rel="noreferrer"
              >
                <i className="fa-brands fa-twitter"></i>
              </a>
              <a
                href="https://github.com/AlexAntony3"
                aria-label="link to my github page"
                target="_blank"
                rel="noreferrer"
              >
                <i className="fa-brands fa-github"></i>
              </a>
            </h5>
          </Col>
        </Row>
      </Container>
  );
};

export default Footer;
