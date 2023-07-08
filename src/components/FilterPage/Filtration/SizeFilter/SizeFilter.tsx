import React from 'react';
import NumberInput from '../../../UI/NumberInput/NumberInput';
import { Filter } from '../FilterInterface';
import Accordeon from '../../../UI/Accordeon/Accordeon';
import cl from './SizeFilter.module.css';
import RangeInput from '../../../UI/RangeInput/RangeInput';
import { getMaxSize, getMinSize } from '../../../../utils/FlowersUtils';

function SizeFilter({
  name,
  filter,
  setFilter,
}: {
  name: string;
  filter: Filter;
  setFilter: (filter: Filter) => void;
}) {
  return (
    <Accordeon name={name}>
      <div className={cl.price__number}>
        <NumberInput label='от' value={filter.sizeMin} name='высота' />
        <NumberInput label='до' value={filter.sizeMax} name='высота' />
      </div>
      <RangeInput
        range
        min={getMinSize()}
        max={getMaxSize()}
        value={[filter.sizeMin, filter.sizeMax]}
        onChange={(e) =>
          typeof e !== 'number'
            ? setFilter({ ...filter, sizeMin: e[0], sizeMax: e[1] })
            : new Error('Values is not incremental')
        }
      />
    </Accordeon>
  );
}

export default SizeFilter;
