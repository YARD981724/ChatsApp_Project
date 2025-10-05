import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

// import './index.css'
// import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'
import Makhan from './Makhan.jsx'

createRoot(document.getElementById('root')).render(
  // <StrictMode>
  //   <App />
  // </StrictMode>,
    <BrowserRouter>
      <Makhan/>
    </BrowserRouter>
  
)
