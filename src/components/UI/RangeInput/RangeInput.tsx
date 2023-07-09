import * as React from 'react';
import Slider, { SliderProps } from 'rc-slider';
import './RangeInput.css';

function RangeInput(props: SliderProps) {
  return <Slider {...props} />;
}

export default RangeInput;
