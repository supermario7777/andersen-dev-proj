import { Routes, Route } from 'react-router-dom'
import s from './App.module.css'
import Comparison from './screens/Comparison/Comparison'
import Favorites from './screens/Favorites/Favorites'
import Home from './screens/Home/Home'
import MainDetailsPage from './screens/MainDetails/MainDetails'

const App: React.FC = () => {
  return (
    <div className={s.app_wrapper}>
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/favorites" element={<Favorites />}/>
        <Route path="/comparison" element={<Comparison />}/>
        <Route path="/details/:id" element={<MainDetailsPage />}/>
      </Routes>
    </div>
  )
}

export default App
