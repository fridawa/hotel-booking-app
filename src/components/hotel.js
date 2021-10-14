import React from "react";
import { Container, Row, Col } from "react-bootstrap";

const Hotel = ({ hotels }) => {
  return (
    <>
      {hotels.map((hotel) => {
        const { id, roomImg } = hotel;

        return (
          <Container>
            <article key={id}>
              <Row>
                <div className="hotel-img-div d-flex justify-content-start col-12">
                  <div>
                    <img className="hotel-img col-12" src={roomImg} />
                  </div>
                  <div>
                    <img className="hotel-img col-12" src={roomImg} />
                  </div>
                </div>
              </Row>
            </article>
          </Container>
        );
      })}
    </>
  );
};

export default Hotel;
