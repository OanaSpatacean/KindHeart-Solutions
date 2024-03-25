import React from 'react'
import { FaHandHoldingHeart } from "react-icons/fa";
import { BsFillSearchHeartFill } from "react-icons/bs";
import { FiLogIn } from 'react-icons/fi';
import { CiLogout, CiUser} from 'react-icons/ci';
import "./nav.css"

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
          
        </div> 
    </div>
        </>
    )
}
export default Nav;