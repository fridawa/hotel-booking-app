import React from "react";

import { Container, Row, Col } from "react-bootstrap";

import ReactSlider from "react-slider";
import { Rating } from "react-simple-star-rating";

import { useState } from "react";

// This component is a filter menu that is displayed on the same view
// as the search-results (list.js)
// The functionality doesnt work as of now, but the slider and star-rating are click-able
const FilterList = () => {
  // useState for star rating
  const [rating, setRating] = useState(4);
  // function for star rating
  const handleRating = (rate) => {
    setRating(rate);
  };
  return (
    <>
      <Container className="filterlist-container p-4">
        <Row className="">
          <div className="h5">Rating </div>
          <Rating
            onClick={handleRating}
            ratingValue={rating}
            className="pb-3"
          />
          <hr className="fridas-border"></hr>
        </Row>
        <Row>
          <div className="h5 pt-3">
            Price <span className="review-span">$0 - $500+</span>
          </div>

          {/* Slider component that displays 2 values for the user to set an amount*/}
          <ReactSlider
            className="horizontal-slider"
            thumbClassName="example-thumb"
            trackClassName="example-track"
            defaultValue={[0, 250]}
            min="0"
            max="500"
            ariaLabel={["Lower thumb", "Upper thumb"]}
            ariaValuetext={(state) => `Thumb value ${state.valueNow}`}
            renderThumb={(props, state) => (
              <div {...props}>${state.valueNow}</div>
            )}
          />
          <hr className="fridas-border"></hr>
        </Row>
        <Row>
          <div className="h5 pt-3">Accessability adapted</div>
          <form className="pb-3">
            <input
              type="checkbox"
              id="lowsink"
              name="Accessability"
              value="lowsink"
            ></input>
            <label for="lowsink" className=" ps-2 pb-1">
              Lowered sink
            </label>
            <br></br>
            <input
              type="checkbox"
              id="elevator"
              name="Accessability"
              value="elevator"
            ></input>
            <label for="elevator" className="ps-2 pb-1">
              Elevator
            </label>
            <br></br>
            <input
              type="checkbox"
              id="wheelchair"
              name="Accessability"
              value="wheelchair"
            ></input>
            <label for="wheelchair" className=" ps-2 pb-1">
              Wheelchair accessible rooms
            </label>
            <br></br>

            <input
              type="checkbox"
              id="groundlevel"
              name="Accessability"
              value="groundlevel"
            ></input>
            <label for="groundlevel" className="ps-2 pb-1">
              Facility on ground evel
            </label>
            <br></br>
            <input
              type="checkbox"
              id="alarm"
              name="Accessability"
              value="alarm"
            ></input>
            <label for="alarm" className="ps-2 pb-1">
              Emergency alarm in bathrooms
            </label>
            <br></br>
          </form>

          <hr className="fridas-border"></hr>
        </Row>
        <Row>
          <div className="h5 pt-3">
            Guest review <span className="review-span">0-10</span>
          </div>
          {/* Slider component that displays 2 values for the user to set an amount*/}
          <ReactSlider
            className="horizontal-slider"
            thumbClassName="example-thumb"
            trackClassName="example-track"
            defaultValue={[0, 5]}
            min="0"
            max="10"
            ariaLabel={["Lower thumb", "Upper thumb"]}
            ariaValuetext={(state) => `Thumb value ${state.valueNow}`}
            renderThumb={(props, state) => (
              <div {...props}>{state.valueNow}</div>
            )}
          />
        </Row>
      </Container>
    </>
  );
};
export default FilterList;
