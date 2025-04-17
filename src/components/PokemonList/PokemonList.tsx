import React from 'react'
import s from './PokemonList.module.css'
import { mockPokemons } from '../../data/mockPokemons';
import PokemonItem from '../PokemonItem/PokemonItem';

const PokemonList: React.FC = () => {
  return (
    <div className={s.items}>
      {mockPokemons.map((p, i) => (
        <PokemonItem key={p.id} pokemon={p} index={i} />
      ))}
    </div>
  );
};

export default PokemonList;
