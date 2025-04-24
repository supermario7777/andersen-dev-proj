import s from './App.module.css'
import Comparison from './pages/Comparison/Comparison'
import Favorites from './pages/Favorites/Favorites'
import Home from './pages/Home/Home'
import MainDetailsPage from './pages/MainDetails/MainDetails'

const App: React.FC = () => {
  return (
    <div className={s.app_wrapper}>
      {/* <Home /> */}
      {/* <MainDetailsPage /> */}
      <Favorites />
      <Comparison />
    </div>
  )
}

export default App
