import React, { useState } from "react";
import cl from "./Checkbox.module.css";
import { Filter } from "../../FilterPage/Filtration/FilterInterface";

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
  const [typeState, setTypeState] = useState(false);

  function click(e: React.MouseEvent<HTMLDivElement, MouseEvent>) {
    e.preventDefault();
    setTypeState(!typeState);
    const temp = (e.target as HTMLInputElement).parentNode
      ?.childNodes[1] as HTMLElement;
    temp.style.height = !typeState ? `${temp.scrollHeight}px` : `0`;
  }

  return (
    <div className={cl.checkbox}>
      <div className={cl.name__block} onClick={click}>
        <h2 className={typeState ? cl.name : cl.name + " " + cl.opened}>
          {name}
        </h2>
      </div>
      <div className={typeState ? cl.box + " " + cl.active : cl.box}>
        <div className={cl.block}>
          <input
            type="checkbox"
            name=""
            id={"t" + name}
            className={cl.checkbox__input}
          />
          <label htmlFor={"t" + name} className={cl.checkbox__label}>
            Все
          </label>
        </div>
        {options.map((e, i) => (
          <div className={cl.block} key={i}>
            <input
              type="checkbox"
              name=""
              id={"t" + name + i}
              className={cl.checkbox__input}
            />
            <label htmlFor={"t" + name + i} className={cl.checkbox__label}>
              {e}
            </label>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Checkbox;
