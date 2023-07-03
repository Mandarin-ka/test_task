import React, { useState } from 'react';
import NumberInput from '../../../UI/NumberInput/NumberInput';
import { Filter } from '../FilterInterface';
import RangeInput from '../../../UI/RangeInput/RangeInput';
import Accordeon from '../../../UI/Accordeon/Accordeon';
import cl from './PriceFilter.module.css';
import { getMaxPrice, getMinPrice } from '../../../../utils/FlowersUtils';

function PriceFilter({
  name,
  filter,
  setFilter,
}: {
  name: string;
  filter: Filter;
  setFilter: (filter: Filter) => void;
}) {
  const [leftPoint, setLeftPoint] = useState(getMinPrice());
  const [rightPoint, setRightPoint] = useState(getMaxPrice());

  return (
    <Accordeon name={name}>
      <div className={cl.size__number}>
        <NumberInput
          name='цена'
          label='от'
          point={leftPoint < rightPoint ? leftPoint : rightPoint}
          setPoint={leftPoint < rightPoint ? setLeftPoint : setRightPoint}
        />
        <NumberInput
          name='цена'
          label='до'
          point={leftPoint < rightPoint ? rightPoint : leftPoint}
          setPoint={leftPoint < rightPoint ? setRightPoint : setLeftPoint}
        />
      </div>
      <RangeInput
        min={getMinPrice()}
        max={getMaxPrice()}
        leftPoint={leftPoint}
        rightPoint={rightPoint}
        setLeftPoint={setLeftPoint}
        setRightPoint={setRightPoint}
      />
    </Accordeon>
  );
}

export default PriceFilter;
