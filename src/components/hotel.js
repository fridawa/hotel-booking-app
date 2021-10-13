import React from "react";

const Hotel = ({ hotels }) => {
  return (
    <>
      {hotels.map((hotel) => {
        const { id, roomImg } = hotel;

        return (
          <article className="container" key={id}>
            <div className="row">
              <div className="hotel-img-div d-flex justify-content-start col-12">
                <div>
                  <img className="hotel-img col-12" src={roomImg} />
                </div>
                <div>
                  <img className="hotel-img col-12" src={roomImg} />
                </div>
              </div>
            </div>
          </article>
        );
      })}
    </>
  );
};

export default Hotel;
