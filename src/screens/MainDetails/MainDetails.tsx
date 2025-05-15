import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { AppDispatch, RootState } from '../../store'
import { loadPokemonDetails } from '../../thunks/loadPokemonDetails'
import { capitalizeFirstLetter } from '../../utils/capitalizeFirstLetter'
import s from './MainDetails.module.css'

const MainDetailsPage: React.FC = () => {
  const [isFavorite, setIsFavorite] = useState(false)
  const [isInComparison, setIsInComparison] = useState(false)
  const { id } = useParams<{ id: string }>()
  const dispatch = useDispatch<AppDispatch>()

  const { selectedPokemon, loading, error } = useSelector((state: RootState) => state.pokemon)

  useEffect(() => {
    if (id) {
      dispatch(loadPokemonDetails(id))
    }
  }, [dispatch, id])

  const handleFavoriteClick = () => setIsFavorite((prev) => !prev)
  const handleComparisonClick = () => setIsInComparison((prev) => !prev)

  if (loading) {
    return (
      <div className={s.loading}>
        <div className={s.spinner}></div>
      </div>
    )
  }

  if (error) return <div className={s.error}>Error: {error}</div>
  if (!selectedPokemon) return <div>Pokemon not found.</div>

  return (
    <div className={s.main_details}>
      <h1>{capitalizeFirstLetter(selectedPokemon.name)}</h1>
      <img className={s.pokemon_img} src={selectedPokemon.image} alt={selectedPokemon.name} />
      <div>
        <p>
          <strong>Height:</strong> {selectedPokemon.height}
        </p>
        <p>
          <strong>Weight:</strong> {selectedPokemon.weight} kg
        </p>
      </div>
      <div>
        <h3>Stats:</h3>
        <ul>
          {selectedPokemon.stats?.map((stat, index) => (
            <li key={stat.name + index}>
              <strong>{stat.name}:</strong> {stat.value}
            </li>
          ))}
        </ul>
      </div>
      <div className={s.buttons}>
        <button onClick={handleFavoriteClick}>
          {isFavorite ? 'Remove from Fav' : 'Add to Fav'}
        </button>
        <button onClick={handleComparisonClick}>
          {isInComparison ? 'Remove from Compare' : 'Add to Compare'}
        </button>
      </div>
    </div>
  )
}

export default MainDetailsPage
