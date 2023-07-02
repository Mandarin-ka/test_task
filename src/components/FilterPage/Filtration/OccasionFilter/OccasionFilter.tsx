import React from "react";
import Checkbox from "../../../UI/Checkbox/Checkbox";
import { getOccasions } from "../../../../utils/FlowersUtils";
import { Filter } from "../FilterInterface";

function OccasionFilter({
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
        options={getOccasions()}
        setFilter={setFilter}
        filter={filter}
      />
    </div>
  );
}

export default OccasionFilter;
