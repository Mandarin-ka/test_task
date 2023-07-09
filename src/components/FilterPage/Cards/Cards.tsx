import React from 'react';
import Card from './Card/Card';
import cl from './Cards.module.css';
import { IFlower } from '../../../API/IFlowers';

function Cards({
  mode,
  cards,
  setCount,
}: {
  mode: string;
  cards: IFlower[];
  setCount: () => void;
}) {
  return (
    <div className={mode === 'block' ? cl.cards__block : cl.cards__ul}>
      {cards.map((e) => (
        <Card mode={mode} key={e.id} card={e} setCount={setCount} />
      ))}
    </div>
  );
}

export default Cards;
