import React from "react";

const List = ({ hotels }) => {
  return (
    <>
      {hotels.map((hotel) => {
        const { id, name, description } = hotel;
        return (
          <article className="col-md-4" key={id}>
            <div>
              <h4>{name}</h4>
              <p>{description}</p>
            </div>
          </article>
        );
      })}
    </>
  );
};

export default List;
