import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import NavBar from './assets/components/navBar/NavBar.jsx'
import LandingPage from './assets/components/landingPage/LandingPage.jsx'
import searchBar from './assets/components/searchBar/searchBar.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
    <LandingPage />
    </StrictMode>,

)
