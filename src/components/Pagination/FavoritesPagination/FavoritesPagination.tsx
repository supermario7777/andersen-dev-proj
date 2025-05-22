import React from 'react'
import s from './FavoritesPagination.module.css'

interface Props {
  total: number
  perPage: number
  currentPage: number
  onPageChange: (page: number) => void
}

const FavoritesPagination: React.FC<Props> = ({ total, perPage, currentPage, onPageChange }) => {
  const totalPages = Math.ceil(total / perPage)

  if (totalPages <= 1) return null

  return (
    <div className={s.pagination}>
      {Array.from({ length: totalPages }, (_, i) => (
        <button
          key={i}
          className={currentPage === i + 1 ? s.active : ''}
          onClick={() => onPageChange(i + 1)}
        >
          {i + 1}
        </button>
      ))}
    </div>
  )
}

export default FavoritesPagination
