import React, { useState } from "react";

import "react-date-range/dist/styles.css"; // main style file
import "react-date-range/dist/theme/default.css"; // theme css file
import { DateRange } from "react-date-range";
import { addDays } from "date-fns";

import "react-datepicker/dist/react-datepicker.css";
import DatePicker from "react-datepicker";

const Search = () => {
  //om jag ska göra en riktig sökfunktion
  const [searchTerm, setSearchTerm] = useState("");

  //för daterangepicker
  const [date, setDate] = useState([
    {
      startDate: new Date(),
      endDate: addDays(new Date(), 7),

      key: "selection",
    },
  ]);
  //För den enkla datepicker
  const [startDate, setStartDate] = useState(new Date());

  //för checkincheckout datepicker
  const [checkInDate, setCheckInDate] = useState(null);
  const [checkOutDate, setCheckOutDate] = useState(null);

  // function searchFunction(event) {
  //   console.log(event.target.value);
  // }

  // define handler change function on check-in date
  const handleCheckInDate = (date) => {
    setCheckInDate(date);
    setCheckOutDate(null);
  };

  // define handler change function on check-out date
  const handleCheckOutDate = (date) => {
    setCheckOutDate(date);
  };
  return (
    <div>
      <div className="searchbar">
        <input
          type="search"
          placeholder="Search for location"
          onChange={(event) => {
            setSearchTerm(event.target.value);
          }}
          // onKeyUp={searchFunction}
        ></input>
        <input
          type="search"
          placeholder="Search for location"
          onChange={(event) => {
            setSearchTerm(event.target.value);
          }}
          // onKeyUp={searchFunction}
        ></input>{" "}
        <input
          type="search"
          placeholder="Search for location"
          onChange={(event) => {
            setSearchTerm(event.target.value);
          }}
          // onKeyUp={searchFunction}
        ></input>
        <div className="input-container">
          <div>
            <label>Check-in</label>
            <DatePicker
              selected={checkInDate}
              minDate={new Date()}
              onChange={handleCheckInDate}
            />
          </div>
          <div>
            <label>Check-out</label>
            <DatePicker
              selected={checkOutDate}
              minDate={checkInDate}
              onChange={handleCheckOutDate}
            />
          </div>
        </div>
        <DatePicker
          selected={startDate}
          onChange={(date) => setStartDate(date)}
        />
        <DateRange
          onChange={(item) => setDate([item.selection])}
          showSelectionPreview={true}
          moveRangeOnFirstSelection={false}
          months={2}
          ranges={date}
          direction="horizontal"
        />
        <button>Search</button>
      </div>
    </div>
  );
};

export default Search;
