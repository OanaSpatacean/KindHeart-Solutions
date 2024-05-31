import React, {useEffect} from 'react'
import {db} from './firebase'
import './contact.css'
import {Link} from 'react-router-dom'
import {getDocs, collection, where, query, addDoc} from 'firebase/firestore'
import { useState } from 'react'
import { BiSolidDonateHeart } from "react-icons/bi";
import { useAuth } from './AuthContext';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";



import {
    faFacebook,
    faInstagram,
    faTwitter
  } from "@fortawesome/free-brands-svg-icons";

  
import {
    faPhone,
    faLocationDot
  } from "@fortawesome/free-solid-svg-icons";



const Contact = () => {
    const { isAuthenticated, setAuthenticationStatus } = useAuth();

    return (
        <>
        
            <center className="margin125">

               <h1>

                <p className='custom-font'>Ne puteți găsi:</p>
               </h1>
                <h2 className="margin50">
                    <a href="https://maps.app.goo.gl/PDz9WeoGwTCWP2UA8"
                        className="map social">
                        <FontAwesomeIcon icon={faLocationDot} size="2x" />
                    </a>
                    <a className="map custom-font" href="https://maps.app.goo.gl/PDz9WeoGwTCWP2UA8"> Universitatea Politehnica Timișoara</a>
                </h2>

                <h2 className="margin50">
                    <a href="tel:+407777777777"
                        className="tel social">
                        <FontAwesomeIcon icon={faPhone} size="2x" />
                    </a>
                    <a className="tel custom-font" href="tel:+407777777777">+40787 344 643</a>
                </h2>

                <div className='content'>


                    <a href="https://www.facebook.com/learnbuildteach/"
                        className="facebook social">
                        <FontAwesomeIcon icon={faFacebook} size="3x" />
                    </a>

                    <a href="https://www.instagram.com/_gabriela.vieriu_/"
                        className="instagram social">
                    <FontAwesomeIcon icon={faInstagram} size="3x" />
                    </a>

                    <a href="https://www.instagram.com/oana718/"
                        className="twitter social">
                    <FontAwesomeIcon icon={faTwitter} size="3x" />
                    </a>

                </div>
            </center>
        </>
    )
}

export default Contact