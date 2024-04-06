import React, {useEffect} from 'react'
import {db} from './firebase'
import './login.css'
import {Link} from 'react-router-dom'
import {getDocs, collection, where, query} from 'firebase/firestore'
import { useState } from 'react'
import { useEmail, useEmailValue } from './EmailContext'
import { useAuth } from './AuthContext';
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';
import './login.css';

const Login = () => {
    const { email, setEmail} = useEmail();
    const { isAuthenticated, setAuthenticationStatus } = useAuth();

    const[password, setPassword] = useState('');

    const auth = getAuth();

    const login = async () =>
    {
        const dbref = collection(db, 'Login');
        try 
        {
            // Sign in with email and password
            await signInWithEmailAndPassword(auth, email, password);
              
            localStorage.setItem("email", email);

            // Update authentication status
            setAuthenticationStatus(true);
  
            alert('Successfully logged in ' + email + '!'); 
        } 
        catch (error) 
        {
            alert(error + " --- Check your email or password, or create a new account!");
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