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

function App() {
  //importerar datan från data
  const [hotels, setHotels] = useState(data);
  console.log(hotels);
  return (
    <main>
      <section className="container">
        <Header />
        <Search />
        <div className="row">
          <Hotel hotels={hotels} />
          <List hotels={hotels} />
        </div>
        <Footer />
      </section>
    </main>
  );
}

export default App;
