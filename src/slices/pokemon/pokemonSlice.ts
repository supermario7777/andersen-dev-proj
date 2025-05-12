import { createSlice } from '@reduxjs/toolkit'
import { loadPokemonDetails } from '../../thunks/loadPokemonDetails'
import { loadPokemons } from '../../thunks/loadPokemons'
import { PokemonState } from '../../interfaces/pokemonState'

const initialState: PokemonState = {
  pokemons: [],
  selectedPokemon: null,
  loading: false,
  error: null,
  pagination: {
    offset: 0,
    limit: 20,
    total: 0,
  },
}

const pokemonSlice = createSlice({
  name: 'pokemon',
  initialState,
  reducers: {
    setPagination: (state, action) => {
      state.pagination = { ...state.pagination, ...action.payload }
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(loadPokemons.pending, (state) => {
        state.loading = true
        state.error = null
      })
      .addCase(loadPokemons.fulfilled, (state, action) => {
        state.loading = false
        state.pokemons = action.payload.pokemons
        state.pagination.total = action.payload.count
      })
      .addCase(loadPokemons.rejected, (state, action) => {
        state.loading = false
        state.error = action.error.message || 'Something went wrong'
      })
      .addCase(loadPokemonDetails.pending, (state) => {
        state.loading = true
        state.error = null
      })
      .addCase(loadPokemonDetails.fulfilled, (state, action) => {
        state.loading = false
        state.selectedPokemon = action.payload
      })
      .addCase(loadPokemonDetails.rejected, (state, action) => {
        state.loading = false
        state.error = action.error.message || 'Something went wrong'
      })
  },
})

export const { setPagination } = pokemonSlice.actions
export default pokemonSlice.reducer
