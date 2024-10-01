import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
// import App from './App.jsx'
// import Header from './components/Header'
import Heropage from './components/Heropage'
// import App from './App.jsx'
import './index.css'
import './App.css'
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Heropage/>
  </StrictMode>,
)
