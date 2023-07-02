import React, { useState } from "react";
import Header from "./components/Header/Header";
import "./styles/style.css";
import Cards from "./components/FilterPage/Cards/Cards";
import { getStoragedFlowers } from "./utils/localStorage";
import flowers from "./API/flowers.json";
import Sorting from "./components/FilterPage/Sorting/Sorting/Sorting";
import Arrange from "./components/FilterPage/Sorting/Arrange/Arrange";
import TextInput from "./components/UI/TextInput/TextInput";
import { useCards } from "./hooks/useCards";
import {
  useMaxPrice,
  useMaxSize,
  useMinPrice,
  useMinSize,
} from "./hooks/usePriceSize";
import Checkbox from "./components/UI/Checkbox/Checkbox";
import { getTypes } from "./utils/FlowersUtils";
import TypeFilter from "./components/FilterPage/Filtration/TypeFilter/TypeFilter";
import Filtration from "./components/FilterPage/Filtration/Filtration";

function App() {
  const [sort, setSort] = useState("");
  const [mode, setMode] = useState("block");
  const [favoritesLength, setFavoriteLength] = useState(
    getStoragedFlowers().length
  );
  const [filter, setFilter] = useState({
    query: "",
    type: [""],
    reason: [""],
    color: [""],
    flower: [""],
    priceMin: useMinPrice(flowers),
    priceMax: useMaxPrice(flowers),
    sizeMin: useMinSize(flowers),
    sizeMax: useMaxSize(flowers),
  });

  const cards = useCards(flowers, filter, sort);

  return (
    <div className="App">
      <Header count={favoritesLength} />
      <div className="container">
        <Sorting sort={sort} setSort={setSort} />
        <Arrange mode={mode} setMode={setMode} />
        <TextInput
          type={"search"}
          placeholder="Поиск..."
          value={filter}
          setValue={setFilter}
        />
        <Filtration setFilter={setFilter} filter={filter} />
        <Cards
          mode={mode}
          cards={cards}
          setCount={() => setFavoriteLength(getStoragedFlowers().length)}
        />
      </div>
    </div>
  );
}

export default App;
