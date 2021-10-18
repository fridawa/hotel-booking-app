import React, { useState } from "react";

// Data
import data from "./components/data";

// Components
import List from "./components/List";
import Header from "./components/header";
import Footer from "./components/footer";
import Hotel from "./components/hotel";
import Home from "./components/Home";

// Styling
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";

// Routing
import { Switch, Route } from "react-router-dom";

// FontAwesome
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
      <div className="everything-but-footer">
        <Header />

        <Switch>
          <Route exact path="/" component={Home}></Route>
          <Route path="/list" render={() => <List hotels={hotels} />}></Route>
          <Route path="/hotel/:id" component={Hotel}></Route>
        </Switch>
      </div>
      <Footer />
    </main>
  );
}

export default App;
