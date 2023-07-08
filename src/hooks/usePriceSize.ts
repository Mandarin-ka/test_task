import { IFlower } from '../API/IFlowers';
import { useMemo } from 'react';

export const useMaxPrice = (flowers: IFlower[]) => {
  const maxPriceFlower = useMemo(() => {
    return flowers.reduce((prev, cur) => (prev.price < cur.price ? cur : prev));
  }, [flowers]);

  return maxPriceFlower.price;
};

export const useMinPrice = (flowers: IFlower[]) => {
  const minPriceFlower = useMemo(() => {
    return flowers.reduce((prev, cur) => (prev.price < cur.price ? prev : cur));
  }, [flowers]);

  return minPriceFlower.price;
};

export const useMaxSize = (flowers: IFlower[]) => {
  const maxPriceFlower = useMemo(() => {
    return flowers.reduce((prev, cur) => (prev.size < cur.size ? cur : prev));
  }, [flowers]);

  return maxPriceFlower.size;
};

export const useMinSize = (flowers: IFlower[]) => {
  const minPriceFlower = useMemo(() => {
    return flowers.reduce((prev, cur) => (prev.size < cur.size ? prev : cur));
  }, [flowers]);

  return minPriceFlower.size;
};
