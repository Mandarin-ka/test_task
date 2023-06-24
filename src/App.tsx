import React, { useState } from "react";
import Header from "./components/Header/Header";
import "./styles/style.css";
import Cards from "./components/FilterPage/Cards/Cards";
import { getStoragedFlowers } from "./utils/localStorage";
import flowers from "./API/flowers.json";
import Sorting from "./components/FilterPage/Sorting/Sorting/Sorting";
import { flowersSort } from "./utils/SortingAndArrange";

function App() {
  const [sort, setSort] = useState("");
  const [cards, setCards] = useState(flowersSort(flowers, sort));
  const [favoritesLength, setFavoriteLength] = useState(
    getStoragedFlowers().length
  );

  return (
    <div className="App">
      <Header count={favoritesLength} />
      <div className="container">
        <Sorting sort={sort} setSort={setSort} />
        <Cards
          cards={cards}
          setCount={() => setFavoriteLength(getStoragedFlowers().length)}
        />
      </div>
    </div>
  );
}

export default App;
