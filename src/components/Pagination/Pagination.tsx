// src/components/Pagination.tsx
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { RootState, AppDispatch } from '../../store/index'
import { loadPokemons } from '../../thunks/loadPokemons'
import { setPagination } from '../../slices/pokemon/pokemonSlice'
import s from './Pagination.module.css'

const Pagination: React.FC = () => {
  const dispatch: AppDispatch = useDispatch()

  const { pagination } = useSelector((state: RootState) => state.pokemon)

  const totalPokemons = pagination.total

  const totalPages = Math.ceil(totalPokemons / pagination.limit)

  const handleNext = () => {
    const newOffset = pagination.offset + pagination.limit
    if (newOffset < totalPokemons) {
      dispatch(setPagination({ offset: newOffset }))
      dispatch(loadPokemons({ limit: pagination.limit, offset: newOffset }))
    }
  }

  const handlePrevious = () => {
    const newOffset = pagination.offset - pagination.limit
    if (newOffset >= 0) {
      dispatch(setPagination({ offset: newOffset }))
      dispatch(loadPokemons({ limit: pagination.limit, offset: newOffset }))
    }
  }
  const currentPage =
    pagination.limit === 0 ? 1 : Math.ceil((pagination.offset + 1) / pagination.limit)

  return (
    <div className={s.buttons}>
      <button onClick={handlePrevious} disabled={pagination.offset === 0}>
        Previous
      </button>
      <span className={s.page_number}>
        Page {currentPage} of {totalPages}
      </span>
      <button onClick={handleNext} disabled={pagination.offset + pagination.limit >= totalPokemons}>
        Next
      </button>
    </div>
  )
}

export default Pagination
