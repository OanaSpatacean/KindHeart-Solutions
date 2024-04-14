import React, { useEffect, useState } from 'react'
import { db } from './firebase'
import './admin.css'
import {doc, addDoc, collection, deleteDoc, getDocs, setDoc, updateDoc} from 'firebase/firestore'

const AdminUtilizatori = () => {
    const [ id, setId ] = useState();
    const [ Name, setName ] = useState();
    const [ Email, setEmail ] = useState();
    const [ Password, setPassword ] = useState();

    const [ fetchData, setFetchData ] = useState([]);

    const dbref = collection(db, "Login");

    const add = async () =>
    {
        const adddata = await addDoc(dbref, {Name: Name, Email: Email, Password: Password});

        if(adddata)
        {
            alert("Utilizator adaugat cu succes!");
            await fetch();
        }
        else
        {
            alert("Eroare la adaugarea unui utilizator!");
        }
    }

    const fetch = async () =>
    {
        const snapshot = await getDocs(dbref);
        const fetchdata = snapshot.docs.map((doc => ({id: doc.id, ...doc.data()})));
        setFetchData(fetchdata);      
    }

    useEffect( () =>
    {
        fetch();
    }, []
    )

    const passData = async (id) =>
    {
        const matchId = fetchData.find((data) => {
            return data.id === id;
        })
        setId(id);
        setName(matchId.Name);  
        setEmail(matchId.Email); 
        setPassword(matchId.Password); 
    }

    const update = async () =>
    {
        const updateref = doc(dbref, id);
        try 
        {
            await updateDoc(updateref, {Name: Name, Email: Email, Password: Password});
            alert("Utilizator updatat cu succes!");
            await fetch();
        } 
        catch (error) 
        {
            alert(error, "Eroare la updatarea unui utilizator!");
        }
    }

    const del = async (id) =>
    {
        const delref = doc(dbref, id);
        try 
        {
            await deleteDoc(delref);
            alert("Utilizator sters cu succes!");
            await fetch();
        } 
        catch (error) 
        {
            alert(error, "Eroare la stergerea unui utilizator!");
        }
    }

    return (
        <>
        <div class='form-container'>
            <h2>Formular administrare utilizatori</h2>
            <div class='box_FORM'>
                <input type='text' placeholder='Nume' autocomplete='Off' value={Name} onChange={(e) => setName(e.target.value)}></input>
            </div>
            <div class='box_FORM'>
                <input type='text' placeholder='Email' autocomplete='Off' value={Email} onChange={(e) => setEmail(e.target.value)}></input>
            </div>
            <div class='box_FORM'>
                <input type='password' placeholder='Parola' autocomplete='Off' value={Password} onChange={(e) => setPassword(e.target.value)}></input>
            </div>
            <button onClick={add}>Adauga</button>
            <button onClick={update}>Updateaza</button>
        </div>
        <div class='database'>
            <h2>Baza de date</h2>
            <div class='container'>
                {
                    fetchData.map((data) => {
                        return (
                            <>
                            <div className='box'>
                                <h3>Email: {data.Email}</h3>
                                <h3>Name: {data.Name}</h3>
                                <h3>Password: {data.Password}</h3>                
                                <button onClick={ () => passData (data.id) }>Updateaza</button>
                                <button onClick={ () => del (data.id) }>Sterge</button>
                            </div>
                            </>
                        )
                    })
                }                
            </div>
        </div>
        </>
    )
}

export default AdminUtilizatori