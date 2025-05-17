import React from 'react'
import { useSelector } from 'react-redux'
import { RootState } from '../../store'
import s from './Comparison.module.css'
import { useNavigate } from 'react-router-dom'
import PokemonComparisonItem from '../../components/PokemonComparisonItem/PokemonComparisonItem'

const Comparison: React.FC = () => {
  //извлекаем массив comparison из comparisonSlice
  const comparisonList = useSelector((state: RootState) => state.comparison.comparison)

  const navigate = useNavigate()

  const goToHome = () => {
    navigate('/')
  }

  const goToFavorites = () => {
    navigate('/favorites')
  }

  return (
    <>
      <h1 className={s.header}>Compare Pokémon</h1>
      <div className={s.buttons}>
        <button onClick={goToHome} className="defaultButton">
          Home
        </button>
        <button onClick={goToFavorites} className="defaultButton">
          Favorites
        </button>
      </div>

      <div className={s.pokemons}>
        {comparisonList.length === 0 && (
          <p className={s.empty}>No Pokémon selected for comparison.</p>
        )}

        {comparisonList.map((p) => (
          <PokemonComparisonItem key={p.id} pokemon={p} />
        ))}
      </div>
    </>
  )
}

export default Comparison
