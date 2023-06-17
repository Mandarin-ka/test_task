import React from "react";
import cl from "./Card.module.css";
import icon from "./../../../assets/icons/card_add.svg";
import { addFlower } from "../../../utils/localStorage";
import { IFlower } from "../../../API/IFlowers";

function Card({ card }: { card: IFlower }) {
  return (
    <div className={cl.card}>
      <img src={card.thumbnail} alt="img" className={cl.card__img} />
      <h2 className={cl.card__name}>{card.title}</h2>
      <h2 className={cl.card__price}>${card.price.toFixed(2)}</h2>
      <button className={cl.card__play}></button>
      <button className={cl.card__add} onClick={() => addFlower(card)}>
        <img src={icon} alt="" />
        <span className={cl.add__text}>добавить</span>
      </button>
    </div>
  );
}

export default Card;
