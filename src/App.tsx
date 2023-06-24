import React, { useState } from "react";
import Header from "./components/Header/Header";
import "./styles/style.css";
import Cards from "./components/FilterPage/Cards/Cards";
import { getStoragedFlowers } from "./utils/localStorage";

function App() {
  const [favoritesLength, setFavoriteLength] = useState<number>(
    getStoragedFlowers().length
  );
  return (
    <div className="App">
      <Header count={favoritesLength} />
      <div className="container">
        <Cards
          setCount={() => setFavoriteLength(getStoragedFlowers().length)}
        />
      </div>
    </div>
  );
}

export default App;
