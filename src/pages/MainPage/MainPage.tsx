import React, { useState } from 'react';
import { getStoragedFlowers } from '../../utils/localStorage';
import {
  useMaxPrice,
  useMaxSize,
  useMinPrice,
  useMinSize,
} from '../../hooks/usePriceSize';
import Cards from '../../components/FilterPage/Cards/Cards';
import { Filter } from '../../components/FilterPage/Filtration/FilterInterface';
import Filtration from '../../components/FilterPage/Filtration/Filtration';
import Arrange from '../../components/FilterPage/Sorting/Arrange/Arrange';
import Sorting from '../../components/FilterPage/Sorting/Sorting/Sorting';
import Header from '../../components/Header/Header';
import TextInput from '../../components/UI/TextInput/TextInput';
import { useCards } from '../../hooks/useCards';
import flowers from './../../API/flowers.json';
import './MainPage.css';

function MainPage() {
  const [sort, setSort] = useState('');
  const [mode, setMode] = useState('block');
  const [favoritesLength, setFavoriteLength] = useState(
    getStoragedFlowers().length
  );

  const [filter, setFilter] = useState<Filter>({
    query: '',
    type: [],
    reason: [],
    color: '',
    flower: [],
    priceMin: useMinPrice(flowers),
    priceMax: useMaxPrice(flowers),
    sizeMin: useMinSize(flowers),
    sizeMax: useMaxSize(flowers),
  });

  const cards = useCards(flowers, filter, sort);

  return (
    <div className='main_page'>
      <Header count={favoritesLength} />
      <div className='container'>
        <div className='top__wrapper'>
          <TextInput
            type={'search'}
            placeholder='Поиск...'
            value={filter}
            setValue={setFilter}
          />
          <div className='sorting__wrapper'>
            <Arrange mode={mode} setMode={setMode} />
            <Sorting sort={sort} setSort={setSort} />
          </div>
        </div>
        <Filtration setFilter={setFilter} filter={filter} />
        <Cards
          mode={mode}
          cards={cards}
          setCount={() => setFavoriteLength(getStoragedFlowers().length)}
        />
      </div>
    </div>
  );
}

export default MainPage;
