import React, { useState } from 'react';
import cl from './RangeInput.module.css';

function RangeInput({
  min,
  max,
  leftPoint,
  rightPoint,
  setLeftPoint,
  setRightPoint,
}: {
  min: number;
  max: number;
  leftPoint: number;
  rightPoint: number;
  setLeftPoint: (elem: number) => void;
  setRightPoint: (elem: number) => void;
}) {
  const inputL = (e: React.ChangeEvent<HTMLInputElement>) => {
    setLeftPoint(+e.target.value);
  };

  const inputR = (e: React.ChangeEvent<HTMLInputElement>) => {
    setRightPoint(+e.target.value);
  };

  return (
    <div className={cl.block}>
      <div
        className={cl.progress}
        style={
          leftPoint < rightPoint
            ? {
                left: `${((leftPoint - min) / (max - min)) * 100}% `,
                right: `${100 - ((rightPoint - min) / (max - min)) * 100}%`,
              }
            : {
                left: `${((rightPoint - min) / (max - min)) * 100}% `,
                right: `${100 - ((leftPoint - min) / (max - min)) * 100}%`,
              }
        }
      ></div>
      <input
        type='range'
        name=''
        id=''
        min={min}
        max={max}
        value={leftPoint}
        onChange={inputL}
      />
      <input
        type='range'
        name=''
        id=''
        min={min}
        max={max}
        value={rightPoint}
        onChange={inputR}
      />
    </div>
  );
}

export default RangeInput;
