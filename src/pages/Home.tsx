import Header from '../components/Header/Header';
import PokemonList from '../components/PokemonList/PokemonList';
import Pagination from '../components/Pagination/Pagination';

const Home: React.FC = () => {
  return (
    <div>
      <Header />
      <PokemonList />
      <Pagination />
    </div>
  );
};

export default Home;
