import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Registration from './registration'
import Login from './login'
import { EmailProvider } from './EmailContext';

const Rout = () => {
  return (
    <>
    <EmailProvider>
      <Routes>
          <Route path='/registration' element={<Registration />} />
          <Route path='/login' element={<Login />} />
      </Routes>
    </EmailProvider>
    </>
  )
}

export default Rout