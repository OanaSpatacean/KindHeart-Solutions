import React, {useEffect} from 'react'
import {db} from './firebase'
import './plata.css'
import {Link} from 'react-router-dom'
import {getDocs, collection, where, query, addDoc} from 'firebase/firestore'
import { useState } from 'react'
import { BiSolidDonateHeart } from "react-icons/bi";
import { useAuth } from './AuthContext';

const Plata = () => {
    const { isAuthenticated, setAuthenticationStatus } = useAuth();
    const [ OrderSent, setOrderSent ] = useState();

    const [ Name, setName ] = useState('');
    const [ Phone, setPhone ] = useState('');
    const [ Number, setNumber ] = useState('');
    const [ Expire, setExpire ] = useState('');
    const [ CVV, setCVV ] = useState('');

    const senddata = async () => 
    {
        const dbref = collection(db, 'Donatii');
        try 
        {
            const matchName = query(dbref, where('Name', '==', Name));
            const matchPhone = query(dbref, where('Phone', '==', Phone));
            const matchNumber = query(dbref, where('Number', '==',  Number));
            const matchExpire = query(dbref, where('Expire', '==', Expire));
            const matchCVV = query(dbref, where('CVV', '==', CVV));

            const NameSnapshot = await getDocs(matchName);
            const NameArray = NameSnapshot.docs.map((doc) => doc.data());

            const PhoneSnapshot = await getDocs(matchPhone);
            const PhoneArray = PhoneSnapshot.docs.map((doc) => doc.data());

            const NumberSnapshot = await getDocs(matchNumber);
            const NumberArray = NumberSnapshot.docs.map((doc) => doc.data());

            const ExpireSnapshot = await getDocs(matchExpire);
            const ExpireArray = ExpireSnapshot.docs.map((doc) => doc.data());

            const CVVSnapshot = await getDocs(matchCVV);
            const CVVArray = CVVSnapshot.docs.map((doc) => doc.data());

            if (NameArray.length > 0 && PhoneArray.length > 0 && NumberArray.length > 0 && ExpireArray.length > 0 && CVVArray.length > 0) 
            {      
                setOrderSent(false);
                alert("A avut loc o eroare, te rog verifica daca toate campurile sunt completate!");                           
            } 
            else 
            {
                await addDoc(dbref, {Name: Name, Phone: Phone, Number: Number, Expire: Expire, CVV: CVV});
                setOrderSent(true);
                alert("Donatia ta a fost trimisa! Plata a fost procesata!");
            }
        } 
        catch (error) 
        {
            alert(error);
        }   
    }

    return (
        <>
        <div className='checkout_container'>
            <div className='contant'>
                <h2>Finalizeaza plata si doneaza <BiSolidDonateHeart/></h2>
                <div className='form'>
                        <input type='text' name='Name' placeholder='Introdu numele tau complet' autoComplete='off' onChange={(e) => setName(e.target.value)}></input>
                        <input type='text' name='Phone' placeholder='Introdu numarul tau de telefon' autoComplete='off' onChange={(e) => setPhone(e.target.value)}></input>
                        <input type='text' name='Number' placeholder='Introdu numarul cardului' autoComplete='off' onChange={(e) => setNumber(e.target.value)}></input>
                        <input type='text' name='Expire' placeholder='Introdu data de expirare a cardului' autoComplete='off' onChange={(e) => setExpire(e.target.value)}></input>
                        <input type='text' name='CVV' placeholder='Introdu CVV-ul cardului tau' autoComplete='off' onChange={(e) => setCVV(e.target.value)}></input>
                        {
                            isAuthenticated ? 
                            <button type='submit' onClick={senddata}>Doneaza</button>
                            : <a type='submit' href="/login">Logheaza-te pentru a putea dona</a>
                        }
                </div>
            </div>
        </div>
        </>
    )
}

export default Plata