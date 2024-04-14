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
   // const auth = getAuth();

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

            localStorage.setItem("email", email);

            if (emailArray.length > 0 && passwordArray.length > 0) 
            {     
                setAuthenticationStatus(true);  
                alert("Te-ai logat cu succes "+ email + "!");                           
            } 
            else 
            {
                setAuthenticationStatus(false); 
                alert("Verifica-ti mail-ul sau parola, sau creeaza un cont nou!");
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
                <h2>Logare</h2>
                <div className='box'>
                    <input type='text' id='email' placeholder='Email' value={email} onChange={(e) => setEmail(e.target.value)}></input>
                    <input type='password' placeholder='Parola' onChange={(e) => setPassword(e.target.value)}></input>
                    <p>Nu ai cont? <Link to='/registration' className="reg-link">Inregistreaza-te</Link></p>                 
                    <Link to='/' className="home-link" onClick={login}>Intra in cont</Link>               
                </div>
            </div>
        </div>
        </>
    )
}

export default Login