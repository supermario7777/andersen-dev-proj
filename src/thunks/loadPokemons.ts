import { createAsyncThunk } from '@reduxjs/toolkit'
import { fetchPokemons } from '../api/fetchPokemons'
import { Pokemon } from '../interfaces/pokemon'

export const loadPokemons = createAsyncThunk(
  'pokemon/loadPokemons',
  async ({ limit, offset }: { limit: number; offset: number }) => {
    const data = await fetchPokemons(limit, offset)

    const pokemons: Pokemon[] = await Promise.all(
      data.results.map(async (pokemon: any) => {
        const pokemonDetails = await fetch(pokemon.url)
        const detailsData = await pokemonDetails.json()
        return {
          id: detailsData.id,
          name: pokemon.name,
          image: detailsData.sprites.front_default,
          height: detailsData.height,
          weight: detailsData.weight,
          stats: detailsData.stats.map((s: any) => ({
            name: s.stat.name,
            value: s.base_stat,
          })),
        }
      })
    )
    return {
      pokemons,
      count: data.count,
    }
  }
)
