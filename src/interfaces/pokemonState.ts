import { Pokemon } from './pokemon'

export interface PokemonState {
  pokemons: Pokemon[]
  selectedPokemon: Pokemon | null
  loading: boolean
  error: string | null
  pagination: {
    offset: number
    limit: number
    total: number
  }
}
