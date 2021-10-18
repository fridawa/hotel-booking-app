import React from "react";
import { useParams } from "react-router";
import data from "./data";

function Hotel() {
  const { id } = useParams();
  console.log(id);

  var hotelIdInt = parseInt(id, 10);

  let thisHotel = data.find((prod) => prod.id === hotelIdInt);
  console.log(thisHotel);

  return (
    <div>
      <h1>{thisHotel.name}</h1>
      <h1>{thisHotel.price}</h1>
      <p></p>
    </div>
  );
}

export default Hotel;
