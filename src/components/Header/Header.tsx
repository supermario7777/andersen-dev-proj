import React from 'react'
import s from './Header.module.css'

type Props = {}

const Header: React.FC = () => {
  return (
    <header className={s.header}>
      <h1>Pokémonia</h1>
      <div className={s.buttons}>
        <button onClick={() => console.log('Favorites clicked')}>Favorites</button>
        <button onClick={() => console.log('Comparison clicked')}>Comparison</button>
      </div>
    </header>
  )
}

export default Header
