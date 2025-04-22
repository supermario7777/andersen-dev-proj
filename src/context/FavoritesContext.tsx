import type { FavoritesContextType } from '../types/favoriteContext'
import { createContext, useContext, useState, useMemo } from 'react'
import type { Pokemon } from '../types/pokemon'

// we create context for pokemons on favorites
const FavoritesContext = createContext<FavoritesContextType | undefined>(undefined)

// custom hook that checks if we transfer the context data properly
export const useFavorites = () => {
  const context = useContext(FavoritesContext)
  if (!context) throw new Error('useFavorites must be used within FavoritesProvider')
  return context
}

export const FavoritesProvider = ({ children }: { children: React.ReactNode }) => {
  // state to store list of favorite pokemons
  const [favorites, setFavorites] = useState<Pokemon[]>([])

  // function to remove / add pokemons to favorites list
  const toggleFavorite = (pokemon: Pokemon) => {
    setFavorites((prev) =>
      prev.find((p) => p.id === pokemon.id)
        ? prev.filter((p) => p.id !== pokemon.id)
        : [...prev, pokemon]
    )
  }

  // function to check if pokemon is in the favorites
  const isFavorite = (id: number) => favorites.some((p) => p.id === id)

  // we use memo to avoid unwanted re-renders
  const value = useMemo(
    () => ({
      favorites,
      toggleFavorite,
      isFavorite,
    }),
    [favorites]
  )

  return <FavoritesContext.Provider value={value}>{children}</FavoritesContext.Provider>
}
