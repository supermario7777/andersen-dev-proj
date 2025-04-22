import { useComparison } from '../../context/ComparisonContext'
import { useFavorites } from '../../context/FavoritesContext'
import { Pokemon } from '../../types/pokemon'
import s from './PokemonItem.module.css'

type Props = {
  pokemon: Pokemon
  index: number
}

const PokemonItem: React.FC<Props> = ({ pokemon, index }) => {
  const handlePokemonCardClick = () => {}

  const { toggleFavorite } = useFavorites()
  const { toggleComparison } = useComparison()

  return (
    <div onClick={handlePokemonCardClick} className={s.item}>
      <div className={s.header}>
        <p>#{index + 1}</p>
        <p>{pokemon.name}</p>
      </div>
      <img src={pokemon.image} className={s.pokemon_img} alt={pokemon.name} />
      <div className={s.buttons}>
        <button onClick={() => toggleFavorite(pokemon)}>❤️</button>
        <button onClick={() => toggleComparison(pokemon)}>⚖️</button>
      </div>
    </div>
  )
}

export default PokemonItem
