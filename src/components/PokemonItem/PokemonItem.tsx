import { useNavigate } from 'react-router-dom'
import { Pokemon } from '../../interfaces/pokemon'
import s from './PokemonItem.module.css'

type Props = {
  pokemon: Pokemon
  index: number
}

const PokemonItem: React.FC<Props> = ({ pokemon, index }) => {
  const navigate = useNavigate()

  const goToMainDetails = () => {
    navigate(`/details/${pokemon.id}`)
  }

  return (
    <div onClick={goToMainDetails} className={s.item}>
      <div className={s.header}>
        <p>#{index + 1}</p>
        <p>{pokemon.name}</p>
      </div>
      <img src={pokemon.image} className={s.pokemon_img} alt={pokemon.name} />
      <div className={s.buttons}>
        <button
          onClick={(e) => {
            e.stopPropagation()
            console.log('add to fav')
          }}
        >
          ❤️
        </button>
        <button
          onClick={(e) => {
            e.stopPropagation()
            console.log('add to compare')
          }}
        >
          ⚖️
        </button>
      </div>
    </div>
  )
}

export default PokemonItem
