import React, { useEffect, useState } from 'react';
import { db } from './firebase';
import './blog.css';
import { Link } from 'react-router-dom';
import { getDocs, collection, where, query, addDoc } from 'firebase/firestore';
import { BiSolidDonateHeart } from 'react-icons/bi';
import { useAuth } from './AuthContext';
import { doc, deleteDoc, setDoc, updateDoc } from 'firebase/firestore';

const Blog = () => {
    const { isAuthenticated, setAuthenticationStatus } = useAuth();
    const [OrderSent, setOrderSent] = useState();
    const [Opinion, setOpinion] = useState('');

    const senddata = async () => {
        const dbref = collection(db, 'Pareri');
        try {
            const matchOpinion = query(dbref, where('Opinion', '==', Opinion));
            const OpinionSnapshot = await getDocs(matchOpinion);
            const OpinionArray = OpinionSnapshot.docs.map((doc) => doc.data());

            if (Opinion.length > 0) {
                await addDoc(dbref, { Opinion: Opinion });
                setOrderSent(true);
                alert('Parerea ta a fost postata! Multumim pentru feedback!');
            } else {
                setOrderSent(false);
            }
        } catch (error) {
            alert(error);
        }
    };

    const [id, setId] = useState();
    const [fetchData, setFetchData] = useState([]);

    const dbref = collection(db, 'Pareri');

    const add = async () => {
        const adddata = await addDoc(dbref, { Opinion: Opinion });

        if (adddata) {
            await fetch();
        } else {
            alert('Eroare la adaugarea unei pareri!');
        }
    };

    const fetch = async () => {
        const snapshot = await getDocs(dbref);
        const fetchdata = snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
        setFetchData(fetchdata);
    };

    useEffect(() => {
        fetch();
    }, []);

    const passData = async (id) => {
        const matchId = fetchData.find((data) => {
            return data.id === id;
        });
        setId(id);
        setOpinion(matchId.Opinion);
    };

    const update = async () => {
        const updateref = doc(dbref, id);
        try {
            await updateDoc(updateref, { Opinion: Opinion });
            alert('Parere updatata cu succes!');
            await fetch();
        } catch (error) {
            alert(error, 'Eroare la updatarea unei pareri!');
        }
    };

    const del = async (id) => {
        const delref = doc(dbref, id);
        try {
            await deleteDoc(delref);
            alert('Parere stearsa cu succes!');
            await fetch();
        } catch (error) {
            alert(error, 'Eroare la stergerea unei pareri!');
        }
    };

    const handlePostClick = async (event) => {
        event.preventDefault(); // Previne reîncărcarea automată a paginii
        await senddata();
        await fetch(); // Reîncarcă pagina
    };

    return (
        <>
            <div className='checkout_container'>
                <div className='contant'>
                    <h2>
                        Blog <BiSolidDonateHeart />
                    </h2>
                    <div className='form'>
                        <input
                            type='text'
                            name='Opinion'
                            placeholder='Ofera feedback sau spune-ti parerea'
                            autoComplete='off'
                            onChange={(e) => setOpinion(e.target.value)}
                        ></input>
                        {isAuthenticated ? (
                            <button type='submit' onClick={handlePostClick}>
                                Posteaza
                            </button>
                        ) : (
                            <a type='submit' href='/login'>
                                Logheaza-te pentru a putea posta
                            </a>
                        )}
                    </div>
                </div>
            </div>
            <div className='database'>
                <h2>Poveștile Susținătorilor Noștri</h2>
                <div className='container'>
                    {fetchData.map((data) => {
                        return (
                            <div className='box' key={data.id}>
                                <h3>"{data.Opinion}"</h3>
                            </div>
                        );
                    })}
                </div>
            </div>
        </>
    );
};

export default Blog;
