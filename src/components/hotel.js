import React from "react";
import { useParams } from "react-router";
import data from "./data";

function Hotel() {
  const { hotelsId } = useParams();
  const thisProduct = data.find((prod) => prod.id === hotelsId);
  console.log(hotelsId);
  console.log(thisProduct);

  return (
    <div>
      <h1>{hotelsId}</h1>
    </div>
  );
}

export default Hotel;
