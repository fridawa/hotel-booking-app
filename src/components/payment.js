import React from "react";
import { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";

function Payment() {
  const [selected, setSelected] = useState(1);

  return (
    <div>
      <p id="toggle" className="m-0">
        <span
          onClick={() => setSelected(0)}
          style={
            ({ fontWeight: selected === 0 ? 600 : 400 },
            { backgroundColor: selected === 0 ? "#3b4045" : "#6c757d" })
          } // conditional styling.
          className="btn p-2 mt-2 ms-2 me-2 btn-pay"
        >
          Pay now with credit card{" "}
        </span>
        <span
          onClick={() => setSelected(1)}
          style={
            ({ fontWeight: selected === 1 ? 600 : 400 },
            { backgroundColor: selected === 1 ? "#3b4045" : "#6c757d" })
          } // conditional styling.
          className="btn p-2 mt-2 ms-2 me-2 btn-pay"
        >
          Pay when you arrive at the hotel
        </span>
      </p>

      {selected === 0 && (
        <div id="left">
          <Row className="p-2 ">
            <p className="pt-0 mt-0 asterisk">
              Fields marked with * are required
            </p>

            <form>
              <Row>
                <Col>
                  <label for="cardno">Card number *</label>
                </Col>
              </Row>
              <Row>
                <Col xs={12}>
                  <input type="text" id="cardno"></input>
                </Col>
              </Row>
              <Row>
                <Col>
                  <label for="date">Expiry date *</label>
                </Col>
                <Col>
                  <label for="cvc">CVC/CVV *</label>
                </Col>
              </Row>
              <Row>
                <Col>
                  <input type="text" id="date"></input>
                </Col>
                <Col>
                  <input type="text" id="cvc"></input>
                </Col>
              </Row>
              <Row>
                <Col>
                  <label for="name">Name on card *</label>
                </Col>
              </Row>
              <Row>
                <Col xs={12}>
                  <input type="text" id="name"></input>
                </Col>
              </Row>
            </form>
          </Row>
        </div>
      )}
      {selected === 1 && <div id="right"> </div>}
    </div>
  );
}

export default Payment;
