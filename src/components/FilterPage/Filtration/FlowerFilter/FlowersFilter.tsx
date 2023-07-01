import React from "react";
import { Filter } from "../FilterInterface";
import Checkbox from "../../../UI/Checkbox/Checkbox";
import { getFlowers } from "../../../../utils/FlowersUtils";

function FlowerFilter({
  name,
  filter,
  setFilter,
}: {
  name: string;
  filter: Filter;
  setFilter: (elem: Filter) => void;
}) {
  return (
    <div id="type__filter">
      <Checkbox
        name={name}
        options={getFlowers()}
        setFilter={setFilter}
        filter={filter}
      />
    </div>
  );
}

export default FlowerFilter;
