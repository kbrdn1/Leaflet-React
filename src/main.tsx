import React from 'react'
import ReactDOM from 'react-dom/client'
import Map from './pages/Map.tsx'
import '@styles/index.css'
import 'leaflet/dist/leaflet.css';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <Map />
  </React.StrictMode>,
)
