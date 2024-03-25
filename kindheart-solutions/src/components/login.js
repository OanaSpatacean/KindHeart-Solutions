import React, {useEffect} from 'react'
import {db} from './firebase'
import './registration.css'
import {Link} from 'react-router-dom'
import {getDocs, collection, where, query} from 'firebase/firestore'
import { useState } from 'react'
import { useEmail, useEmailValue } from './EmailContext'
import { useAuth } from './AuthContext';

const Login = () => {
    const { email, setEmail} = useEmail();
    const { isAuthenticated, setAuthenticationStatus } = useAuth();

    const[password, setPassword] = useState('');

    const login = async () =>
    {
        const dbref = collection(db, 'Login');
        try 
        {
            const matchEmail = query(dbref, where('Email', '==', email));
            const matchPassword = query(dbref, where('Password', '==', password));

            const emailSnapshot = await getDocs(matchEmail);
            const emailArray = emailSnapshot.docs.map((doc) => doc.data());

            const passwordSnapshot = await getDocs(matchPassword);
            const passwordArray = passwordSnapshot.docs.map((doc) => doc.data());

            <input
                type='text'
                id='email'
                placeholder='E-mail'
                value={email} // Use the email state as the input value
                onChange={(e) => setEmail(e.target.value)}
            ></input>

            if (emailArray.length > 0 && passwordArray.length > 0) 
            {     
                setAuthenticationStatus(true);  
                alert("Successfully logged in "+ email + "!");                           
            } 
            else 
            {
                setAuthenticationStatus(false); 
                alert("Check your email or password, or create a new account!");
            }
        } 
        catch (error) 
        {
            alert(error);
        }   
    }

    return (
        <>
        <div className='container'>
            <div className='form'>
                <h2>Login</h2>
                <div className='box'>
                    <input type='text' id='email' placeholder='Email' value={email} onChange={(e) => setEmail(e.target.value)}></input>
                    <input type='password' placeholder='Password' onChange={(e) => setPassword(e.target.value)}></input>
                    <p>Don't have an account? <Link to='/registration' className="reg-link">Register</Link></p>                 
                    <Link to='/' className="home-link" onClick={login}>Sign In</Link>               
                </div>
            </div>
        </div>
        </>
    )
}

export default Login