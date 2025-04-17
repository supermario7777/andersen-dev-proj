import React from 'react'
import s from './Header.module.css';

type Props = {}

const Header: React.FC = () => {
  return (
    <header>
      <h1>Pokémonia</h1>
      <button onClick={() => console.log('Favorites clicked')}>Favorites</button>
      <button onClick={() => console.log('Comparison clicked')}>Comparison</button>
    </header>
  );
};

export default Header;