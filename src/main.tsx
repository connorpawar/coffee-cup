import { createRoot } from 'react-dom/client'
import App from './App'
import './main.css'

const root: HTMLElement | null = document.getElementById('root')

createRoot(root!).render(
  <App />
)