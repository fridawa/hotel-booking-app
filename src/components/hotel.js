import React from "react";
import { useParams } from "react-router";
import { Container, Row, Col } from "react-bootstrap";
import data from "./data";

function Hotel() {
  const { id } = useParams();
  console.log(id);

  var hotelIdInt = parseInt(id, 10);

  let thisHotel = data.find((prod) => prod.id === hotelIdInt);
  console.log(thisHotel);
  const roomimages = thisHotel.roomImg;
  return (
    <Container>
      <div>
        <h1>{thisHotel.name}</h1>
        <h1>{thisHotel.price}</h1>
        <div>
          {roomimages.map((img) => {
            return (
              <>
                <img
                  className="details-img"
                  // style={{ width: "90px" }}
                  src={img}
                ></img>
              </>
            );
          })}
        </div>
      </div>
    </Container>
  );
}

export default Hotel;
