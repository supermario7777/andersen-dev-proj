import React, { useState } from 'react'
import { Pokemon } from '../../types/pokemon'
import { mockPokemons } from '../../data/mockPokemons'
import s from './MainDetails.module.css'

const MainDetailsPage: React.FC = () => {
  const [isFavorite, setIsFavorite] = useState<boolean>(false)
  const [isInComparison, setIsInComparison] = useState<boolean>(false)

  const handleFavoriteClick = () => {
    setIsFavorite((prev) => !prev)
  }

  const handleComparisonClick = () => {
    setIsInComparison((prev) => !prev)
  }

  const pokemon: Pokemon = mockPokemons[1]

  return (
    <div className={s.main_details}>
      <h1>{pokemon.name}</h1>
      <img className={s.pokemon_img} src={pokemon.image} alt={pokemon.name} />
      <div>
        <p>
          <strong>Height:</strong> {pokemon.height} m
        </p>
        <p>
          <strong>Weight:</strong> {pokemon.weight} kg
        </p>
      </div>
      <div>
        <h3>Stats:</h3>
        <ul>
          {pokemon.stats.map((stat, index) => (
            <li key={index}>
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
          {isInComparison ? 'Remove from Compare' : 'Add to compare'}
        </button>
      </div>
    </div>
  )
}

export default MainDetailsPage
