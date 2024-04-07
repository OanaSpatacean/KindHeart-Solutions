import React from 'react' 
import Nav from './components/nav'
import {BrowserRouter} from 'react-router-dom'
import { EmailProvider } from './components/EmailContext';
import { AuthProvider } from './components/AuthContext';
import { useState } from 'react'
import Rout from './components/rout';
import Home from './components/home'

const App = () =>{
  const [email, setEmail] = useState(''); 
  return (
    <>
     <AuthProvider>
        <EmailProvider value={{ email, setEmail }}>
          <BrowserRouter>
            <Nav/>
            <Rout/>
          </BrowserRouter>
        </EmailProvider>
      </AuthProvider>
    </>
  )
}

export default App;


