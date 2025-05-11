import { pokeApi } from './pokeApi'

// to get the list of pokemons with the pagination
export const fetchPokemons = async (limit: number, offset: number) => {
  const response = await pokeApi.get('pokemon', {
    params: {
      limit,
      offset,
    },
  })

  return response.data
}
