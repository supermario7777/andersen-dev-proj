import { Pokemon } from '../../types/pokemon'
import s from './PokemonItem.module.css'

type Props = {
  pokemon: Pokemon
  index: number
}

const PokemonItem: React.FC<Props> = ({ pokemon, index }) => {
  return (
    <div onClick={() => console.log(pokemon.name)} className={s.item}>
      <p>#{index + 1}</p>
      <p>{pokemon.name}</p>

      <div className={s.buttons}>
        <button
          onClick={(e) => {
            e.stopPropagation()
            console.log('Add to favorites')
          }}
        >
          ❤️
        </button>
        <button
          onClick={(e) => {
            e.stopPropagation()
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
