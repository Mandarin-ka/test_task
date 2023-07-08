import React, { useState } from 'react';
import { getColors } from '../../../../utils/FlowersUtils';
import { Filter } from '../FilterInterface';
import Accordeon from '../../../UI/Accordeon/Accordeon';
import cl from './ColorFilter.module.css';

function ColorFilter({
  name,
  filter,
  setFilter,
}: {
  name: string;
  filter: Filter;
  setFilter: (elem: Filter) => void;
}) {
  const colors = getColors();
  return (
    <Accordeon name={name}>
      <div className={cl.block}>
        {colors.map((e, i) => (
          <div
            key={i}
            className={
              !filter.color.includes(e) ? cl.color : cl.color + ' ' + cl.active
            }
            style={
              e !== 'white'
                ? { backgroundColor: e }
                : {
                    backgroundColor: e,
                    border: '1px solid #D9D9D9',
                  }
            }
            onClick={() => {
              setFilter({ ...filter, color: e });
            }}
          ></div>
        ))}
      </div>
    </Accordeon>
  );
}

export default ColorFilter;
