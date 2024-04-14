import React, { useEffect, useState } from 'react'
import { db } from './firebase'
import './admin.css'
import {doc, addDoc, collection, deleteDoc, getDocs, setDoc, updateDoc} from 'firebase/firestore'

const AdminDonatii = () => {
    const [ id, setId ] = useState();
    const [ Name, setName ] = useState();
    const [ Phone, setPhone ] = useState();
    const [ Number, setNumber ] = useState();
    const [ Expire, setExpire ] = useState();
    const [ CVV, setCVV ] = useState();
    const [ fetchData, setFetchData ] = useState([]);
    
    const dbref = collection(db, "Donatii");

    const add = async () =>
    {
        const adddata = await addDoc(dbref, {Name: Name, Phone: Phone, Number: Number, Expire: Expire, CVV: CVV});

        if(adddata)
        {
            alert("Donatie adaugata cu succes!");
            window.location.reload();
        }
        else
        {
            alert("Eroare la adaugarea unei donatii!");
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
        setPhone(matchId.Phone);  
        setNumber(matchId.Number);
        setExpire(matchId.Expire);
        setCVV(matchId.CVV);
    }

    const update = async () =>
    {
        const updateref = doc(dbref, id);
        try 
        {
            await updateDoc(updateref, {Name: Name, Phone: Phone, Number: Number, Expire: Expire, CVV: CVV});
            alert("Donatie updatata cu succes!");
            window.location.reload();
        } 
        catch (error) 
        {
            alert(error, "Eroare la updatarea unei donatii!");
        }
    }

    const del = async (id) =>
    {
        const delref = doc(dbref, id);
        try 
        {
            await deleteDoc(delref);
            alert("Donatie stearsa cu succes!");
            window.location.reload();
        } 
        catch (error) 
        {
            alert(error, "Eroare la stergerea unei donatii!");
        }
    }

    return (
        <>
        <div class='database'>
            <h2>Donatiile primite</h2>
            <div class='container'>
                {
                    fetchData.map((data) => {
                        return (
                            <>
                            <div className='box'>
                                <h3>Name: {data.Name}</h3>
                                <h3>Number: {data.Number}</h3>
                                <h3>Phone: {data.Phone}</h3>      
                                <h3>Expire: {data.Expire}</h3>           
                                <h3>CVV: {data.CVV}</h3>   
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

export default AdminDonatii