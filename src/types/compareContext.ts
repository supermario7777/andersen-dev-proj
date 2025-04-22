import { Pokemon } from './pokemon'

export type ComparisonContextType = {
  comparisonList: Pokemon[]
  toggleComparison: (pokemon: Pokemon) => void
  isInComparison: (id: number) => boolean
  resetComparison: () => void
}
