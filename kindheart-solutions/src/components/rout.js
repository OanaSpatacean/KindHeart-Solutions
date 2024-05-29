import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Registration from './registration'
import Login from './login'
import { EmailProvider } from './EmailContext';
import AdminProiecte from './admin-proiecte'
import AdminUtilizatori from './admin-utilizatori'
import AdminDonatii from './admin-donatii'
import AdminPareri from './admin-pareri'
import Proiectelemele from './proiectelemele';
import Proiecte from './proiecte';
import Contribuieaici from './contribuieaici';
import Plata from './plata';
import Contact from './contact';
import Home from './home';
import DespreNoi from './desprenoi';

const Rout = ({shop, Filter, allcatefilter, addtocart, cart, setCart, email}) => {
  return (
    <>
    <EmailProvider>
      <Routes>
          <Route path='/' element={<Home addtocart={addtocart}/>}/>
          <Route path='/' element = {<Proiecte  shop={shop} Filter={Filter} allcatefilter={allcatefilter} addtocart={addtocart}/>}/>
          <Route path='/registration' element={<Registration />} />
          <Route path='/login' element={<Login />} />
          <Route path='/admin-proiecte' element={<AdminProiecte />} />
          <Route path='/admin-utilizatori' element={<AdminUtilizatori />} />
          <Route path='/admin-donatii' element={<AdminDonatii />} />
          <Route path='/admin-pareri' element={<AdminPareri />} />
          <Route path='/contribuieaici' element={<Contribuieaici cart={cart} setCart ={setCart}/>} />
          <Route path='proiecte' element={<Proiecte shop={shop} Filter={Filter} allcatefilter={allcatefilter} addtocart={addtocart}/>} />
          <Route path='/plata' element={<Plata />} />
          <Route path='/proiectelemele' element={<Proiectelemele  shop={shop} email={email}/>} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/desprenoi' element={<DespreNoi />} />

      </Routes>
    </EmailProvider>
    </>
  )
}

export default Rout