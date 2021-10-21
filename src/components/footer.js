import React from "react";

import { Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";

import Logo from "./logo";

// This component is a simple footer that shows on every view.
// It displays some links (that doesnt link anywhere)
// and the logo component is imported.
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
                    <a className="nav-link text-light font-soft">About</a>
                  </li>
                  <li>
                    <a className="nav-link text-light font-soft">
                      Work with us
                    </a>
                  </li>
                </ul>
              </Col>
              <Col sm={4}>
                <ul className="text-center list-unstyled ">
                  <li>
                    <a className="nav-link text-light font-soft">Support</a>
                  </li>
                  <li>
                    <a className="nav-link text-light font-soft">
                      Frequently asked questions
                    </a>
                  </li>
                  <li>
                    <a className="nav-link text-light font-soft">
                      Terms of use{" "}
                    </a>
                  </li>
                </ul>
              </Col>
              <Col sm={4}>
                <ul className="text-center list-unstyled">
                  <li>
                    <a className="nav-link text-light font-soft">Faceboook</a>
                  </li>
                  <li>
                    <a className="nav-link text-light font-soft">Twitter</a>
                  </li>
                </ul>
              </Col>
            </nav>
          </Row>
          <Row>
            <Link to={"/"}>
              <Logo />
            </Link>
          </Row>
          <Row className="m-0 pb-4">
            <p className="text-center text-light footer-copy m-0 p-0 font-soft">
              Copyright 2022
            </p>
          </Row>
        </footer>
      </Container>
    </>
  );
};

export default Footer;
