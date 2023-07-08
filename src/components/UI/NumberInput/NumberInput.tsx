import React from 'react';
import cl from './NumberInput.module.css';
import { Filter } from '../../FilterPage/Filtration/FilterInterface';

function NumberInput({
  name,
  label,
  value,
}: {
  name: string;
  label: string;
  value: number;
}) {
  return (
    <div className={cl.block}>
      <div className={cl.number}>
        <label htmlFor={name + '_' + label}>{label}</label>
        {name.toLowerCase() === 'цена' && <span className={cl.dollar}>$</span>}
        <input
          type='number'
          name=''
          id={name + '_' + label}
          value={value}
          onBlur={blur}
          disabled
        />
      </div>
    </div>
  );
}

export default NumberInput;
