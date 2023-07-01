import React from "react";
import { getColors } from "../../../../utils/FlowersUtils";
import { Filter } from "../FilterInterface";

function ColorFilter({
  name,
  filter,
  setFilter,
}: {
  name: string;
  filter: Filter;
  setFilter: (elem: Filter) => void;
}) {
  return (
    <div className="color__filter">
      {getColors().map((e, i) => (
        <div key={i} className="color" style={{ backgroundColor: e }}></div>
      ))}
    </div>
  );
}

export default ColorFilter;
