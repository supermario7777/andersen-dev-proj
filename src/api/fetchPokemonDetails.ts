import { pokeApi } from './pokeApi'

// to get details for each pokemon
export const fetchPokemonDetails = async (id: string) => {
  const response = await pokeApi.get(`pokemon/${id}`)
  return response.data
}
