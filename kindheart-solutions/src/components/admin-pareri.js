import React, { useEffect, useState } from 'react'
import { db } from './firebase'
import './admin.css'
import {doc, addDoc, collection, deleteDoc, getDocs, setDoc, updateDoc} from 'firebase/firestore'

const AdminPareri = () => {
    const [ id, setId ] = useState();
    const [ Opinion, setOpinion ] = useState();
    const [ fetchData, setFetchData ] = useState([]);
    
    const dbref = collection(db, "Pareri");

    const add = async () =>
    {
        const adddata = await addDoc(dbref, {Opinion: Opinion});

        if(adddata)
        {
            alert("Parere adaugata cu succes!");
            await fetch();
        }
        else
        {
            alert("Eroare la adaugarea unei pareri!");
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
        setOpinion(matchId.Opinion);  
    }

    const update = async () =>
    {
        const updateref = doc(dbref, id);
        try 
        {
            await updateDoc(updateref, {Opinion: Opinion});
            alert("Parere updatata cu succes!");
            await fetch();
        } 
        catch (error) 
        {
            alert(error, "Eroare la updatarea unei pareri!");
        }
    }

    const del = async (id) =>
    {
        const delref = doc(dbref, id);
        try 
        {
            await deleteDoc(delref);
            alert("Parere stearsa cu succes!");
            await fetch();
        } 
        catch (error) 
        {
            alert(error, "Eroare la stergerea unei pareri!");
        }
    }

    return (
        <>
        <div class='database'>
            <h2>Pareri</h2>
            <div class='container'>
                {
                    fetchData.map((data) => {
                        return (
                            <>
                            <div className='box'>
                                <h3>Opinion: {data.Opinion}</h3>  
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

export default AdminPareri