import React from 'react';
import Checkbox from '../../../UI/Checkbox/Checkbox';
import { getOccasions } from '../../../../utils/FlowersUtils';
import { Filter } from '../FilterInterface';
import Accordeon from '../../../UI/Accordeon/Accordeon';

function OccasionFilter({
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
        options={getOccasions()}
        setFilter={setFilter}
        filter={filter}
      />
    </Accordeon>
  );
}

export default OccasionFilter;
