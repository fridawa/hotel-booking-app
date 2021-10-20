import React from "react";
import { useState } from "react";
import { Collapse } from "react-bootstrap";

function Payment() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <input
        type="checkbox"
        onClick={() => setOpen(!open)}
        aria-controls="example-collapse-text-1"
        aria-expanded={open}
        id="card"
      ></input>
      <label for="card">Pay now with credit card</label>
      <Collapse in={open}>
        <div id="example-collapse-text-1">
          Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus
          terry richardson ad squid. Nihil anim keffiyeh helvetica, craft beer
          labore wes anderson cred nesciunt sapiente ea proident.
        </div>
      </Collapse>
    </>
  );
}

export default Payment;
