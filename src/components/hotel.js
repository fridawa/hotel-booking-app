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

  // Displays the hotel with the matching id from data.js
  return (
    <Container fluid className="m-2">
      <Row>
        <Search />
      </Row>
      <Row className="hotel-details ">
        <div>
          <h1>{thisHotel.name}</h1>
          <h1>{thisHotel.price}</h1>
          <div>
            {roomimages.map((img) => {
              return (
                <>
                  <img className="details-img" src={img}></img>
                </>
              );
            })}
          </div>
        </div>
      </Row>
    </Container>
  );
}

export default Hotel;
