import React from 'react';
import cl from './InputCheck.module.css';
import { Filter } from '../../FilterPage/Filtration/FilterInterface';

function InputCheck({
  blockName,
  name,
  point,
  filter,
  setFilter,
}: {
  blockName: string;
  name: string;
  point: number;
  filter: Filter;
  setFilter: (filter: Filter) => void;
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

  function optionHandler(filter: Filter, blockName: string) {
    if (blockName.toLowerCase() === 'тип') {
      return filter.type.length > 1 && filter.type.indexOf('') > -1
        ? filter.type.filter((e) => e !== '')
        : filter.type;
    }
    if (blockName.toLowerCase() === 'повод') {
      return filter.reason.length > 1 && filter.reason.indexOf('') > -1
        ? filter.reason.filter((e) => e !== '')
        : filter.reason;
    }
    if (blockName.toLowerCase() === 'основной цветок')
      return filter.flower.length > 1 && filter.flower.indexOf('') > -1
        ? filter.flower.filter((e) => e !== '')
        : filter.flower;
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
      />
      <label htmlFor={'t' + blockName + point} className={cl.checkbox__label}>
        {name}
      </label>
    </div>
  );
}

export default InputCheck;
