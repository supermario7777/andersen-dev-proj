import { useFavorites } from '../../context/FavoritesContext'
import type { Pokemon } from '../../types/pokemon'

const Favorites: React.FC = () => {
  const { favorites, toggleFavorite } = useFavorites()

  if (favorites.length === 0) {
    return <p className="text-center mt-4 text-gray-500">You do not have any favorite pokemon(s).</p>
  }

  return (
    <div className="p-4">
      <h2 className="text-xl font-bold mb-4">Favorite pokemons</h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {favorites.map((pokemon: Pokemon) => (
          <div key={pokemon.id} className="p-4 border rounded shadow">
            <h3 className="text-lg font-semibold mb-2">{pokemon.name}</h3>
            <img src={pokemon.image} alt={pokemon.name} className="w-24 h-24 mx-auto" />
            <p className="text-sm">Height: {pokemon.height}</p>
            <p className="text-sm">Weight: {pokemon.weight}</p>
            <button
              onClick={() => toggleFavorite(pokemon)}
              className="mt-2 px-3 py-1 text-sm bg-red-500 text-white rounded hover:bg-red-600"
            >
              Remove from favorites
            </button>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Favorites
