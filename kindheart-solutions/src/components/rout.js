import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Registration from './registration'
import Login from './login'
import { EmailProvider } from './EmailContext';
import AdminProiecte from './admin-proiecte'
import AdminUtilizatori from './admin-utilizatori'
import AdminDonatii from './admin-donatii'
import AdminPareri from './admin-pareri'
import Home from './home';
import Proiecte from './proiecte';
import Contribuieaici from './contribuieaici';
import Plata from './plata';


const Rout = ({shop, Filter, allcatefilter, addtocart, cart, setCart}) => {
  return (
    <>
    <EmailProvider>
      <Routes>
          <Route path='/' element = {<Home/>}/>
          <Route path='/registration' element={<Registration />} />
          <Route path='/login' element={<Login />} />
          <Route path='/admin-proiecte' element={<AdminProiecte />} />
          <Route path='/admin-utilizatori' element={<AdminUtilizatori />} />
          <Route path='/admin-donatii' element={<AdminDonatii />} />
          <Route path='/admin-pareri' element={<AdminPareri />} />
          <Route path='/contribuieaici' element={<Contribuieaici cart={cart} setCart ={setCart}/>} />
          <Route path='proiecte' element={<Proiecte shop={shop} Filter={Filter} allcatefilter={allcatefilter} addtocart={addtocart}/>} />
          <Route path='/plata' element={<Plata />} />
      </Routes>
    </EmailProvider>
    </>
  )
}

export default Rout