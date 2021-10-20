import React from "react";
import { useParams } from "react-router";
import { Container, Row, Col } from "react-bootstrap";
import data from "./data";
import { Link } from "react-router-dom";
import Search from "./Search";

function Hotel() {
  // Fetches the id sent in url from link.js
  const { id } = useParams();

  // Converts the id from string to integer
  var hotelIdInt = parseInt(id, 10);

  // Matches the id with id from the data to show the right hotel info
  let thisHotel = data.find((prod) => prod.id === hotelIdInt);

  // const for images for clearer syntax inside map function below
  const hotelimages = thisHotel.hotelImg;
  const rooms = thisHotel.rooms;
  const facilities = thisHotel.facilites;

  // Displays the hotel with the matching id from data.js
  return (
    <Container fluid>
      <Row className="ms-2 me-2 mt-3 ">
        <Search />
      </Row>
      <div className="hotel-details m-3 p-3">
        <Row>
          <Col xs={6}>
            <p className="hotel-bold">{thisHotel.name}</p>
            <p className="hotel-adress">{thisHotel.adress}</p>
            <p className="hotel-bold">{thisHotel.location}</p>
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
              {hotelimages.map((img) => {
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
            {thisHotel.reviews.slice(0, 2).map((review) => {
              return (
                <>
                  <p className="pt-2">{review}</p>
                  <hr className="fridas-border"></hr>
                </>
              );
            })}
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

            {rooms.map((room) => {
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
                        <button className="btn-book btn btn-dark ">
                          Book now
                        </button>
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

          {facilities.map((facility) => {
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
