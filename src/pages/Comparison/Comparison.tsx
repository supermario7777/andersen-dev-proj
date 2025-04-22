import { useComparison } from '../../context/ComparisonContext'

const Comparison: React.FC = () => {
  const { comparisonList } = useComparison()

  if (comparisonList.length === 0) {
    return (
      <div className="p-4 text-center text-gray-500">Please select two Pokémon to compare.</div>
    )
  }

  return (
    <div className="p-4">
      <h2 className="text-2xl font-bold mb-6">Compare Pokémon</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {comparisonList.map((pokemon) => (
          <div key={pokemon.id} className="relative p-4 border rounded shadow text-center">
            {/* Remove icon — simple 'X' icon */}
            <button
              className="absolute top-2 right-2 text-gray-400 hover:text-red-500"
              title="Remove from comparison"
            >
              ✖️
            </button>

            <img src={pokemon.image} alt={pokemon.name} className="w-24 h-24 mx-auto mb-2" />
            <h3 className="text-lg font-semibold">{pokemon.name}</h3>
            <p>Height: {pokemon.height}</p>
            <p>Weight: {pokemon.weight}</p>
          </div>
        ))}
      </div>

      {comparisonList.length === 1 && (
        <p className="mt-4 text-center text-gray-500">Please select one more Pokémon to compare.</p>
      )}
    </div>
  )
}

export default Comparison
