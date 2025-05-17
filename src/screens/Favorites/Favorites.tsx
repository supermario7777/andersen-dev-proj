import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { RootState } from '../../store'
import { useNavigate, useSearchParams } from 'react-router-dom'
import PokemonItem from '../../components/PokemonItem/PokemonItem'
import s from './Favorites.module.css'
import FavoritesPagination from '../../components/Pagination/FavoritesPagination/FavoritesPagination'

const Favorites: React.FC = () => {
  const navigate = useNavigate()

  const goToHome = () => {
    navigate('/')
  }

  const goToComparison = () => {
    navigate('/comparison')
  }

  const favoritePokemons = useSelector((state: RootState) => state.favorites.favorites)

  const [searchParams, setSearchParams] = useSearchParams()
  const pageParam = parseInt(searchParams.get('page') || '1', 10)

  const [currentPage, setCurrentPage] = React.useState(pageParam)

  const perPage = 20
  const totalPages = Math.ceil(favoritePokemons.length / perPage)
  const start = (currentPage - 1) * perPage
  const paginated = favoritePokemons.slice(start, start + perPage)

  useEffect(() => {
    if (currentPage > totalPages && totalPages > 0) {
      setCurrentPage(totalPages)
      setSearchParams({ page: totalPages.toString() })
    }
    if (totalPages === 0) {
      setCurrentPage(1)
      setSearchParams({ page: '1' })
    }
  }, [favoritePokemons.length, totalPages, currentPage, setSearchParams])

  const handlePageChange = (page: number) => {
    setCurrentPage(page)
    setSearchParams({ page: page.toString() })
  }

  return (
    <>
      <h1 className={s.header}>Favorites</h1>
      <div className={s.buttons}>
        <button onClick={goToHome} className="defaultButton">
          Home
        </button>
        <button onClick={goToComparison} className="defaultButton">
          Comparison
        </button>
      </div>

      {favoritePokemons.length === 0 ? (
        <p className={s.empty}>You don't have any pokemons in your favorite list.</p>
      ) : (
        <>
          <div className={s.items}>
            {paginated.map((p, i) => (
              <PokemonItem key={p.id} pokemon={p} />
            ))}
          </div>
          <FavoritesPagination
            total={favoritePokemons.length}
            perPage={perPage}
            currentPage={currentPage}
            onPageChange={handlePageChange}
          />
        </>
      )}
    </>
  )
}

export default Favorites
