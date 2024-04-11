import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'


import { CreateHeader } from "./components/header/header"
import { CreateAboutMe } from "./components/aboutMe/aboutMe"
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
