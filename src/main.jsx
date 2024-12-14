import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import WebApp from "@twa-dev/sdk"

WebApp.ready()
//test

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)