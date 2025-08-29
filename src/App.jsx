import React from "react"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Layout from "./components/Layout"
import 'remixicon/fonts/remixicon.css'
import Home from "./components/Home"
import 'bootstrap/dist/css/bootstrap.min.css';


const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={< Home /> } /> 
      </Routes>
    </BrowserRouter>
  )
}

export default App