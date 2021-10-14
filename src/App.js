import React, { useState } from "react";

import data from "./components/data";

import List from "./components/List";
import Search from "./components/Search";
import Header from "./components/header";
import Footer from "./components/footer";
import FilterList from "./components/filterlist";

import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";

import { Container, Row, Col } from "react-bootstrap";

function App() {
  //importerar datan från data
  const [hotels, setHotels] = useState(data);
  console.log(hotels);

  return (
    <main>
      <Container fluid>
        <Row>
          <Header />
        </Row>
        <Row>
          <Search />
        </Row>
        <Row className="m-2">
          <Col sm={3} className="m-0">
            <FilterList />
          </Col>
          <Col sm={9} className="p-0 m-0">
            <List hotels={hotels} />
          </Col>
        </Row>
        <Row>
          <Footer />
        </Row>
      </Container>
    </main>
  );
}

export default App;
