import React, {useEffect} from 'react'
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { createTheme , ThemeProvider} from '@mui/material/styles';


import {db} from '../firebase'
import './login.css'
import {Link} from 'react-router-dom'
import {getDocs, collection, where, query} from 'firebase/firestore'
import { useState } from 'react'
import { useEmail, useEmailValue } from '../EmailContext'
import { useAuth } from '../AuthContext';


const Login = () => {

    const { palette } = createTheme();
    const { augmentColor } = palette;
    const createColor = (mainColor) => augmentColor({ color: { main: mainColor } });
    const theme = createTheme({
      palette: {
        black: createColor('#000000'),
        pink: createColor('#c2185b'),
      },
    });

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
                localStorage.setItem("isAuthenticated", true);
                alert("Successfully logged in "+ email + "!");    
                window.location.replace('/');
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
        <ThemeProvider theme={theme}>
            <div className='header'>
            <div className="left">
            <img src="./image/1_2.jpg" className="image" alt="logo" />
            </div>
            <div className='right'>
                <h1>
                    LOG IN
                </h1>
                    <br/>
                <div className='box'>
                    <TextField id="email" label="email" type="email" value={email} onChange={(e) => setEmail(e.target.value)}/>
                    <br/><br/>
                    <TextField id="password" label="password" type="password"  onChange={(e) => setPassword(e.target.value)}/>
                    <br/><br/>
                    <p>Don't have an account? <Link to='/registration' className="reg-link">Register</Link></p>                 
                    <br/>   

                    <Button variant="contained" size="large" color="pink" onClick={login}>
                        Log In
                    </Button>

                </div>
            </div>


        {/* 
                    <input type='text' id='email' placeholder='Email' value={email} onChange={(e) => setEmail(e.target.value)}></input>
                    <input type='password' placeholder='Password' onChange={(e) => setPassword(e.target.value)}></input>
                    <p>Don't have an account? <Link to='/registration' className="reg-link">Register</Link></p>                 
                    <Link to='/' className="home-link" onClick={login}>Sign In</Link>               
                = */}
            </div>
        </ThemeProvider>
    )
}

export default Login