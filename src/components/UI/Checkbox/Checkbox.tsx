import React from 'react';
import cl from './Checkbox.module.css';
import { Filter } from '../../FilterPage/Filtration/FilterInterface';
import InputCheck from '../CheckboxInput/InputCheck';

function Checkbox({
  name,
  options,
  filter,
  setFilter,
}: {
  name: string;
  options: string[];
  filter: Filter;
  setFilter: (elem: Filter) => void;
}) {
  function check(e: string) {
    if (name === 'основной цветок') return filter.flower.indexOf(e) > -1;
    if (name === 'повод') return filter.reason.indexOf(e) > -1;
    if (name === 'тип') return filter.type.indexOf(e) > -1;
  }

  return (
    <div className={cl.checkbox}>
      {options.map((e, i) => (
        <InputCheck
          key={i}
          blockName={name}
          name={e}
          point={i}
          filter={filter}
          setFilter={setFilter}
          check={check(e)}
        />
      ))}
    </div>
  );
}

export default Checkbox;
