import React from 'react'
import s from './Header.module.css'
import { useNavigate } from 'react-router-dom'

type Props = {}

const Header: React.FC = () => {
  const navigate = useNavigate()

  const goToFavorites = () => {
    navigate('/favorites')
  }

  const goToComparison = () => {
    navigate('/comparison')
  }

  return (
    <header className={s.header}>
      <h1>Pokémonia</h1>
      <div className={s.buttons}>
        <button className="defaultButton" onClick={goToFavorites}>
          Favorites
        </button>
        <button className="defaultButton" onClick={goToComparison}>
          Comparison
        </button>
      </div>
    </header>
  )
}

export default Header
