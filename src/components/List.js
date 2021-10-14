import React from "react";
import { Container, Row, Col } from "react-bootstrap";

const List = ({ hotels }) => {
  return (
    <>
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
          roomImg,
        } = hotel;

        // const roomList = rooms ? (
        //   rooms.map((room) => <div>{room}</div>)
        // ) : (
        //   <div></div>
        // );
        return (
          <Container className="p-0 m-0">
            <article className=" hotel-search-container mb-3 " key={id}>
              <Row>
                <Col sm={3}>
                  <div className="image">
                    <img className="img p-2" src={roomImg} />
                  </div>
                </Col>
                <Col sm={3}>
                  <p className="m-0">{name}</p>
                  <p className="m-0">{adress}</p>
                  <p className="m-0">{location}</p>
                  <p className="m-0">{locationFacts.join(" ")} </p>
                </Col>
                <Col sm={3}>
                  {rooms.map((room) => {
                    console.log(room);
                    return (
                      <>
                        <p className="m-0">{room.roomType}</p>
                      </>
                    );
                  })}
                  <p className="m-0">{faclitiesShort}</p>
                </Col>
                <Col sm={3}>
                  <p className="m-0">{rating}</p>
                  <p className="m-0">Number of reviews</p>
                  <p className="m-0">{price}</p>
                  <button type="button" className="btn-book btn btn-dark">
                    Book Now
                  </button>
                </Col>
              </Row>
            </article>
          </Container>
        );
      })}
    </>
  );
};

export default List;
