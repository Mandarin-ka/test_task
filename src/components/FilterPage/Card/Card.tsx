import React from "react";
import cl from "./Card.module.css";
import icon from "./../../../assets/icons/card_add.svg";

function Card({
  img,
  name,
  price,
}: {
  img: string;
  name: string;
  price: number;
}) {
  return (
    <div className={cl.card}>
      <img src={img} alt="img" className={cl.card__img} />
      <h2 className={cl.card__name}>{name}</h2>
      <h2 className={cl.card__price}>${price.toFixed(2)}</h2>
      <button className={cl.card__play}></button>
      <button className={cl.card__add}>
        <img src={icon} alt="" />
        <span className={cl.add__text}>добавить</span>
      </button>
    </div>
  );
}

export default Card;
