import React from 'react';
import Checkbox from '../../../UI/Checkbox/Checkbox';
import { getTypes } from '../../../../utils/FlowersUtils';
import { Filter } from '../FilterInterface';
import Accordeon from '../../../UI/Accordeon/Accordeon';

function TypeFilter({
  name,
  setFilter,
  filter,
}: {
  name: string;
  filter: Filter;
  setFilter: (elem: Filter) => void;
}) {
  return (
    <Accordeon name={name}>
      <Checkbox
        name={name}
        options={getTypes()}
        setFilter={setFilter}
        filter={filter}
      />
    </Accordeon>
  );
}

export default TypeFilter;
