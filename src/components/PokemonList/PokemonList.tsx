import React, { useEffect } from 'react'
import s from './PokemonList.module.css'
import PokemonItem from '../PokemonItem/PokemonItem'
import { AppDispatch, RootState } from '../../store'
import { useDispatch, useSelector } from 'react-redux'
import { loadPokemons } from '../../thunks/loadPokemons'
import LoadingSpinner from '../common/LoadingSpinner'

const PokemonList: React.FC = () => {
  const dispatch: AppDispatch = useDispatch()

  const { pokemons, loading, error, pagination } = useSelector((state: RootState) => state.pokemon)

  useEffect(() => {
    dispatch(loadPokemons({ limit: pagination.limit, offset: pagination.offset }))
  }, [dispatch, pagination.limit, pagination.offset])

  if (loading) return <LoadingSpinner/>
  if (error) return <p>Error: {error}</p>

  return (
    <div className={s.items}>
      {pokemons.map((p) => (
        <PokemonItem key={p.id} pokemon={p} />
      ))}
    </div>
  )
}

export default PokemonList
