import React from 'react'
import Header from '../../components/Header/Header'
import PokemonList from '../../components/PokemonList/PokemonList'
import Pagination from '../../components/Pagination/Pagination'
import { useSearchParams } from 'react-router-dom'

const Home: React.FC = () => {
  const [searchParams, setSearchParams] = useSearchParams()
  const offset = parseInt(searchParams.get('offset') || '0', 10)
  const limit = 20

  const handlePageChange = (newOffset: number) => {
    setSearchParams({ offset: newOffset.toString() })
  }

  return (
    <div>
      <Header />
      <PokemonList offset={offset} limit={limit} />
      <Pagination offset={offset} limit={limit} onPageChange={handlePageChange} />
    </div>
  )
}

export default Home
