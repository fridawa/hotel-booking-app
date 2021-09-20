import React, { useState } from "react";
import data from "./components/data";
import List from "./components/List";
import Search from "./Search";

function App() {
  //importerar datan från data
  const [hotels, setHotels] = useState(data);
  return (
    <main>
      <section className="container">
        <h3>{hotels.length} hotels</h3>
        <Search />
        <div className="row">
          <List hotels={hotels} />
        </div>
      </section>
    </main>
  );
}

export default App;
