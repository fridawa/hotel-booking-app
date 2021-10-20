import React from "react";
import { Container, Row, Col } from "react-bootstrap";

import FilterList from "./filterlist";
import Search from "./Search";

import { Link } from "react-router-dom";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const List = ({ hotels }) => {
  return (
    <>
      <Container fluid className="p-0 m-0">
        <Row className="m-4">
          <Search />
        </Row>
        <Row className="ps-3">
          <Col sm={3}>
            <FilterList />
          </Col>
          <Col sm={9}>
            {hotels.map((hotel) => {
              const {
                id,
                name,
                rating,
                rooms,
                locationFacts,
                adress,
                location,
                price,
                faclitiesShort,
                hotelImg,
                reviews,
              } = hotel;

              return (
                <Col sm={12} className="">
                  <article
                    className=" hotel-search-container mb-3 me-3 p-2"
                    key={id}
                  >
                    <Row>
                      <Col sm={3}>
                        <div className="image">
                          {/* Borde vara en .map med en .slice(0,1) för att bara visa första bilden
                          men fick det inte att funka så får se ut såhär sålänge. */}
                          <img className="img " src={hotelImg} />
                        </div>
                      </Col>
                      <Col sm={3}>
                        <p className="m-0 hotel-bold">{name}</p>
                        <p className="m-0 hotel-italic">{adress}</p>
                        <p className="m-0 hotel-bold">{location}</p>
                        {locationFacts.map((fact) => {
                          return (
                            <>
                              <p className="m-0 hotel-italic">{fact}</p>
                            </>
                          );
                        })}
                      </Col>
                      <Col sm={3}>
                        <p className="hotel-bold m-0">Room types</p>
                        {rooms.map((room) => {
                          return (
                            <>
                              <p className="m-0 hotel-italic">
                                {room.roomType}
                              </p>
                            </>
                          );
                        })}
                        <div className="d-flex flex-wrap">
                          {faclitiesShort.map((fac) => {
                            return (
                              <>
                                <p className="d-flex flex-wrap m-1 p-1 hotel-facilities">
                                  {fac}
                                </p>
                              </>
                            );
                          })}
                        </div>
                      </Col>
                      <Col sm={3}>
                        <div className="d-flex justify-content-end thumb-div">
                          <span class="fa-layers fa-fw ">
                            <i class="fas fa-thumbs-up rating-thumb"></i>
                            <span class="fa-layers-text fa-inverse rating-int">
                              {rating}
                            </span>
                          </span>
                        </div>

                        <p className="m-0 hotel-italic d-flex justify-content-end">
                          {reviews.length} reviews
                        </p>
                        <p className="m-0 pt-3 hotel-bold hotel-price  d-flex justify-content-end">
                          {price}
                        </p>
                        <div className="d-flex justify-content-end pt-2">
                          <Link to={`/hotel/${id}`}>
                            <button
                              type="button"
                              className="btn-book btn btn-dark"
                            >
                              Book Now
                            </button>
                          </Link>
                        </div>
                      </Col>
                    </Row>
                  </article>
                </Col>
              );
            })}
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default List;
