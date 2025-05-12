import { createAsyncThunk } from '@reduxjs/toolkit'
import { fetchPokemonDetails } from '../api/fetchPokemonDetails'

export const loadPokemonDetails = createAsyncThunk(
  'pokemon/loadPokemonDetails',
  async (id: string) => {
    const data = await fetchPokemonDetails(id)

    return {
      id: data.id,
      name: data.name,
      height: data.height,
      weight: data.weight,
      image: data.sprites.front_default,
      stats: data.stats.map((s: any) => ({
        name: s.stat.name,
        value: s.base_stat,
      })),
    }
  }
)
