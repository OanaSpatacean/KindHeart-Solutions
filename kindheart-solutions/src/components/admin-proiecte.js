import React, { useEffect, useState } from 'react'
import { db } from './firebase'
import './admin.css'
import {doc, addDoc, collection, deleteDoc, getDocs, setDoc, updateDoc} from 'firebase/firestore'

const AdminProiecte = () => {
    const [ id, setId ] = useState();
    const [ name, setName ] = useState();
    const [ county, setCounty ] = useState();
    const [ description, setDescription] = useState();
    const [ image, setImage ] = useState();
    const [ fetchData, setFetchData ] = useState([]);

    const dbref = collection(db, "Proiecte");

    const add = async () =>
    {
        const adddata = await addDoc(dbref, {Name: name, County: county, Image: image, Description: description});

        if(adddata)
        {
            alert("Proiect adaugat cu succes!");
            await fetch();
        }
        else
        {
            alert("Eroare la adaugarea unui proiect!");
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
        setId(matchId.id);  
        setName(matchId.Name);
        setCounty(matchId.County);
        setDescription(matchId.Description);
        setImage(matchId.Image);  
    }

    const update = async () =>
    {
        const updateref = doc(dbref, id);
        try 
        {
            await updateDoc(updateref, {Name: name, County: county, Image: image, Description: description});
            alert("Proiect updatat cu succes!");
            await fetch();
        } 
        catch (error) 
        {
            alert(error, "Eroare la updatarea unui proiect!");
        }
    }

    const del = async (id) =>
    {
        const delref = doc(dbref, id);
        try 
        {
            await deleteDoc(delref);
            alert("Proiect sters cu succes!");
            await fetch();
        } 
        catch (error) 
        {
            alert(error, "Eroare la stergerea unui proiect!");
        }
    }

    return (
        <>
        <div class='form-container'>
            <h2>Formular administrare proiecte</h2>
            <div class='box_FORM'>
                <input type='text' placeholder='Nume' autocomplete='Off' value={name} onChange={(e) => setName(e.target.value)}></input>
            </div>
            <div class='box_FORM'>
                <input type='text' placeholder='Judet' autocomplete='Off' value={county} onChange={(e) => setCounty(e.target.value)}></input>
            </div>
            <div class='box_FORM'>
                <input type='text' placeholder='URL imagine' autocomplete='Off' value={image} onChange={(e) => setImage(e.target.value)}></input>
            </div>
            <div class='box_FORM'>
                <input type='text' placeholder='Descriere' autocomplete='Off' value={description} onChange={(e) => setDescription(e.target.value)}></input>
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
                                <h3>Id: {data.id}</h3>
                                <h3>Nume: {data.Name}</h3>
                                <h3>County: {data.County}</h3>
                                <h3>Image URL: {data.Image}</h3>    
                                <h3>Description: {data.Description}</h3>              
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

export default AdminProiecte