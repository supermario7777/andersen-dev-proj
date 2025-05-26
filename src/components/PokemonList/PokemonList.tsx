import React, { useRef, useEffect, useDeferredValue } from 'react'
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

  const deferredValue = useDeferredValue(data?.pokemons ?? [])
  const pokemonsToShow = isFetching ? deferredValue : data?.pokemons ?? []

  // if we are loading and there is no data yet, show loading spinner
  if (isLoading && !pokemonsToShow.length) return <LoadingSpinner />
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
