import React from "react";
import { useParams } from "react-router";
import data from "./data";

function Hotel() {
  const { id } = useParams();
  console.log(id);

  let thisHotel = data.find((prod) => prod.id === 2);
  console.log(thisHotel);

  return (
    <div>
      <h1>{thisHotel.name}</h1>
      <p></p>
    </div>
  );
}

export default Hotel;
