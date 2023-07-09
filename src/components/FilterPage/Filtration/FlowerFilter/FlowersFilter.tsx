import React from 'react';
import { Filter } from '../FilterInterface';
import Checkbox from '../../../UI/Checkbox/Checkbox';
import { getFlowers } from '../../../../utils/FlowersUtils';
import Accordeon from '../../../UI/Accordeon/Accordeon';

function FlowerFilter({
  name,
  filter,
  setFilter,
}: {
  name: string;
  filter: Filter;
  setFilter: (elem: Filter) => void;
}) {
  return (
    <Accordeon name={name}>
      <Checkbox
        name={name}
        options={getFlowers()}
        setFilter={setFilter}
        filter={filter}
      />
    </Accordeon>
  );
}

export default FlowerFilter;
