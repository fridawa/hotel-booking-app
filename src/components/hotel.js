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
  const roomimages = thisHotel.roomImg;
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
            <p>{thisHotel.name}</p>
            <p>{thisHotel.adress}</p>
            <p>{thisHotel.location}</p>
          </Col>
          <Col xs={{ span: 2, offset: 4 }}>
            <p>{thisHotel.price}</p>
            <button>Choose Room</button>
          </Col>
        </Row>
        <Row>
          <Col xs={6}>
            <div>
              {roomimages.map((img) => {
                return (
                  <>
                    <img className="details-img" src={img}></img>
                  </>
                );
              })}
            </div>
          </Col>
          <Col xs={6}>
            <p>{thisHotel.rating}</p>
            <p>{thisHotel.reviews}</p>
          </Col>
        </Row>
        <Row className="pt-3">
          <p>Description</p>
          <p>{thisHotel.description}</p>
        </Row>
        <Row>
          <div>
            {rooms.map((room) => {
              return (
                <>
                  <Row className="pt-4 pb-4">
                    <Col>
                      <p>{room.roomType}</p>
                      <div className="image">
                        <img className="img" src={thisHotel.bedImg}></img>
                      </div>
                    </Col>
                    <Col>
                      <p>Information</p>
                      {room.spec.map((s) => {
                        return (
                          <>
                            <p className="m-0">{s}</p>
                          </>
                        );
                      })}
                    </Col>
                    <Col>
                      <p>Accessibility</p>
                      {room.accessibility.map((a) => {
                        return (
                          <>
                            <p className="m-0">{a}</p>
                          </>
                        );
                      })}
                    </Col>
                    <Col>
                      <p>{room.price}</p>
                      <button>Book now</button>
                    </Col>
                  </Row>
                </>
              );
            })}
          </div>
        </Row>
        <div className="pt-4">
          {facilities.map((facility) => {
            return (
              <>
                {" "}
                <Row>
                  <Col>
                    <p>Services</p>
                    {facility.services.map((s) => {
                      return (
                        <>
                          <p className="m-0">{s}</p>
                        </>
                      );
                    })}
                  </Col>
                  <Col>
                    <p>Food</p>
                    {facility.food.map((f) => {
                      return (
                        <>
                          <p className="m-0">{f}</p>
                        </>
                      );
                    })}
                  </Col>
                  <Col>
                    <p>To Do</p>
                    {facility.toDo.map((t) => {
                      return (
                        <>
                          <p className="m-0">{t}</p>
                        </>
                      );
                    })}
                  </Col>
                  <Col>
                    <p>Accessibility</p>
                    {facility.accessibility.map((a) => {
                      return (
                        <>
                          <p className="m-0">{a}</p>
                        </>
                      );
                    })}
                  </Col>
                  <Col>
                    <p>Other</p>
                    {facility.other.map((o) => {
                      return (
                        <>
                          <p className="m-0">{o}</p>
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
