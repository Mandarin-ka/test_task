import React from 'react';
import NumberInput from '../../../UI/NumberInput/NumberInput';
import { Filter } from '../FilterInterface';
import Accordeon from '../../../UI/Accordeon/Accordeon';
import cl from './PriceFilter.module.css';
import { getMaxPrice, getMinPrice } from '../../../../utils/FlowersUtils';
import RangeInput from '../../../UI/RangeInput/RangeInput';

function PriceFilter({
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
      <div className={cl.size__number}>
        <NumberInput label='от' name='цена' value={filter.priceMin} />
        <NumberInput label='до' name='цена' value={filter.priceMax} />
      </div>
      <RangeInput
        range
        min={getMinPrice()}
        max={getMaxPrice()}
        value={[filter.priceMin, filter.priceMax]}
        onChange={(e) =>
          typeof e !== 'number'
            ? setFilter({ ...filter, priceMin: e[0], priceMax: e[1] })
            : new Error('Values is not incremental')
        }
      />
    </Accordeon>
  );
}

export default PriceFilter;
