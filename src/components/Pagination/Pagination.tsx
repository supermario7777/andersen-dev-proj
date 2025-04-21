import s from './Pagination.module.css'
import React from 'react'

type Props = {}

const Pagination: React.FC = () => {
  return (
    <div className={s.buttons}>
      <button >Previous</button>
      <span className={s.page_number}> Page 1 </span>
      <button >Next</button>
    </div>
  )
}

export default Pagination
