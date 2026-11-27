import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import { captureLeadAttribution } from './lib/leadAttribution'
import './styles/tokens.css'
import './styles/global.css'
import 'aos/dist/aos.css'
import 'photoswipe/style.css'

captureLeadAttribution()

// The build embeds the same public content rendered in the initial HTML.
const snapshotElement = document.getElementById('blog-snapshot')
const initialData = snapshotElement?.textContent ? JSON.parse(snapshotElement.textContent) : undefined
snapshotElement?.remove()

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App initialData={initialData} />
  </React.StrictMode>
)
