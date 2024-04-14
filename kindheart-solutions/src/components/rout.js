import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Registration from './registration'
import Login from './login'
import { EmailProvider } from './EmailContext';
import AdminProjects from './admin-projects'
import AdminUsers from './admin-users'
import AdminGiveaways from './admin-giveaways'
import Home from './home';


const Rout = () => {
  return (
    <>
    <EmailProvider>
      <Routes>
          <Route path='/' element = {<Home/>}/>
          <Route path='/registration' element={<Registration />} />
          <Route path='/login' element={<Login />} />
          <Route path='/admin-projects' element={<AdminProjects />} />
          <Route path='/admin-users' element={<AdminUsers />} />
          <Route path='/admin-giveaways' element={<AdminGiveaways />} />
      </Routes>
    </EmailProvider>
    </>
  )
}

export default Rout