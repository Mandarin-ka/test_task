import React from 'react';
import TypeFilter from './TypeFilter/TypeFilter';
import { Filter } from './FilterInterface';
import OccasionFilter from './OccasionFilter/OccasionFilter';
import FlowerFilter from './FlowerFilter/FlowersFilter';
import ColorFilter from './ColorFilter/ColorFilter';
import cl from './Filtration.module.css';
import PriceFilter from './PriceFilter/PriceFilter';
import SizeFilter from './SizeFilter/SizeFilter';
import Button from '../../UI/Button/Button';
import {
  getMaxPrice,
  getMaxSize,
  getMinPrice,
  getMinSize,
} from '../../../utils/FlowersUtils';

function Filtration({
  filter,
  setFilter,
}: {
  filter: Filter;
  setFilter: (elem: Filter) => void;
}) {
  return (
    <div className={cl.filtration}>
      <TypeFilter name='тип' filter={filter} setFilter={setFilter} />
      <OccasionFilter name='повод' filter={filter} setFilter={setFilter} />
      <ColorFilter name='цвет' filter={filter} setFilter={setFilter} />
      <FlowerFilter
        name='основной цветок'
        filter={filter}
        setFilter={setFilter}
      />
      <PriceFilter name='цена' filter={filter} setFilter={setFilter} />
      <SizeFilter name='Высота' filter={filter} setFilter={setFilter} />
      <Button
        className={cl.remove__button}
        onClick={() =>
          setFilter({
            query: '',
            type: [],
            reason: [],
            color: '',
            flower: [],
            priceMin: getMinPrice(),
            priceMax: getMaxPrice(),
            sizeMin: getMinSize(),
            sizeMax: getMaxSize(),
          })
        }
      >
        сбросить фильтры
      </Button>
    </div>
  );
}

export default Filtration;
