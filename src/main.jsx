import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './scss/styles.scss'
import * as bootstrap from 'bootstrap'
import * as Popper from "@popperjs/core"
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
