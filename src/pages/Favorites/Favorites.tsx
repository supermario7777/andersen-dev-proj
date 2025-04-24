import React from 'react'
import { mockPokemons } from '../../data/mockPokemons'
import PokemonItem from '../../components/PokemonItem/PokemonItem'
import s from './Favorites.module.css'

const PokemonList: React.FC = () => {
  return (
    <>
      <h2 className={s.header}>Favorites</h2>
      <div className={s.items}>
        {mockPokemons.map((p, i) => (
          <PokemonItem key={p.id} pokemon={p} index={i} />
        ))}
      </div>
    </>
  )
}

export default PokemonList
