import { Routes, Route } from 'react-router-dom'
import s from './App.module.css'
import Comparison from './screens/Comparison/Comparison'
import { Toaster } from 'react-hot-toast'
import GlobalErrorToast from './components/common/GlobalErrorToast'
import Favorites from './screens/Favorites/Favorites'
import Home from './screens/Home/Home'

import MainDetailsPage from './screens/MainDetails/MainDetails'

const App: React.FC = () => {
  return (
    <div className={s.app_wrapper}>
      <Toaster
        position="bottom-center"
        toastOptions={{
          style: {
            background: '#333',
            color: 'black',
            borderRadius: '8px',
            border: "1px solid black"
          },
          error: {
            style: {
              background: 'white',
            },
            iconTheme: {
              primary: 'red',
              secondary: '#fff',
            }
          },
        }}
      />
      <GlobalErrorToast />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/favorites" element={<Favorites />} />
        <Route path="/comparison" element={<Comparison />} />
        <Route path="/details/:id" element={<MainDetailsPage />} />
      </Routes>
    </div>
  )
}

export default App
