import s from './PaginationPokemonList.module.css'


import React from 'react'

type Props = {}

const Pagination: React.FC = () => {
  return (
    <div style={{ marginTop: '20px' }}>
      <button disabled>Previous</button>
      <span> Page 1 </span>
      <button disabled>Next</button>
    </div>
  );
};

export default Pagination;



