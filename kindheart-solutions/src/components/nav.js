import React from 'react'
import { FaHandHoldingHeart } from "react-icons/fa";
import { BsFillSearchHeartFill } from "react-icons/bs";
import { FiLogIn } from 'react-icons/fi';
import { CiLogout, CiUser} from 'react-icons/ci';
import "./nav.css"
import {Link} from 'react-router-dom';

const Nav = () =>
{
    return (
        <>
        <div className='header'>
            <div className='top_header'>
                <div className='icon'>
                    <FaHandHoldingHeart />
                </div>
                <div className='Info'>
                    <p>Empower yourself to make a meaningful difference in society!</p>
                </div>
            </div>
            <div className='mid_header'>
          <div className='logo'>
            <img src='image/logo.jpg' alt='logo'></img>
          </div>
          <div className='search_box'>
            <input type='text' value='' placeholder='Search a county'></input>
            <button><BsFillSearchHeartFill /></button>
          </div>         
            <div className='user'>
              <div className='icon'>
                <CiLogout />
              </div>
              <div className='btn'>
                <button>Sign Out</button>
              </div>
            </div>
          <div className='user'>
            <div className='icon'>
              <FiLogIn />
            </div>
            <div className='btn'>
              <button>Sign In</button>
            </div>
          </div>
        </div>
        <div className='last_header'>
                <div className='user_profile'>
                    <div className='icon'>
                        <CiUser />
                    </div>
                    <div className='info'>
                        <h2>user.name</h2>
                        <p>user.email</p>
                    </div>
                    <div className='icon'>
                        <CiUser />
                    </div>
                    <div className='info'>
                        <p>You have to sign in!</p>
                    </div>
                </div>
                <div className='nav'>
                    <ul>
                    <li><Link to='/' className='link'>Home</Link></li>
                    <li><Link to='/sponsor' className='link'>Sponsor here</Link></li>
                    <li><Link to='/contribute' className='link'>Contribute</Link></li>
                    <li><Link to='/about' className='link'>About</Link></li>
                    <li><Link to='/contact' className='link'>Contact</Link></li>
                    </ul>
                </div>
                <div className='offer'>
                    <p>Your voice matters! Select a cause and let's contribute together.</p>
                </div>
            </div>
        </div>
        </>
    )
}
export default Nav;