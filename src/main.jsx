import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { AdviceApp } from './AdviceApp.jsx'
import './index.css'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AdviceApp />
  </StrictMode>,
)
