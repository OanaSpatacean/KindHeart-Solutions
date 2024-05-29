import React from 'react'
import { FaHandHoldingHeart } from "react-icons/fa";
import { BsFillSearchHeartFill } from "react-icons/bs";
import { FiLogIn } from 'react-icons/fi';
import { CiLogout, CiUser} from 'react-icons/ci';
import "./nav.css"
import {Link} from 'react-router-dom';
import { useEmail, EmailProvider, useEmailValue } from './EmailContext';
import { useAuth } from './AuthContext';
import Login from './login'
import { useState } from 'react'

const Nav = ({search, setSearch, searchproduct}) =>
{
    const { email, setEmail} = useState(window.localStorage.getItem("email"));
    const { isAuthenticated, setAuthenticationStatus } = useAuth();

    return (
        <>
        <div className='header'>
           
        <div className='last_header'>
                <div className='user_profile'>
                  {
                    isAuthenticated ?
                    <>
                    <div className='logo'>
                      <img src='image/logo.jpg' alt='logo'></img>
                    </div>
                    <div className='info'>
                        <h2>{window.localStorage.getItem("email")}</h2>
                      <div className='btn'>
                        <button  onClick={ () => {setAuthenticationStatus(false); window.location.reload();} }>Delogheaza-te <CiLogout/></button>
                      </div>
                    </div>
                    
                    </>
                    :
                    <>
                    <div className='logo'>
                      <img src='image/logo.jpg' alt='logo'></img>
                    </div>
                    <br/>
                    <br/>
                    <div className='info'>
                      <div className='btn'>
                        <Link to="/login" className="auth-link" >Logheaza-te <FiLogIn /></Link>
                      </div>
                    </div>
                    </>
                  }
                </div>
                
                <div className='search_box'>
                  <input type='text' value={search} placeholder='Cauta proiecte in judetul tau' onChange={(e) => setSearch(e.target.value)}></input>
                  <button onClick={searchproduct}><BsFillSearchHeartFill /></button>
                </div> 
                <div className='nav'>
                
                {
                      isAuthenticated && window.localStorage.getItem("email") === 'admin@yahoo.com' ? 
                      <>
                      <ul>
                          <li>
                            <Link to='/admin-utilizatori' className='link'>Utilizatori</Link>
                          </li>
                          <li>
                            <Link to='/admin-proiecte' className='link'>Proiecte</Link>
                          </li>
                          <li>
                            <Link to='/admin-donatii' className='link'>Donatii</Link>
                          </li>
                          <li>
                            <Link to='/admin-pareri' className='link'>Pareri</Link>
                          </li>
                        </ul>
                      </>
                      :
                      <>
                        <ul>
                          <li><Link to='/' className='link'>Acasa</Link></li>
                          <li><Link to='/proiecte' className='link'>Proiecte</Link></li>
                          <li><Link to='/contribuieaici' className='link'>Contribuie aici</Link></li>
                          <li><Link to='/proiectelemele' className='link'>Proiectele mele</Link></li>
                          <li><Link to='/blog' className='link'>Blog</Link></li>
                          <li><Link to='/desprenoi' className='link'>Despre noi</Link></li>
                          <li><Link to='/contact' className='link'>Contact</Link></li>
                        </ul>
                    </>
                }
                </div>
            </div>
        </div>
        </>
    )
}
export default Nav;