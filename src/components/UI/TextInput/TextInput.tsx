import React from "react";
import cl from "./TextInput.module.css";
import img from "./../../../assets/icons/Search.svg";

function TextInput({
  type,
  placeholder,
  setValue,
}: {
  type: string;
  placeholder: string;
  setValue: (elem: string) => void;
}) {
  return (
    <div className={cl.text__block}>
      {type === "search" && (
        <img src={img} alt="search" className={cl.text__icon} />
      )}
      <input
        type="text"
        placeholder={placeholder}
        className={cl.text__input}
        maxLength={60}
        onChange={e => {
          e.preventDefault();
          setValue(e.target.value);
        }}
      />
    </div>
  );
}

export default TextInput;
