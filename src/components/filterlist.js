import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const FilterList = () => {
  return (
    <>
      <Container className="filterlist-container ps-3 pe-3 pt-2">
        <Row>
          <div className="h5">Number of stars</div>
          <Row>
            <Col>
              <p>
                <FontAwesomeIcon icon="star" />
              </p>
            </Col>
            <Col>
              <p>
                <FontAwesomeIcon icon="star" />
              </p>
            </Col>
            <Col>
              <p>
                <FontAwesomeIcon icon="star" />
              </p>
            </Col>
            <Col>
              <p>
                <FontAwesomeIcon icon="star" />
              </p>
            </Col>
            <Col>
              <p>
                <FontAwesomeIcon icon="star-half-alt" />
              </p>
            </Col>
          </Row>

          <hr class="fridas-border"></hr>
        </Row>
        <Row>
          <div className="h5">Price</div>
          <p>Lite innehåll här</p>
          <hr class="fridas-border"></hr>
        </Row>
        <Row>
          <div className="h5">Accessability adapted</div>
          <p>Lite innehåll här</p>

          <hr class="fridas-border"></hr>
        </Row>
        <Row>
          <div className="h5">Guest review</div>
          <p>Lite innehåll här</p>
        </Row>
      </Container>
    </>
  );
};
export default FilterList;
