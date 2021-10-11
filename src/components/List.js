import React from "react";

const List = ({ hotels }) => {
  return (
    <>
      {hotels.map((hotel) => {
        const {
          id,
          name,
          description,
          rating,
          rooms,
          locationFacts,
          adress,
          location,
          price,
        } = hotel;

        // const roomList = rooms ? (
        //   rooms.map((room) => <div>{room}</div>)
        // ) : (
        //   <div></div>
        // );

        return (
          <article className="col-md-4" key={id}>
            <div>
              <h4>{name}</h4>
              <h5>{adress}</h5>
              <h5>{location}</h5>
              <p>{description}</p>
              <p>{rating}</p>
              <p>{locationFacts.join(" ")} </p>
              {rooms.map((room) => {
                console.log(room);
                return (
                  <>
                    <p>{room.roomType}</p>
                  </>
                );
              })}
              <p>{price}</p>
              <button>Book Now</button>
            </div>
          </article>
        );
      })}
    </>
  );
};

export default List;
