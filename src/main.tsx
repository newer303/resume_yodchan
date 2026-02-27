import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App'

const rootElementId = 'root'
let rootEl = document.getElementById(rootElementId)
if (!rootEl) {
  rootEl = document.createElement('div')
  rootEl.id = rootElementId
  document.body.appendChild(rootEl)
}

createRoot(rootEl).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
