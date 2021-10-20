import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import data from "./data";
import Payment from "./payment";

const Booking = () => {
  return (
    <>
      <Container fluid className="p-2  booking-page">
        <Row className="p-2 border-bottom">
          <Col>
            <h1 className="text-center">Your booking</h1>
          </Col>
        </Row>
        <Row className=" pe-2 ps-2 border-bottom">
          <Col xs={4} className="border-end">
            <Row className="p-2 ">
              <p className="h4">Room information</p>
              {data.slice(0, 1).map((e) => {
                return (
                  <div className="pt-2 pb-2">
                    <p className="hotel-bold">{e.name}</p>
                    <p className="hotel-italic">{e.adress}</p>
                    <p className="hotel-bold">{e.location}</p>
                  </div>
                );
              })}
              <div className="pt-2 pb-2">
                <p>
                  <span className="hotel-bold">Check-in </span>
                  <span>25-10-2021</span>
                </p>
                <p>
                  <span className="hotel-bold">Check-out </span>
                  <span>05-11-2021</span>
                </p>
              </div>
              <div className="pt-2 pb-2">
                <p className="hotel-bold">Number of guests</p>
                <p>2 adults, 0 childs</p>
              </div>
              <div className="pt-2 pb-2">
                <p className="hotel-bold">Deluxe room</p>
                <p>Kind-size bed</p>
                <p>2 adults, 1 child</p>
                <p>40 m²</p>
                <p>Free wi-fi</p>
                <p>All meals included</p>
              </div>
              <div className="d-flex justify-content-between pt-2 pb-2">
                <p className="hotel-bold">Price</p>
                <p className="hotel-heading hotel-bold">$ 350</p>
              </div>
            </Row>
            <Row className="p-2 border-top">
              <p className="h4">Terms and conditions</p>
              <div>
                <p>Free cancellation up to a week before arrival</p>
                <p>You will need a valid ID card for check-in</p>
                <p>No parties are allowed at the hotel</p>
              </div>
            </Row>
          </Col>
          <Col xs={8}>
            <Row className="p-2 border-bottom">
              <p className="h4">Your Information</p>
              <form>
                <Row>
                  <Col>
                    <label for="surname">Surname</label>
                  </Col>
                  <Col>
                    <label for="lastname">Last name</label>
                  </Col>
                </Row>
                <Row>
                  <Col>
                    <input type="text" id="surname"></input>
                  </Col>
                  <Col>
                    <input type="text" id="lastname"></input>
                  </Col>
                </Row>
                <Row>
                  <Col>
                    <label for="email">Email</label>
                  </Col>
                </Row>
                <Row>
                  <Col xs={12}>
                    <input
                      type="text"
                      id="email"
                      className="booking-input"
                    ></input>
                  </Col>
                </Row>
                <Row>
                  <Col>
                    <label for="phone">Phone number</label>
                  </Col>
                </Row>
                <Row>
                  <Col>
                    <input type="text" id="phone"></input>
                  </Col>
                </Row>
              </form>
            </Row>
            <Row className="p-2 border-bottom">
              <p className="h4">Optional services</p>
              <form>
                <Col>
                  <input type="checkbox" id="taxi"></input>
                  <label for="taxi" className="ps-2">
                    Book a taxi for your arrival
                  </label>
                  <p className="hotel-italic ps-4">
                    We assist you with booking a taxi from the airport so you
                    can travel safely and without worries
                  </p>
                </Col>
                <Col>
                  <input type="checkbox" id="dinner"></input>
                  <label for="dinner" className="ps-2">
                    Three course dinner at our excellent restaurant
                  </label>
                  <p className="hotel-italic ps-4">
                    This includes a three course dinner every night of your stay
                    with us. Full menu details can be found at our website two
                    weeks before your visit.
                  </p>
                </Col>
                <Col>
                  <input type="checkbox" id="spa"></input>
                  <label for="spa" className="ps-2">
                    Spa treatment
                  </label>
                  <p className="hotel-italic ps-4">
                    We have a luxurious spa facility with 5 different pools. We
                    also offer massages and other treatments.
                  </p>
                </Col>
              </form>
            </Row>
            <Row className="p-2">
              <p className="h4">Payment method</p>
              <div>
                <Payment />
              </div>
            </Row>
          </Col>
        </Row>
        <Row className="p-2">
          <Col className="d-flex justify-content-center">
            <button className="btn-book btn btn-dark ">
              Confirm your booking
            </button>
          </Col>
        </Row>
        <Row className="p-2">
          <Col>
            <button className="btn  my-btn-small">Go back to view hotel</button>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Booking;
