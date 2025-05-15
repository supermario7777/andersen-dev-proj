import { configureStore } from '@reduxjs/toolkit'
import pokemonReducer from '../slices/pokemon/pokemonSlice'
import favoritesReducer from '../slices/favoritePokemons/favoritePokemonsSlice'

export const store = configureStore({
  reducer: {
    pokemon: pokemonReducer,
    favorites: favoritesReducer,
  },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
