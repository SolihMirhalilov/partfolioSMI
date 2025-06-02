import { useEffect, useState } from 'react'
import Navbar from './components/Navbar/NavTop'
import viteLogo from '/vite.svg'
import './App.css'
import { Routes , Route } from 'react-router-dom';



import Valute from './components/Valute/Valute.jsx'
import Menu from './components/Menu/Menu.jsx'
import Footer from './components/Footer.jsx'
import Cript from './Pages/cript.jsx';
import Bussinise from "./Pages/Bussinise.jsx";
import Economic from './Pages/economic.jsx'
import Politic from './Pages/politics.jsx'
import Texnology from './Pages/texnology.jsx'
import World from './Pages/world.jsx'
import Layout from './Layout.jsx/Layout.jsx'
import HotNewsDetails from './components/Menu/HotNewsDetails.jsx';










function App() {

  


  return (
    <>




      <Routes>
        <Route path='/' element={< Layout />} />

        <Route path='/world' element={<World />} />
        <Route path='/bussinis' element={<Bussinise />} />
        <Route path='/cript' element={<Cript />} />
        <Route path='/economic' element={<Economic />} />
        <Route path='/politics' element={<Politic />} />
        <Route path='/texnology' element={<Texnology />} />
        <Route path='/news/:id' element={<HotNewsDetails />} />

      </Routes>


        
        





        
        
    </>
  )
}

export default App
