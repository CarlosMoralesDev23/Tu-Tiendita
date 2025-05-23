import { useState } from 'react'
import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import Home from './Layouts/Home'
import MiCuenta from './Layouts/MiCuenta'
import Categorias from './Layouts/Categorias'
import Ofertas from './Layouts/Ofertas'
import Registrate from './Layouts/Registrate'
import Login from './Layouts/Login'
import Cart from './Components/Reutilizables/Cart/Cart'

function App() {

  return (
    <>
      <Router>
        <Routes>

          <Route path='/MiCuenta'   element={<MiCuenta/>} ></Route>
          <Route path='/Home'       element={<Home/>}></Route>
          <Route path='/Categorias' element={<Categorias/>} ></Route>
          <Route path='/Ofertas'    element={<Ofertas/>} ></Route>
          <Route path='/Registrate' element={<Registrate/>} ></Route>
          <Route path='/Login'      element={<Login/>} ></Route>
          <Route path='/Cart'       element={<Cart/>} ></Route>

        </Routes>
      </Router>


    </>
  )
}

export default App
