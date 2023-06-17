import React from "react";
import Header from "./components/Header/Header";
import "./styles/style.css";
import Cards from "./components/FilterPage/Cards/Cards";

function App() {
  return (
    <div className="App">
      <Header count={0} />
      <div className="container">
        <Cards />
      </div>
    </div>
  );
}

export default App;
