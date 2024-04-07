import React, { useEffect, useState } from 'react'
import { db } from './firebase'
import './admin.css'
import {doc, addDoc, collection, deleteDoc, getDocs, setDoc, updateDoc} from 'firebase/firestore'

const CrudUsers = () => {
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
            alert("Data added successfully!");
            await fetch();
        }
        else
        {
            alert("Error occured when adding data!");
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
            alert("Data updated successfully!");
            await fetch();
        } 
        catch (error) 
        {
            alert(error, "Error occured when updating data!");
        }
    }

    const del = async (id) =>
    {
        const delref = doc(dbref, id);
        try 
        {
            await deleteDoc(delref);
            alert("Data deleted successfully!");
            await fetch();
        } 
        catch (error) 
        {
            alert(error, "Error occured when deleting data!");
        }
    }

    return (
        <>
        <div class='form-container'>
            <h2>Add / Update Form for Users</h2>
            <div class='box_FORM'>
                <input type='text' placeholder='Name' autocomplete='Off' value={Name} onChange={(e) => setName(e.target.value)}></input>
            </div>
            <div class='box_FORM'>
                <input type='text' placeholder='Email' autocomplete='Off' value={Email} onChange={(e) => setEmail(e.target.value)}></input>
            </div>
            <div class='box_FORM'>
                <input type='password' placeholder='Password' autocomplete='Off' value={Password} onChange={(e) => setPassword(e.target.value)}></input>
            </div>
            <button onClick={add}>Add</button>
            <button onClick={update}>Update</button>
        </div>
        <div class='database'>
            <h2>CRUD Database</h2>
            <div class='container'>
                {
                    fetchData.map((data) => {
                        return (
                            <>
                            <div className='box'>
                                <h3>Email: {data.Email}</h3>
                                <h3>Name: {data.Name}</h3>
                                <h3>Password: {data.Password}</h3>                
                                <button onClick={ () => passData (data.id) }>Update</button>
                                <button onClick={ () => del (data.id) }>Delete</button>
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

export default CrudUsers