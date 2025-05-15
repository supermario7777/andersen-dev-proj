import { useNavigate } from 'react-router-dom'
import { useCallback } from 'react'
import { Pokemon } from '../../interfaces/pokemon'
import { useDispatch, useSelector } from 'react-redux'
import { AppDispatch, RootState } from '../../store'
import { toggleFavorite } from '../../slices/favoritePokemons/favoritePokemonsSlice'
import s from './PokemonItem.module.css'
import { capitalizeFirstLetter } from '../../utils/capitalizeFirstLetter'

type Props = {
  pokemon: Pokemon
  index: number
}

const PokemonItem: React.FC<Props> = ({ pokemon, index }) => {
  const favoritePokemons = useSelector((state: RootState) => state.favorites.favorites)

  const dispatch: AppDispatch = useDispatch()

  const handleToggle = useCallback(() => {
    dispatch(toggleFavorite(pokemon))
  }, [dispatch, pokemon])

  const navigate = useNavigate()

  const goToMainDetails = () => {
    navigate(`/details/${pokemon.id}`)
  }

  const isFavorite = favoritePokemons.some((p) => p.id === pokemon.id)

  return (
    <div onClick={goToMainDetails} className={s.item}>
      <div className={s.header}>
        <p>#{index + 1}</p>
        <p>{capitalizeFirstLetter(pokemon.name)}</p>
      </div>
      <img src={pokemon.image} className={s.pokemon_img} alt={pokemon.name} />
      <div className={s.buttons}>
        <button
          onClick={(e) => {
            e.stopPropagation()
            handleToggle()
          }}
        >
          {isFavorite ? '❤️' : '🤍'}
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
