import { IFlower } from '../API/IFlowers'
import { Filter } from '../components/FilterPage/Filtration/FilterInterface'
import { flowersFilter } from '../utils/SortingAndArrange'
import { useMemo } from 'react'

export const useCards = (flowers: IFlower[], filter: Filter, sort: string) => {
  const cards = useMemo(() => {
    return flowersFilter(flowers, filter, sort)
  }, [filter, flowers, sort])

  return cards
}
