import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Logo from "./logo";

const Footer = () => {
  return (
    <>
      <Container fluid>
        <footer className="footer">
          <Row className="pt-3">
            <nav className="navbar">
              <Col sm={4}>
                <ul className="text-center list-unstyled">
                  <li>
                    <a className="nav-link text-light">About</a>
                  </li>
                  <li>
                    <a className="nav-link text-light">Work with us</a>
                  </li>
                </ul>
              </Col>
              <Col sm={4}>
                <ul className="text-center list-unstyled">
                  <li>
                    <a className="nav-link text-light">Support</a>
                  </li>
                  <li>
                    <a className="nav-link text-light">
                      Frequently asked questions
                    </a>
                  </li>
                  <li>
                    <a className="nav-link text-light">Terms of use </a>
                  </li>
                </ul>
              </Col>
              <Col sm={4}>
                <ul className="text-center list-unstyled">
                  <li>
                    <a className="nav-link text-light">Faceboook</a>
                  </li>
                  <li>
                    <a className="nav-link text-light">Twitter</a>
                  </li>
                </ul>
              </Col>
            </nav>
          </Row>
          <Row>
            <Logo />
          </Row>
          <Row className="m-0 pb-4">
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
