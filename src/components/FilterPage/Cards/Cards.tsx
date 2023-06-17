import React from "react";
import arr from "./../../../API/flowers.json";
import Card from "../Card/Card";
import cl from "./Cards.module.css";

function Cards() {
  return (
    <div className={cl.cards}>
      {arr.map(e => (
        <Card key={e.id} card={e} />
      ))}
    </div>
  );
}

export default Cards;
