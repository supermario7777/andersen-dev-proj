import { useNavigate } from 'react-router-dom'
import React from 'react'
import { Pokemon } from '../../interfaces/pokemon'
import { Scale, Heart } from 'lucide-react'
import { motion } from 'framer-motion'
import s from './PokemonItem.module.css'
import { capitalizeFirstLetter } from '../../utils/capitalizeFirstLetter'
import { usePokemonActions } from '../../hooks/usePokemonActions'

type Props = {
  pokemon: Pokemon
}

const PokemonItem: React.FC<Props> = React.memo(({ pokemon }) => {
  const navigate = useNavigate()

  const { isFavorite, isInComparison, toggleFavorite, toggleComparison } =
    usePokemonActions(pokemon)

  const goToMainDetails = () => {
    navigate(`/details/${pokemon.id}`)
  }

  return (
    <motion.div
      onClick={goToMainDetails}
      className={s.item}
      whileHover={{ scale: 1.03 }}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        duration: 0.6,
        ease: 'easeOut',
      }}
    >
      <div className={s.header}>
        <p>#{pokemon.id}</p>
        <p>{capitalizeFirstLetter(pokemon.name)}</p>
      </div>
      <img src={pokemon.image} className={s.pokemon_img} alt={pokemon.name} />
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
    </motion.div>
  )
})

export default PokemonItem
