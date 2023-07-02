import React from "react";
import cl from "./InputCheck.module.css";

function InputCheck({
  blockName,
  name,
  point,
}: {
  blockName: string;
  name: string;
  point: number;
}) {
  return (
    <div className={cl.block}>
      <input
        type="checkbox"
        name=""
        id={"t" + blockName + point}
        className={cl.checkbox__input}
      />
      <label htmlFor={"t" + blockName + point} className={cl.checkbox__label}>
        {name}
      </label>
    </div>
  );
}

export default InputCheck;
