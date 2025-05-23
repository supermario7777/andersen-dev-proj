import React from 'react'
import { useGetPokemonsQuery } from '../../services/pokemonApi'
import s from './Pagination.module.css'

type Props = {
  offset: number
  limit: number
  onPageChange: (newOffset: number) => void
}

const Pagination: React.FC<Props> = ({ offset, limit, onPageChange }) => {
  const { data } = useGetPokemonsQuery({ limit, offset })

  const totalPokemons = data?.count ?? 0
  const totalPages = Math.ceil(totalPokemons / limit)
  const currentPage = Math.floor(offset / limit) + 1

  const handleNext = () => {
    const newOffset = offset + limit
    if (newOffset < totalPokemons) {
      onPageChange(newOffset)
    }
  }

  const handlePrevious = () => {
    const newOffset = offset - limit
    if (newOffset >= 0) {
      onPageChange(newOffset)
    }
  }

  return (
    <div className={s.buttons}>
      <button onClick={handlePrevious} className="defaultButton" disabled={offset === 0}>
        Previous
      </button>
      <span className={s.page_number}>
        Page {currentPage} of {totalPages}
      </span>
      <button
        onClick={handleNext}
        className="defaultButton"
        disabled={offset + limit >= totalPokemons}
      >
        Next
      </button>
    </div>
  )
}

export default Pagination
