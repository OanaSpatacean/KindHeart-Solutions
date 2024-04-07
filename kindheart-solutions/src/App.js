import React from 'react' 
import Nav from './components/nav'
import Rout from './components/rout'


import {BrowserRouter} from 'react-router-dom'
import Home from './components/home'





const App = () =>{
  return (
    <>
    <BrowserRouter>

    <Nav/>
    <Rout/>
    </BrowserRouter>
  
    </>
  )
}

export default App;


