import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { FavoritesState } from '../../interfaces/FavoritesState'
import { Pokemon } from '../../interfaces/pokemon'

const initialState: FavoritesState = {
  favorites: [],
}

const favoritesSlice = createSlice({
  name: 'favorites',
  initialState,
  reducers: {
    toggleFavorite: (state, action: PayloadAction<Pokemon>) => {
      const exists = state.favorites.find((p) => p.id === action.payload.id)
      if (exists) {
        state.favorites = state.favorites.filter((p) => p.id !== action.payload.id)
      } else {
        state.favorites.push(action.payload)
      }
    },
  },
})

export const { toggleFavorite } = favoritesSlice.actions
export default favoritesSlice.reducer
