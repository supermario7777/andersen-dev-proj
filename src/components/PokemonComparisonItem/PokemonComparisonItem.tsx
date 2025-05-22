import React from 'react'
import { Pokemon } from '../../interfaces/pokemon'
import { capitalizeFirstLetter } from '../../utils/capitalizeFirstLetter'
import { useNavigate } from 'react-router-dom'
import { Scale, Heart } from 'lucide-react'
import { motion } from 'framer-motion'

import s from './PokemonComparisonItem.module.css'
import { usePokemonActions } from '../../hooks/usePokemonActions'

type Props = {
  pokemon: Pokemon
}

const PokemonComparisonItem: React.FC<Props> = ({ pokemon }) => {
  const navigate = useNavigate()

  const { isFavorite, isInComparison, toggleFavorite, toggleComparison } =
    usePokemonActions(pokemon)

  const goToMainDetails = () => {
    navigate(`/details/${pokemon.id}`)
  }

  return (
    <div onClick={goToMainDetails} key={pokemon.id} className={s.card}>
      <img src={pokemon.image} className={s.pokemon_img} alt={pokemon.name} />
      <h3>{`#${pokemon.id} ${capitalizeFirstLetter(pokemon.name)}`}</h3>
      <div className={s.h_w}>
        <p>Height: {pokemon.height}</p>
        <p>Weight: {pokemon.weight}</p>
      </div>
      <div className={s.stats}>
        <h4>Stats:</h4>
        <ul>
          {pokemon.stats?.map((stat) => (
            <li key={stat.name}>
              {stat.name}:{stat.value}
            </li>
          ))}
        </ul>
      </div>
      <div className={s.buttons}>
        <motion.button
          onClick={(e) => {
            e.stopPropagation()
            toggleFavorite()
          }}
          whileTap={{ scale: 1.2 }}
          className={s.favoriteButton}
        >
          <Heart size={18} className={isFavorite ? s.heartFilled : s.heartOutlined} />
        </motion.button>

        <motion.button
          onClick={(e) => {
            e.stopPropagation()
            toggleComparison()
          }}
          whileTap={{ scale: 1.2 }}
          className={s.comparisonButton}
        >
          <Scale size={18} className={isInComparison ? s.scaleFilled : s.scaleOutlined} />
        </motion.button>
      </div>
    </div>
  )
}

export default PokemonComparisonItem
