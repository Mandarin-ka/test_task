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

const queryFilter = (flowers: IFlower[], filter: Filter) =>
  flowers.filter(
    (e) =>
      e.category.includes(filter.query) ||
      e.country.includes(filter.query) ||
      e.description.includes(filter.query) ||
      e.occasions.includes(filter.query) ||
      e.title.includes(filter.query) ||
      e.category.includes(filter.query)
  );

const typeFilter = (flowers: IFlower[], filter: Filter) => {
  return filter.type.length === 0
    ? flowers
    : flowers.filter((e) => filter.type.indexOf(e.category) > -1);
};

const priceFilter = (flowers: IFlower[], filter: Filter) => {
  return flowers.filter(
    (e) => filter.priceMin <= e.price && filter.priceMax >= e.price
  );
};

const sizeFilter = (flowers: IFlower[], filter: Filter) => {
  return flowers.filter(
    (e) => filter.sizeMin <= e.size && filter.sizeMax >= e.size
  );
};

const colorFilter = (flowers: IFlower[], filter: Filter) => {
  return filter.color.length === 0
    ? flowers
    : flowers.filter((e) => e.color.indexOf(filter.color) > -1);
};

const flowerFilter = (flowers: IFlower[], filter: Filter) => {
  return filter.flower.length === 0
    ? flowers
    : flowers.filter((e) =>
        e.flower.some((e) => filter.flower.indexOf(e) > -1)
      );
};

const reasonFilter = (flowers: IFlower[], filter: Filter) => {
  return filter.reason.length === 0
    ? flowers
    : flowers.filter((e) =>
        e.occasions.some((e) => filter.reason.indexOf(e) > -1)
      );
};

export const flowersFilter = (
  flowers: IFlower[],
  filter: Filter,
  sort: string
) => {
  return flowersSort(
    queryFilter(
      typeFilter(
        reasonFilter(
          priceFilter(
            sizeFilter(
              flowerFilter(colorFilter(flowers, filter), filter),
              filter
            ),
            filter
          ),
          filter
        ),
        filter
      ),
      filter
    ),
    sort
  );
};
