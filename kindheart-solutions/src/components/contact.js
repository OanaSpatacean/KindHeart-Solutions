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
    faInstagram
  } from "@fortawesome/free-brands-svg-icons";


const Contact = () => {
    const { isAuthenticated, setAuthenticationStatus } = useAuth();

    return (
        <>
        <div className='checkout_container'>
            <div className='contant'>

                <a href="https://www.facebook.com/learnbuildteach/"
                    className="facebook social">
                    <FontAwesomeIcon icon={faFacebook} size="2x" />
                </a>
                <a href="https://www.instagram.com/_gabriela.vieriu_/"
                    className="instagram social">
                <FontAwesomeIcon icon={faInstagram} size="2x" />
                </a>
                <a href="https://www.instagram.com/oana718/"
                    className="instagram social">
                <FontAwesomeIcon icon={faInstagram} size="2x" />
                </a>
            </div>
        </div>
        </>
    )
}

export default Contact