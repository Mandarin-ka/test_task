import React from "react";
import TypeFilter from "./TypeFilter/TypeFilter";
import { Filter } from "./FilterInterface";
import OccasionFilter from "./OccasionFilter/OccasionFilter";

function Filtration({
  filter,
  setFilter,
}: {
  filter: Filter;
  setFilter: (elem: Filter) => void;
}) {
  return (
    <div className="filtration">
      <TypeFilter name="тип" filter={filter} setFilter={setFilter} />
      <OccasionFilter name="повод" filter={filter} setFilter={setFilter} />
    </div>
  );
}

export default Filtration;
