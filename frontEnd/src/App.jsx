import React from "react"
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from "./home"
import 'bootstrap/dist/css/bootstrap.min.css' //estilos css home.jsx
import Create from "./Create"
import Read from "./Read"
import Update from "./Update"

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} /> 
        <Route path='/create' element={<Create />} /> 
        <Route path='/read/:nombre' element={<Read />} /> 
        <Route path='/edit/:nombre' element={<Update />} /> 


      </Routes>
    </BrowserRouter>
  )
}

export default App

