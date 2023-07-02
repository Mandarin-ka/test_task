import React, { useState } from 'react';
import cl from './RangeInput.module.css';
import { getMaxPrice, getMinPrice } from '../../../utils/FlowersUtils';

function RangeInput() {
  const [leftPoint, setLeftPoint] = useState(getMinPrice());
  const [rightPoint, setRightPoint] = useState(getMaxPrice());

  const inputL = (e: React.ChangeEvent<HTMLInputElement>) => {
    setLeftPoint(+e.target.value);
  };

  const inputR = (e: React.ChangeEvent<HTMLInputElement>) => {
    setRightPoint(+e.target.value);
    console.log(leftPoint, rightPoint);
    console.log(100 - (rightPoint / getMaxPrice()) * 100);
  };

  return (
    <div className={cl.block}>
      <div
        className={cl.progress}
        style={
          leftPoint < rightPoint
            ? {
                left: `${(leftPoint / getMaxPrice()) * 100}% `,
                right: `${100 - (rightPoint / getMaxPrice()) * 100}%`,
              }
            : {
                left: `${(rightPoint / getMaxPrice()) * 100}% `,
                right: `${100 - (leftPoint / getMaxPrice()) * 100}%`,
              }
        }
      ></div>
      <input
        type='range'
        name=''
        id=''
        min={getMinPrice()}
        max={getMaxPrice()}
        value={leftPoint}
        onChange={inputL}
      />
      <input
        type='range'
        name=''
        id=''
        min={getMinPrice()}
        max={getMaxPrice()}
        value={rightPoint}
        onChange={inputR}
      />
    </div>
  );
}

export default RangeInput;
