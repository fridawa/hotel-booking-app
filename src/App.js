import React, { useState } from "react";

import data from "./components/data";

import List from "./components/List";
import Search from "./components/Search";
import Header from "./components/header";
import Footer from "./components/footer";
import Hotel from "./components/hotel";

import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";

import { Container, Row, Col } from "react-bootstrap";

import { Switch, Route, Redirect } from "react-router-dom";

import { library } from "@fortawesome/fontawesome-svg-core";

import {
  faStar,
  faStarHalfAlt,
  faMapMarkerAlt,
  faCalendar,
  faUserFriends,
} from "@fortawesome/free-solid-svg-icons";

library.add(faStar, faStarHalfAlt, faMapMarkerAlt, faCalendar, faUserFriends);

function App() {
  //importerar datan från data
  const [hotels, setHotels] = useState(data);

  return (
    <main>
      <Header />
      <Search />

      <Switch>
        <Route path="/list" render={() => <List hotels={hotels} />}></Route>
        <Route path="/hotel/:id" component={Hotel}></Route>
      </Switch>

      <Footer />
    </main>
  );
}

export default App;
