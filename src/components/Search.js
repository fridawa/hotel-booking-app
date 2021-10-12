import React, { useState } from "react";

const Search = () => {
  const [searchTerm, setSearchTerm] = useState("");

  // function searchFunction(event) {
  //   console.log(event.target.value);
  // }

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
        <button>Search</button>
      </div>
    </div>
  );
};

export default Search;
