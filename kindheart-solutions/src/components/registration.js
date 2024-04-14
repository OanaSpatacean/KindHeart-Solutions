import React, { useState } from 'react'
import {db} from './firebase'
import './registration.css'
import {Link} from 'react-router-dom'
import {getDocs, addDoc, collection, where, query} from 'firebase/firestore'

const Registration = () => {
    const[name, setName] = useState('');
    const[email, setEmail] = useState('');
    const[password, setPassword] = useState('');
    const dbref = collection(db, 'Login');
    const[metch, setMetch] = useState([]);

    const register = async () =>
    {
        const matchEmail = query(dbref, where('Email', '==', email));
        try 
        {
            const snapshot = await getDocs(matchEmail);
            const emailMatchingArray = snapshot.docs.map((doc) => doc.data())

            if(emailMatchingArray.length > 0)
            {
                alert("Adresa aceasta de mail exista!");
            }
            else
            {
                await addDoc(dbref, {Name: name, Email: email, Password: password});
                alert("Te-ai inregistrat cu succes!");
                window.location.href = '/login'; 
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
                <h2>Inregistrare</h2>
                <div className='box'>
                    <input type='text' placeholder='Nume' onChange={(e) => setName(e.target.value)}></input>
                    <input type='email' placeholder='Email' onChange={(e) => setEmail(e.target.value)}></input>
                    <input type='password' placeholder='Parola' onChange={(e) => setPassword(e.target.value)}></input>
                    <p>Ai deja cont! <Link to='/login' className="log-link">Logheaza-te</Link></p>
                    <button onClick={register}>Creeaza cont</button>
                </div>
            </div>
        </div>
        </>
    )
}

export default Registration