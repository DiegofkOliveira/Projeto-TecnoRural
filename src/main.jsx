import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Rotas from './routes/routes.jsx'
import { Analytics } from "@vercel/analytics/react"


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Rotas />
    <Analytics/>
  </StrictMode>,
)
