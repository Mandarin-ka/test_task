import React, { useState } from 'react';
import cl from './NumberInput.module.css';
import { getMaxPrice, getMinPrice } from '../../../utils/FlowersUtils';
import { Filter } from '../../FilterPage/Filtration/FilterInterface';

function NumberInput({
  name,
  label,
  point,
  setPoint,
}: {
  name: string;
  label: string;
  point: number;
  setPoint: (value: number) => void;
}) {
  const blur = (e: React.FocusEvent<HTMLInputElement, Element>): void => {
    if (+e.target.value < getMinPrice()) {
      setPoint(getMinPrice());
    }
  };

  const change = (e: React.FocusEvent<HTMLInputElement, Element>): void => {
    if (+e.target.value > getMaxPrice()) setPoint(getMaxPrice());
    else setPoint(+e.target.value);
  };

  return (
    <div className={cl.block}>
      <label htmlFor={label}>{label.toLowerCase()}</label>
      {name.toLowerCase() === 'цена' && <span className={cl.dollar}>$</span>}
      <input
        type='number'
        name=''
        id={label}
        value={point}
        onBlur={blur}
        onChange={change}
      />
    </div>
  );
}

export default NumberInput;
