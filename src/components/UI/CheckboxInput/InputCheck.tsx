import React from 'react';
import cl from './InputCheck.module.css';
import { Filter } from '../../FilterPage/Filtration/FilterInterface';

function InputCheck({
  blockName,
  name,
  point,
  filter,
  setFilter,
  check,
}: {
  blockName: string;
  name: string;
  point: number;
  filter: Filter;
  setFilter: (filter: Filter) => void;
  check?: boolean;
}) {
  function change(e: React.ChangeEvent<HTMLInputElement>) {
    if (e.target.checked) {
      if (blockName.toLowerCase() === 'тип')
        setFilter({ ...filter, type: [...filter.type, e.target.value] });
      if (blockName.toLowerCase() === 'повод')
        setFilter({ ...filter, reason: [...filter.reason, e.target.value] });
      if (blockName.toLowerCase() === 'основной цветок')
        setFilter({ ...filter, flower: [...filter.flower, e.target.value] });
    } else {
      if (blockName.toLowerCase() === 'тип')
        setFilter({
          ...filter,
          type: filter.type.filter((type) => type !== e.target.value),
        });
      if (blockName.toLowerCase() === 'повод')
        setFilter({
          ...filter,
          reason: filter.reason.filter((reason) => reason !== e.target.value),
        });
      if (blockName.toLowerCase() === 'основной цветок')
        setFilter({
          ...filter,
          flower: filter.flower.filter((fl) => fl !== e.target.value),
        });
    }
  }

  return (
    <div className={cl.block}>
      <input
        type='checkbox'
        name=''
        id={'t' + blockName + point}
        className={cl.checkbox__input}
        onChange={change}
        value={name}
        checked={check}
      />
      <label htmlFor={'t' + blockName + point} className={cl.checkbox__label}>
        {name}
      </label>
    </div>
  );
}

export default InputCheck;
