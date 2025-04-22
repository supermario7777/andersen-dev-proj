import { createContext, useContext, useState, ReactNode, useMemo } from 'react'
import { Pokemon } from '../types/pokemon'
import { ComparisonContextType } from '../types/compareContext'

const ComparisonContext = createContext<ComparisonContextType | undefined>(undefined)

export const useComparison = () => {
  const context = useContext(ComparisonContext)
  if (!context) {
    throw new Error('useComparison must be used within ComparisonProvider')
  }
  return context
}

export const ComparisonProvider = ({ children }: { children: ReactNode }) => {
  const [comparisonList, setComparisonList] = useState<Pokemon[]>([])

  const toggleComparison = (pokemon: Pokemon) => {
    setComparisonList((prev) => {
      const exists = prev.find((p) => p.id === pokemon.id)
      if (exists) {
        return prev.filter((p) => p.id !== pokemon.id)
      } else if (prev.length < 2) {
        return [...prev, pokemon]
      } else {
        return prev
      }
    })
  }

  const isInComparison = (id: number) => comparisonList.some((p) => p.id === id)

  const resetComparison = () => setComparisonList([])

  const value = useMemo(
    () => ({
      comparisonList,
      toggleComparison,
      isInComparison,
      resetComparison,
    }),
    [comparisonList]
  )

  return <ComparisonContext.Provider value={value}>{children}</ComparisonContext.Provider>
}
