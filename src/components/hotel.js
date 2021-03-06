import React from "react";

import { useParams } from "react-router";
import { Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";

import data from "./data";
import Search from "./Search";

// This component shows all the data for hotel-details.
// It uses useOarams to get the id from list.js and is therefore able
// to display the correct corresponding data
function Hotel() {
  // Fetches the id sent in url from link.js
  const { id } = useParams();
  // Converts the id from string to integer (comparision didnt work with a string)
  var hotelIdInt = parseInt(id, 10);
  // Matches the id with id from the data to show the right hotel info
  let thisHotel = data.find((prod) => prod.id === hotelIdInt);

  // Displays the hotel with the matching id from data.js
  return (
    <Container fluid>
      <Row className="ms-2 me-2 mt-3 ">
        <Search />
      </Row>
      <div className="hotel-details m-3 p-3">
        <Row>
          <Col xs={6}>
            <h1 className="hotel-heading-2 m-0">{thisHotel.name}</h1>
            <p className="hotel-adress m-0">{thisHotel.adress}</p>
            <p className="hotel-bold m-0">{thisHotel.location}</p>
          </Col>
          <Col xs={{ span: 2, offset: 4 }}>
            <p className="hotel-bold hotel-price d-flex justify-content-end">
              {thisHotel.price}
            </p>
            <div className="d-flex justify-content-end">
              <a href="#roomtypes">
                <button className="btn-book btn btn-dark">Choose Room</button>
              </a>
            </div>
          </Col>
        </Row>
        <Row>
          <Col xs={6}>
            <div className="d-flex flex-wrap justify-content-start ">
              {thisHotel.hotelImg.map((img) => {
                return (
                  <>
                    <Col xs={6}>
                      <img className="details-img p-1" src={img}></img>
                    </Col>
                  </>
                );
              })}
            </div>
          </Col>
          <Col xs={6}>
            <div className="thumb-div">
              <span class="fa-layers fa-fw ">
                <i class="fas fa-thumbs-up rating-thumb"></i>
                <span class="fa-layers-text fa-inverse rating-int">
                  {thisHotel.rating}
                </span>
              </span>
            </div>
            {thisHotel.reviews.slice(0, 3).map((review) => {
              //displays only first 3 reviews
              return (
                <>
                  <p className="pt-2">{review}</p>
                  <hr className="fridas-border"></hr>
                </>
              );
            })}
            <a href="#" className="read-all-link">
              <p className="read-all-link">
                Read all {thisHotel.reviews.length} reviews
              </p>
            </a>
          </Col>
        </Row>
        <Row className="pt-3">
          <p className="hotel-bold hotel-heading">Description</p>
          <p>{thisHotel.description}</p>
        </Row>
        <Row>
          <div>
            <p className="hotel-bold hotel-heading mb-0 pt-3" id="roomtypes">
              Room types
            </p>

            {thisHotel.rooms.map((room) => {
              return (
                <>
                  <Row className="pt-2 pb-4">
                    <Col>
                      <p className="hotel-bold">{room.roomType}</p>
                      <div className="image-a mb-3">
                        <img src={room.bedImg}></img>
                      </div>
                    </Col>
                    <Col>
                      <p className="hotel-bold">Information</p>
                      {room.spec.map((s) => {
                        return (
                          <>
                            <p className="m-0">{s}</p>
                          </>
                        );
                      })}
                    </Col>
                    <Col>
                      <p className="hotel-bold">Accessibility</p>
                      {room.accessibility.map((a) => {
                        return (
                          <>
                            <p className="m-0">{a}</p>
                          </>
                        );
                      })}
                    </Col>
                    <Col>
                      <p className="d-flex justify-content-end hotel-price ">
                        ${room.price}
                      </p>
                      <div className="d-flex justify-content-end ">
                        <Link to={`/booking/`}>
                          <button className="btn-book btn btn-dark ">
                            Book now
                          </button>
                        </Link>
                      </div>
                    </Col>
                    <hr className="fridas-border"></hr>
                  </Row>
                </>
              );
            })}
          </div>
        </Row>
        <div className="pt-4">
          <p className="hotel-bold hotel-heading mb-0 pt-3">Facilities</p>

          {thisHotel.facilites.map((facility) => {
            return (
              <>
                <Row>
                  <Col xs={4} md={3}>
                    <p className="hotel-bold m-0  mb-1">Services</p>
                    {facility.services.map((e) => {
                      return (
                        <>
                          <ul>
                            <li className="m-0">{e}</li>
                          </ul>
                        </>
                      );
                    })}
                  </Col>
                  <Col xs={4} md={3}>
                    <p className="hotel-bold m-0  mb-1">Food</p>
                    {facility.food.map((e) => {
                      return (
                        <>
                          <ul>
                            <li className="m-0">{e}</li>
                          </ul>
                        </>
                      );
                    })}
                  </Col>
                  <Col xs={4} md={3}>
                    <p className="hotel-bold m-0  mb-1">To Do</p>
                    {facility.toDo.map((e) => {
                      return (
                        <ul>
                          <li className="m-0">{e}</li>
                        </ul>
                      );
                    })}
                  </Col>
                  <Col xs={4} md={3}>
                    <p className="hotel-bold m-0 mb-1">Accessibility</p>
                    {facility.accessibility.map((e) => {
                      return (
                        <>
                          <ul>
                            <li className="m-0">{e}</li>
                          </ul>
                        </>
                      );
                    })}
                  </Col>
                  <Col xs={4} md={3}>
                    <p className="hotel-bold m-0  mb-1">Other</p>
                    {facility.other.map((e) => {
                      return (
                        <>
                          <ul>
                            <li className="m-0">{e}</li>
                          </ul>
                        </>
                      );
                    })}
                  </Col>
                </Row>
              </>
            );
          })}
        </div>
      </div>
    </Container>
  );
}

export default Hotel;
