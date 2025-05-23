import React from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { capitalizeFirstLetter } from '../../utils/capitalizeFirstLetter'
import { usePokemonActions } from '../../hooks/usePokemonActions'
import { Scale, Heart } from 'lucide-react'
import { motion } from 'framer-motion'
import LoadingSpinner from '../../components/common/LoadingSpinner'
import ErrorMessage from '../../components/common/ErrorMessage'
import NotFoundMessage from '../../components/common/NotFoundMessage'
import s from './MainDetails.module.css'
import { useGetPokemonByIdQuery } from '../../services/pokemonApi'

const MainDetailsPage: React.FC = () => {
  const { id } = useParams<{ id: string }>()
  const navigate = useNavigate()

  const { data: selectedPokemon, isLoading, error } = useGetPokemonByIdQuery(id ?? '')

  const { isFavorite, isInComparison, toggleFavorite, toggleComparison } =
    usePokemonActions(selectedPokemon)

  const handleBack = () => {
    navigate(-1)
  }

  if (isLoading) return <LoadingSpinner />
  if (error) return <ErrorMessage message="Failed to load pokemon details" />
  if (!selectedPokemon) return <NotFoundMessage message="Pokemon not found." />

  return (
    <div className={s.main_details}>
      <button onClick={handleBack} className="defaultButton">
        Back
      </button>
      <div className={s.main_details_card}>
        <h2>{`#${selectedPokemon.id} ${capitalizeFirstLetter(selectedPokemon.name)}`}</h2>
        <img className={s.pokemon_img} src={selectedPokemon.image} alt={selectedPokemon.name} />
        <div className={s.h_w}>
          <p>Height: {selectedPokemon.height}</p>
          <p>Weight: {selectedPokemon.weight} kg</p>
        </div>
        <div className={s.stats}>
          <h3>Stats:</h3>
          <ul>
            {selectedPokemon.stats?.map((stat) => (
              <li key={stat.name}>
                {stat.name}: {stat.value}
              </li>
            ))}
          </ul>
        </div>
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

export default MainDetailsPage
