import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Logo from "./logo";

const Footer = () => {
  return (
    <>
      <Container fluid>
        <footer className="footer">
          <Row>
            <nav className="navbar">
              <Col sm={4}>
                <ul className="text-center list-unstyled">
                  <li>
                    <a className="nav-link text-light">Link1</a>
                  </li>
                  <li>
                    <a className="nav-link text-light">Link2</a>
                  </li>
                </ul>
              </Col>
              <Col sm={4}>
                <ul className="text-center list-unstyled">
                  <li>
                    <a className="nav-link text-light">Link1</a>
                  </li>
                  <li>
                    <a className="nav-link text-light">Link2</a>
                  </li>
                </ul>
              </Col>
              <Col sm={4}>
                <ul className="text-center list-unstyled">
                  <li>
                    <a className="nav-link text-light">Link1</a>
                  </li>
                  <li>
                    <a className="nav-link text-light">Link2</a>
                  </li>
                </ul>
              </Col>
            </nav>
          </Row>
          <Row>
            <Logo />
          </Row>
          <Row className="p-0 m-0">
            <p className="text-center text-light footer-copy m-0 p-0">
              Copyright 2022
            </p>
          </Row>
        </footer>
      </Container>
    </>
  );
};

export default Footer;
