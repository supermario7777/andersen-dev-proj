import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { Pokemon } from '../interfaces/pokemon'

export const pokemonApi = createApi({
  reducerPath: 'pokemonApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://pokeapi.co/api/v2/' }),
  endpoints: (builder) => ({
    getPokemons: builder.query<
      { pokemons: Pokemon[]; count: number },
      { limit: number; offset: number }
    >({
      async queryFn({ limit, offset }) {
        try {
          const listResponse = await fetch(
            `https://pokeapi.co/api/v2/pokemon?limit=${limit}&offset=${offset}`
          )
          const listData = await listResponse.json()

          const pokemons: Pokemon[] = await Promise.all(
            listData.results.map(async (pokemon: any) => {
              const response = await fetch(pokemon.url)
              const details = await response.json()

              return {
                id: details.id,
                name: details.name,
                image: details.sprites.front_default,
                height: details.height,
                weight: details.weight,
                stats: details.stats.map((s: any) => ({
                  name: s.stat.name,
                  value: s.base_stat,
                })),
              }
            })
          )

          return { data: { pokemons, count: listData.count } }
        } catch (error: any) {
          return { error }
        }
      },
    }),

    getPokemonById: builder.query<Pokemon, string>({
      async queryFn(id) {
        try {
          const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`)
          if (!response.ok) {
            return { error: { status: response.status, data: await response.json() } }
          }
          const details = await response.json()

          const pokemon: Pokemon = {
            id: details.id,
            name: details.name,
            image: details.sprites.front_default,
            height: details.height,
            weight: details.weight,
            stats: details.stats.map((s: any) => ({
              name: s.stat.name,
              value: s.base_stat,
            })),
          }

          return { data: pokemon }
        } catch (error: any) {
          return { error }
        }
      },
    }),
  }),
})

export const { useGetPokemonsQuery, useGetPokemonByIdQuery } = pokemonApi
