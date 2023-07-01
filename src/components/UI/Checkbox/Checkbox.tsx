import React from "react";
import cl from "./Checkbox.module.css";
import { Filter } from "../../FilterPage/Filtration/FilterInterface";
import Accordeon from "../Accordeon/Accordeon";
import InputCheck from "../InputCheck/InputCheck";

function Checkbox({
  name,
  options,
  filter,
  setFilter,
}: {
  name: string;
  options: string[];
  filter: Filter;
  setFilter: (elem: Filter) => void;
}) {
  return (
    <div className={cl.checkbox}>
      <Accordeon name={name}>
        <InputCheck blockName={name} name="все" point={-1} />
        {options.map((e, i) => (
          <InputCheck key={i} blockName={name} name={e} point={i} />
        ))}
      </Accordeon>
    </div>
  );
}

export default Checkbox;
