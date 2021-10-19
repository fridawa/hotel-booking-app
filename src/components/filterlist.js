import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import ReactSlider from "react-slider";

const FilterList = () => {
  return (
    <>
      <Container className="filterlist-container p-4">
        <Row>
          <div className="h5">Number of stars</div>
          <Row>
            <Col xs={2}>
              <p>
                <FontAwesomeIcon icon="star" />
              </p>
            </Col>
            <Col xs={2}>
              <p>
                <FontAwesomeIcon icon="star" />
              </p>
            </Col>
            <Col xs={2}>
              <p>
                <FontAwesomeIcon icon="star" />
              </p>
            </Col>
            <Col xs={2}>
              <p>
                <FontAwesomeIcon icon="star" />
              </p>
            </Col>
            <Col xs={2}>
              <p>
                <FontAwesomeIcon icon="star-half-alt" />
              </p>
            </Col>
          </Row>

          <hr class="fridas-border"></hr>
        </Row>
        <Row>
          <div className="h5">Price</div>

          <ReactSlider
            className="horizontal-slider"
            thumbClassName="example-thumb"
            trackClassName="example-track"
            ariaValuetext={(state) => `Thumb value ${state.valueNow}`}
            renderThumb={(props, state) => (
              <div {...props}>{state.valueNow}</div>
            )}
          />
          <hr class="fridas-border"></hr>
        </Row>
        <Row>
          <div className="h5">Accessability adapted</div>
          <form action="/action_page.php">
            <input
              type="checkbox"
              id="vehicle1"
              name="vehicle1"
              value="Bike"
            ></input>
            <label for="vehicle1"> I have a bike</label>
            <br></br>
            <input
              type="checkbox"
              id="vehicle2"
              name="vehicle2"
              value="Car"
            ></input>
            <label for="vehicle2"> I have a car</label>
            <br></br>

            <input
              type="checkbox"
              id="vehicle3"
              name="vehicle3"
              value="Boat"
            ></input>
            <label for="vehicle3"> I have a boat</label>
          </form>

          <hr class="fridas-border"></hr>
        </Row>
        <Row>
          <div className="h5">Guest review</div>
          <ReactSlider
            className="horizontal-slider"
            thumbClassName="example-thumb"
            trackClassName="example-track"
            ariaValuetext={(state) => `Thumb value ${state.valueNow}`}
            renderThumb={(props, state) => (
              <div {...props}>{state.valueNow}</div>
            )}
          />{" "}
        </Row>
      </Container>
    </>
  );
};
export default FilterList;
