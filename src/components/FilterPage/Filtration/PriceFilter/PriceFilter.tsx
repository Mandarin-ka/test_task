import React from 'react';
import NumberInput from '../../../UI/NumberInput/NumberInput';

function PriceFilter() {
  return (
    <div className='block'>
      <div className='price-number'>
        <NumberInput label='от' />
        <NumberInput label='до' />
      </div>
    </div>
  );
}

export default PriceFilter;
