import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import './main.css'
import App from './App'
import { store } from './store/index'
import { Provider } from 'react-redux'

const container = document.getElementById('root')

if (!container) {
  throw new Error(
    'Root container not found. Make sure there is a div with id="root" in your index.html'
  )
}

createRoot(container).render(
  <StrictMode>
    <BrowserRouter>
      <Provider store={store}>
        <App />
      </Provider>
    </BrowserRouter>
  </StrictMode>
)
