import React from "react";

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
          mainImg,
          roomImg,
        } = hotel;

        // const roomList = rooms ? (
        //   rooms.map((room) => <div>{room}</div>)
        // ) : (
        //   <div></div>
        // );

        return (
          <article className="container" key={id}>
            <div className="d-flex md-justify-content-between">
              <div className="image col-sm-3">
                <img className="img" src={roomImg} />
                <img className="img" src={roomImg} />
              </div>
              <div className="col-sm-3">
                <h4>{name}</h4>
                <h5>{adress}</h5>
                <h5>{location}</h5>
                <p>{locationFacts.join(" ")} </p>
              </div>
              <div className="col-sm-3">
                {rooms.map((room) => {
                  console.log(room);
                  return (
                    <>
                      <p>{room.roomType}</p>
                    </>
                  );
                })}
                <p>{faclitiesShort}</p>
              </div>
              <div className="col-sm-3">
                <p>{rating}</p>
                <p>Number of reviews</p>
                <p>{price}</p>
                <button>Book Now</button>
              </div>
            </div>
          </article>
        );
      })}
    </>
  );
};

export default List;
