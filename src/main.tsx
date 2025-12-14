import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import ReactGA from 'react-ga4'
import './index.css'
import App from './App.tsx'

// Initialize Google Analytics only in production
if (import.meta.env.VITE_GA_MEASUREMENT_ID && import.meta.env.PROD) {
  ReactGA.initialize(import.meta.env.VITE_GA_MEASUREMENT_ID)
}

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </StrictMode>,
)
