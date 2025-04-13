import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App'
import Greeting from './Greeting'
import List from './List'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Greeting />
    <List />
  </StrictMode>,
)