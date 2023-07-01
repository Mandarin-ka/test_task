import React from "react";
import Checkbox from "../../../UI/Checkbox/Checkbox";
import { getTypes } from "../../../../utils/FlowersUtils";
import { Filter } from "../FilterInterface";

function TypeFilter({
  name,
  setFilter,
  filter,
}: {
  name: string;
  filter: Filter;
  setFilter: (elem: Filter) => void;
}) {
  return (
    <div id="type__filter">
      <Checkbox
        name={name}
        types={getTypes()}
        setFilter={setFilter}
        filter={filter}
      />
    </div>
  );
}

export default TypeFilter;
