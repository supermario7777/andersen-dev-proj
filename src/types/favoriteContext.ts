import { Pokemon } from "./pokemon"


export type FavoritesContextType = {
  favorites: Pokemon[]
  toggleFavorite: (pokemon: Pokemon) => void
  isFavorite: (id: number) => boolean
}
