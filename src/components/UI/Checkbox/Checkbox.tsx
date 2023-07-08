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
        />
      ))}
    </div>
  );
}

export default Checkbox;
