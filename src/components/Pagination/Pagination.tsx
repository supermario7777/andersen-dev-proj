import s from './Pagination.module.css'
import React from 'react'

type Props = {}

const Pagination: React.FC = () => {
  return (
    <div className={s.buttons}>
      <button disabled>Previous</button>
      <span> Page 1 </span>
      <button disabled>Next</button>
    </div>
  )
}

export default Pagination
