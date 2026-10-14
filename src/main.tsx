import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import { captureLeadAttribution } from './lib/leadAttribution'
import './styles/tokens.css'
import './styles/global.css'
import 'aos/dist/aos.css'
import 'photoswipe/style.css'

captureLeadAttribution()

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)
