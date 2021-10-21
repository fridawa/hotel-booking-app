import React from "react";

import { Col } from "react-bootstrap";

import Search from "./Search";
import Quote from "./quote";

// This components dispalys two other components which together make up the home-view
const Home = () => {
  return (
    <>
      <Col className="mt-4 ms-3">
        <Quote />
      </Col>
      <Col className="mt-5">
        <Search />
      </Col>
    </>
  );
};

export default Home;
