import { Pokemon } from '../../data/mockPokemon';

type Props = {
  pokemon: Pokemon;
  index: number;
};

const PokemonItem: React.FC<Props> = ({ pokemon, index }) => {
  return (
    <div onClick={() => console.log(pokemon.name)} style={{ border: '1px solid #ccc', padding: '10px' }}>
      <p>#{index + 1}</p>
      <p>{pokemon.name}</p>
      <button onClick={(e) => { e.stopPropagation(); console.log('Add to favorites'); }}>❤️</button>
      <button onClick={(e) => { e.stopPropagation(); console.log('Add to comparison'); }}>⚖️</button>
    </div>
  );
};

export default PokemonItem;
