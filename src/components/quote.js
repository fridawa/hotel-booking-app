import React from "react";
import { Container, Row, Col } from "react-bootstrap";

const Quote = () => {
  return (
    <>
      <Container fluid>
        <Row>
          <Col>
            <h1 className="ps-4 pt-4 pb-0 m-0 quote">Let's find</h1>
            <h1 className="ps-5 pt-0 pb-3 m-0 quote">your new adventure</h1>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Quote;
