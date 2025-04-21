import { Pokemon } from '../../types/pokemon'
import s from './PokemonItem.module.css'

type Props = {
  pokemon: Pokemon
  index: number
}

const PokemonItem: React.FC<Props> = ({ pokemon, index }) => {
  const handlePokemonCardClick = () => {}
  return (
    <div onClick={handlePokemonCardClick} className={s.item}>
      <div className={s.header}>
        <p>#{index + 1}</p>
        <p>{pokemon.name}</p>
      </div>
      <img src={pokemon.image} className={s.pokemon_img} alt="pokemon-image" />
      <div className={s.buttons}>
        <button
          onClick={(e) => {
            console.log('Add to favorites')
          }}
        >
          ❤️
        </button>
        <button
          onClick={(e) => {
            console.log('Add to comparison')
          }}
        >
          ⚖️
        </button>
      </div>
    </div>
  )
}

export default PokemonItem
