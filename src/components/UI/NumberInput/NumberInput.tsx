import React, { useState } from 'react';
import cl from './NumberInput.module.css';
import { getMaxPrice, getMinPrice } from '../../../utils/FlowersUtils';

function NumberInput({ label }: { label: string }) {
  const [value, setValue] = useState(
    label === 'от' ? getMinPrice().toString() : getMaxPrice().toString()
  );

  const blur = (e: React.FocusEvent<HTMLInputElement, Element>): void => {
    if (+e.target.value < getMinPrice()) setValue(getMinPrice().toString());
  };

  const change = (e: React.FocusEvent<HTMLInputElement, Element>): void => {
    if (+e.target.value < getMinPrice()) setValue('');
    else if (+e.target.value > getMaxPrice())
      setValue(getMaxPrice().toString());
    else setValue(e.target.value);
  };

  return (
    <div className={cl.block}>
      <label htmlFor={label}>{label.toLowerCase()}</label>
      <input
        type='number'
        name=''
        id={label}
        value={value}
        onBlur={blur}
        onChange={change}
      />
    </div>
  );
}

export default NumberInput;
