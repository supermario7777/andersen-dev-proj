import React, { useRef, useEffect } from 'react'
import s from './PokemonList.module.css'
import PokemonItem from '../PokemonItem/PokemonItem'
import { useGetPokemonsQuery } from '../../services/pokemonApi'
import LoadingSpinner from '../common/LoadingSpinner'

type Props = {
  offset: number
  limit: number
}

const PokemonList: React.FC<Props> = ({ offset, limit }) => {
  const { data, isLoading, isFetching, error } = useGetPokemonsQuery({ offset, limit })

  // to store the last pokemon list
  const lastDataRef = useRef(data?.pokemons ?? [])

  // we renew lastDataRef when we get new data
  useEffect(() => {
    if (data?.pokemons) {
      lastDataRef.current = data.pokemons
    }
  }, [data])

  // to show the last data or empty array if we are loading
  const pokemonsToShow = isFetching ? lastDataRef.current : data?.pokemons ?? []

  if (isLoading && !lastDataRef.current.length) return <LoadingSpinner />
  if (error) return <p>Error loading pokemons</p>

  return (
    <div className={s.container} style={{ position: 'relative' }}>
      <div className={s.items}>
        {pokemonsToShow.map((p) => (
          <PokemonItem key={p.id} pokemon={p} />
        ))}
      </div>

      {isFetching && (
        <div className={s.loading}>
          <LoadingSpinner />
        </div>
      )}
    </div>
  )
}

export default PokemonList
