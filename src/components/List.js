import React from "react";

const List = ({ hotels }) => {
  return (
    <>
      {hotels.map((hotel) => {
        const { id, name, description, rating, rooms } = hotel;
        return (
          <article className="col-md-4" key={id}>
            <div>
              <h4>{name}</h4>
              <p>{description}</p>
              <p>{rating}</p>

              {rooms.map((r) => {
                console.log(r.firstRoom);
                return <div>{r}</div>;
              })}
            </div>
          </article>
        );
      })}
    </>
  );
};

export default List;
