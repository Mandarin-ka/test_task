import { IFlower } from '../API/IFlowers';
import { Filter } from '../components/FilterPage/Filtration/FilterInterface';

export const flowersSort = (flowers: IFlower[], sort: string): IFlower[] => {
  if (sort.toLowerCase() === 'популярные' || sort.toLowerCase() === '')
    return flowers.sort((flower1, flower2) => flower1.rating - flower2.rating);
  else if (sort.toLowerCase() === 'цена: по возрастанию') {
    return flowers.sort((flower1, flower2) => flower1.price - flower2.price);
  } else {
    return flowers.sort((flower1, flower2) => flower2.price - flower1.price);
  }
};

export const flowersFilter = (flowers: IFlower[], filter: Filter, sort: string): IFlower[] => {
  const queryFilter = (flowers: IFlower[]) => {
    return flowers.filter(
      (e) =>
        e.title.includes(filter.query) ||
        e.description.includes(filter.query) ||
        e.flower.join(' ').includes(filter.query)
    );
  };

  const typeFilter = (flowers: IFlower[]) => {
    if (filter.type.length > 0) return flowers.filter((e) => filter.type.indexOf(e.category));
    return flowers;
  };

  return flowersSort(queryFilter(typeFilter(flowers)), sort);
};
