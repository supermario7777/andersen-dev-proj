import { useDispatch, useSelector } from 'react-redux'
import { toggleFavorite } from '../slices/favoritePokemons/favoritePokemonsSlice'
import {
  addToComparison,
  removeFromComparison,
  setComparisonError,
} from '../slices/comparison/comparisonSlice'
import { AppDispatch, RootState } from '../store'
import { Pokemon } from '../interfaces/pokemon'
import { useCallback } from 'react'

export const usePokemonActions = (pokemon: Pokemon | null) => {
  const dispatch: AppDispatch = useDispatch()

  const favoritePokemons = useSelector((state: RootState) => state.favorites.favorites)
  const comparisonList = useSelector((state: RootState) => state.comparison.comparison)

  const isFavorite = pokemon ? favoritePokemons.some((p) => p.id === pokemon.id) : false
  const isInComparison = pokemon ? comparisonList.some((p) => p.id === pokemon.id) : false

  const toggleFavoriteStatus = useCallback(() => {
    if (pokemon) {
      dispatch(toggleFavorite(pokemon))
    }
  }, [dispatch, pokemon])

  const toggleComparisonStatus = useCallback(() => {
    if (!pokemon) return

    if (isInComparison) {
      dispatch(removeFromComparison(pokemon.id))
    } else {
      if (comparisonList.length >= 2) {
        dispatch(setComparisonError('You can only compare 2 pokémons.'))
        return
      }
      dispatch(addToComparison(pokemon))
    }
  }, [dispatch, pokemon, isInComparison, comparisonList.length])

  return {
    isFavorite,
    isInComparison,
    toggleFavorite: toggleFavoriteStatus,
    toggleComparison: toggleComparisonStatus,
  }
}
