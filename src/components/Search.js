import React, { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";

import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { addDays } from "date-fns";

import { DateRange } from "react-date-range";
import "react-date-range/dist/styles.css"; // main css file
import "react-date-range/dist/theme/default.css"; // theme css file

import { Collapse, Button } from "react-bootstrap";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Search = () => {
  //om jag ska göra en riktig sökfunktion
  const [searchTerm, setSearchTerm] = useState("");
  // function searchFunction(event) {
  //   console.log(event.target.value);
  // }

  //för checkincheckout datepicker
  const [checkInDate, setCheckInDate] = useState(new Date());
  const [checkOutDate, setCheckOutDate] = useState(addDays(new Date(), 7));

  const [state, setState] = useState([
    {
      startDate: new Date(),
      endDate: null,
      key: "selection",
    },
  ]);

  //för att lyckas toggla daterange
  const [open, setOpen] = useState(false);

  return (
    <div>
      <Container fluid className="searchbar m-0 p-0">
        <Row className="p-2">
          <Col md={3} className=" border">
            <Row>
              <Col md={2}>
                <p>
                  <FontAwesomeIcon icon="map-marker-alt" />
                </p>
              </Col>
              <Col md={10}>
                <input
                  className=" border-0 text-center pt-2 pb-2 ps-3"
                  type="search"
                  placeholder="Search for location"
                  // onChange={(event) => {
                  //   setSearchTerm(event.target.value);
                  // }}
                  // onKeyUp={searchFunction}
                ></input>
              </Col>
            </Row>
          </Col>
          <Col md={4}>
            <Row>
              <Col md={2}>
                <p className="">
                  <FontAwesomeIcon icon="calendar" />
                </p>
              </Col>
              <Col md={5}>
                <DatePicker
                  className="border-0 text-lg-center text-sm-left pt-2 pb-2"
                  selected={checkInDate}
                  onChange={(date) => setCheckInDate(date)}
                  minDate={new Date()}
                  showPreview={true}
                />
              </Col>
              <Col md={5}>
                <DatePicker
                  className="border-0 text-lg-center text-sm-left pt-2 pb-2 "
                  selected={checkOutDate}
                  onChange={(date) => setCheckOutDate(date)}
                  minDate={checkInDate}
                />
              </Col>
            </Row>
          </Col>
          <Col md={3}>
            <Row>
              <Col md={2}>
                <p>
                  <FontAwesomeIcon icon="user-friends" />
                </p>
              </Col>
              <Col md={10}>
                <input
                  className=" border-0 text-center pt-2 pb-2"
                  type="search"
                  placeholder="Number of guests"
                  // onChange={(event) => {
                  //   setSearchTerm(event.target.value);
                  // }}
                  // onKeyUp={searchFunction}
                ></input>
              </Col>
            </Row>
          </Col>
          <Col md={2}>
            <button type="button" className="my-btn">
              Search
            </button>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Search;
