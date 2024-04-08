import React from 'react'
import {BrowserRouter, Navigate, Route, Switch, Routes} from 'react-router-dom';
import Registration from './registration/registration'
import Login from './login/login'
import { EmailProvider } from './EmailContext';
import AdminProjects from './admin-projects'
import AdminUsers from './admin-users'
import AdminGiveaways from './admin-giveaways'
import Projects from './Projects/Projects';
import MyProjects from './MyProjects/MyProjects';
import Sponsored from './Sponsored/Sponsored';
import Blog from './Blog/Blog';
import Help from './Help/Help';


function PrivateRoute({ Component }) {
  let isAuthenticated = localStorage.getItem("isAuthenticated");
  return isAuthenticated == "true" ? (<Component/>) : (<Navigate to="/login" />);
}

const Rout = () => {
  return (
    <>
    <EmailProvider>
      <Routes>
          <Route path='/' element = {<PrivateRoute Component={Projects}/>}/>
          <Route path='/Projects' element = {<PrivateRoute Component={Projects}/>}/>
          <Route path='/MyProjects' element = {<PrivateRoute Component={MyProjects}/>}/>
          <Route path='/Sponsored' element = {<PrivateRoute Component={Sponsored}/>}/>
          <Route path='/Blog' element = {<PrivateRoute Component={Blog}/>}/>
          <Route path='/Help' element = {<PrivateRoute Component={Help}/>}/>
          <Route path='/registration' element={<Registration />} />
          <Route path='/login' element={<Login />} />
          <Route path='/admin-projects' element={<PrivateRoute Component={AdminProjects} />} />
          <Route path='/admin-users' element={<PrivateRoute Component={AdminUsers} />} />
          <Route path='/admin-giveaways' element={<PrivateRoute Component={AdminGiveaways} />} />
      </Routes>
    </EmailProvider>
    </>
  )
}

export default Rout