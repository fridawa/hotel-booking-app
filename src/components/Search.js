import React, { useState } from "react";

import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { addDays } from "date-fns";

import { DateRange } from "react-date-range";
import "react-date-range/dist/styles.css"; // main css file
import "react-date-range/dist/theme/default.css"; // theme css file

import { Collapse, Button } from "react-bootstrap";

const Search = () => {
  //om jag ska göra en riktig sökfunktion
  const [searchTerm, setSearchTerm] = useState("");
  // function searchFunction(event) {
  //   console.log(event.target.value);
  // }

  //för checkincheckout datepicker
  const [checkInDate, setCheckInDate] = useState(new Date());
  const [checkOutDate, setCheckOutDate] = useState(addDays(new Date(), 7));

  const [state, setState] = useState([
    {
      startDate: new Date(),
      endDate: null,
      key: "selection",
    },
  ]);

  //för att lyckas toggla daterange
  const [open, setOpen] = useState(false);

  return (
    <div>
      {/* <Button
        onClick={() => setOpen(!open)}
        aria-controls="example-collapse-text"
        aria-expanded={open}
      >
        click
      </Button> */}
      {/* <Collapse in={open}>
        <div id="example-collapse-text">
          Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus
          terry richardson ad squid. Nihil anim keffiyeh helvetica, craft beer
          labore wes anderson cred nesciunt sapiente ea proident.
        </div>
      </Collapse> */}

      <div className="searchbar container mt-3">
        <div className="row searchbar-row">
          <input
            className="col-md-3 border border-dark location-search text-center"
            type="search"
            placeholder="Search for location"
            onChange={(event) => {
              setSearchTerm(event.target.value);
            }}
            // onKeyUp={searchFunction}
          ></input>
          <div className="d-flex col-md-2 text-lg-center text-sm-left date-search">
            <DatePicker
              className="border-0 text-lg-center text-sm-left"
              selected={checkInDate}
              onChange={(date) => setCheckInDate(date)}
              minDate={new Date()}
              showPreview={true}
            />
          </div>
          <div className="d-flex col-md-2 text-lg-center text-sm-left date-search">
            <DatePicker
              className="border-0 text-lg-center text-sm-left"
              selected={checkOutDate}
              onChange={(date) => setCheckOutDate(date)}
              minDate={checkInDate}
            />
          </div>
          <input
            className="col-md-3 border border-dark gueast-search text-center"
            type="search"
            placeholder="Number of guests"
            onChange={(event) => {
              setSearchTerm(event.target.value);
            }}
            // onKeyUp={searchFunction}
          ></input>

          <button type="button" className="my-btn col-md-2">
            Search
          </button>
        </div>
      </div>
      {/* DateRange togglar inte tillbaka kalendern */}
      {/* <Collapse in={open}>
        <div id="example-collapse-text">
          <DateRange
            editableDateInputs={true}
            onChange={(item) => setState([item.selection])}
            moveRangeOnFirstSelection={false}
            ranges={state}
            months={2}
            direction="horizontal"
            showSelectionPreview={true}
          />
        </div>
      </Collapse> */}
    </div>
  );
};

export default Search;
