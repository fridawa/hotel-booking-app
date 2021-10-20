import React, { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";

import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { addDays } from "date-fns";

import { Link } from "react-router-dom";

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
      <Container className="searchbar ps-5 pe-5 pt-3 pb-3">
        <Row className="p-2">
          <Col md={3} className="fridas-border-1">
            <Row>
              <Col md={2} className="fridas-icon-1 ">
                <p className="pt-2 m-0 text-center">
                  <FontAwesomeIcon icon="map-marker-alt" />
                </p>
              </Col>
              <Col md={10} className="p-0 p">
                <input
                  className=" border-0 pt-2 pb-2 ps-3"
                  type="search"
                  placeholder="Where do you want to go?"
                  style={{ width: "120%" }}
                ></input>
              </Col>
            </Row>
          </Col>
          <Col md={5} className="fridas-border-2">
            <Row>
              <Col md={1} className="fridas-icon-2">
                <p className="pt-2 m-0 text-center">
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
          <Col md={3} className="fridas-border-3">
            <Row>
              <Col md={2} className="fridas-icon-2">
                <p className="pt-2 m-0 text-center">
                  <FontAwesomeIcon icon="user-friends" />
                </p>
              </Col>
              <Col md={10}>
                <input
                  className=" border-0  pt-2 pb-2"
                  type="search"
                  placeholder="Number of guests"
                  style={{ width: "100%" }}
                ></input>
              </Col>
            </Row>
          </Col>
          <Col md={1} className="p-2 fridas-btn">
            <Link to={"/list/"}>
              <button type="button" className="my-btn">
                Search
              </button>
            </Link>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Search;
