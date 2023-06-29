import React, { useState } from "react";
import cl from "./Card.module.css";
import icon from "./../../../../assets/icons/card_add.svg";
import cl1 from "./CardUl.module.css";

import {
  addFlower,
  hasFlower,
  removeFlower,
} from "../../../../utils/localStorage";
import { IFlower } from "../../../../API/IFlowers";
import Button from "../../../UI/Button/Button";

function Card({
  mode,
  card,
  setCount,
}: {
  mode: string;
  card: IFlower;
  setCount: () => void;
}) {
  const [isFavorite, setIsFavorite] = useState(hasFlower(card));

  function updateFlower() {
    if (isFavorite) {
      removeFlower(card);
      setIsFavorite(false);
      setCount();
    } else {
      addFlower(card);
      setIsFavorite(true);
      setCount();
    }
  }

  if (mode === "block") {
    return (
      <div className={cl.card}>
        <img src={card.thumbnail} alt="img" className={cl.card__img} />
        <h2 className={cl.card__name}>{card.title}</h2>
        <h2 className={cl.card__price}>${card.price.toFixed(2)}</h2>
        <button className={cl.card__play}></button>
        <Button
          onClick={updateFlower}
          className={
            isFavorite ? cl.card__add + " " + cl.card__added : cl.card__add
          }>
          <img src={icon} alt="" />
          <span className={cl.add__text}>
            {isFavorite ? "добавлено" : "добавить"}
          </span>
        </Button>
      </div>
    );
  } else {
    return (
      <div className={cl1.card}>
        <img src={card.thumbnail} alt="img" className={cl1.card__img} />
        <div className={cl1.inf}>
          <h2 className={cl1.card__name}>{card.title}</h2>
          <h2 className={cl1.card__price}>${card.price.toFixed(2)}</h2>
          <Button
            onClick={updateFlower}
            className={
              isFavorite ? cl1.card__add + " " + cl1.card__added : cl1.card__add
            }>
            <img src={icon} alt="" />
            <span className={cl1.add__text}>
              {isFavorite ? "добавлено" : "добавить"}
            </span>
          </Button>
        </div>
        <button className={cl1.card__play}></button>
      </div>
    );
  }
}

export default Card;
