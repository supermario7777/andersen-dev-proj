import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './main.css'
import App from './App'

const container = document.getElementById('root')

if (!container) {
  throw new Error(
    'Root container not found. Make sure there is a div with id="root" in your index.html'
  )
}

createRoot(container).render(
  <StrictMode>
    <App />
  </StrictMode>
)
