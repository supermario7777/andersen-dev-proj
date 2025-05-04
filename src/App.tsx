import { Routes, Route } from 'react-router-dom'
import s from './App.module.css'
import Comparison from './pages/Comparison/Comparison'
import Favorites from './pages/Favorites/Favorites'
import Home from './pages/Home/Home'
import MainDetailsPage from './pages/MainDetails/MainDetails'

const App: React.FC = () => {
  return (
    <div className={s.app_wrapper}>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/favorites" element={<Favorites />}></Route>
        <Route path="/comparison" element={<Comparison />}></Route>
        <Route path="/details/:id" element={<MainDetailsPage />}></Route>
      </Routes>
    </div>
  )
}

export default App
