import { useState } from 'react'
import s from './App.module.css'
import Home from './pages/Home'
import MainDetailsPage from './pages/MainDetails'

const App: React.FC = () => {
  return (
    <div className={s.app_wrapper}>
      {/* <Home />; */}
      <MainDetailsPage />
    </div>
  )
}

export default App
