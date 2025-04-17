import React from 'react'
import s from './PokemonList.module.css'
import { mockPokemons } from '../../data/mockPokemon';
import PokemonItem from '../PokemonItem/PokemonItem';

const PokemonList: React.FC = () => {
  return (
    <div>
      {mockPokemons.map((p, i) => (
        <PokemonItem key={p.id} pokemon={p} index={i} />
      ))}
    </div>
  );
};

export default PokemonList;
