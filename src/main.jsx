import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import About from './pages/About.jsx'
import Contact from './pages/Contact.jsx'
import Header from './layout/Header.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
   <Header/>
  </React.StrictMode>,
)
