import React, { useState } from 'react';
import NumberInput from '../../../UI/NumberInput/NumberInput';
import { Filter } from '../FilterInterface';
import RangeInput from '../../../UI/RangeInput/RangeInput';
import Accordeon from '../../../UI/Accordeon/Accordeon';
import cl from './SizeFilter.module.css';
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
  const [leftPoint, setLeftPoint] = useState(getMinSize());
  const [rightPoint, setRightPoint] = useState(getMaxSize());

  return (
    <Accordeon name={name}>
      <div className={cl.price__number}>
        <NumberInput
          name='высота'
          label='от'
          point={leftPoint < rightPoint ? leftPoint : rightPoint}
          setPoint={leftPoint < rightPoint ? setLeftPoint : setRightPoint}
        />
        <NumberInput
          name='высота'
          label='до'
          point={leftPoint < rightPoint ? rightPoint : leftPoint}
          setPoint={leftPoint < rightPoint ? setRightPoint : setLeftPoint}
        />
      </div>
      <RangeInput
        min={getMinSize()}
        max={getMaxSize()}
        leftPoint={leftPoint}
        rightPoint={rightPoint}
        setLeftPoint={setLeftPoint}
        setRightPoint={setRightPoint}
      />
    </Accordeon>
  );
}

export default SizeFilter;
