import React from "react";
import { Container, Row, Col } from "react-bootstrap";

// Component for quote displayed at the home-view.
// This is a separate component for easier access to it when wanting to change quote
const Quote = () => {
  return (
    <>
      <Container fluid>
        <Row>
          <Col>
            <p className="ps-4 pt-4 pb-0 m-0 quote quote-italic">Let's find</p>
            <p className="ps-5 pt-0 pb-3 m-0 quote quote-bigger">
              your new adventure
            </p>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Quote;
