import React, { useState } from 'react'
import './adaugare-proiect.css'
import { AiFillEye, AiOutlineClose} from 'react-icons/ai';
import { BiSolidDonateHeart } from "react-icons/bi";
import {Link} from 'react-router-dom';
import {db} from './firebase'
import { getFirestore, collection, getDocs, getDoc } from "firebase/firestore";
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { createTheme , ThemeProvider} from '@mui/material/styles';

const AdaugareProiect = () => {
    const { palette } = createTheme();
    const { augmentColor } = palette;
    const createColor = (mainColor) => augmentColor({ color: { main: mainColor } });
    const theme = createTheme({
      palette: {
        black: createColor('#000000'),
        pink: createColor('#c2185b'),
      },
    });


    const [descriere, setDescriere] = useState('');
    const[judet, setJudet] = useState('');
    const[nume, setNume] = useState('');
    const[poza, setPoza] = useState('');

    const save = async () =>
    {
        const dbref = collection(db, 'Proiecte');
        try 
        {
            // const matchEmail = query(dbref, where('Email', '==', email));
            // const matchPassword = query(dbref, where('Password', '==', password));

            // const emailSnapshot = await getDocs(matchEmail);
            // const emailArray = emailSnapshot.docs.map((doc) => doc.data());

            // const passwordSnapshot = await getDocs(matchPassword);
            // const passwordArray = passwordSnapshot.docs.map((doc) => doc.data());


            ///trebuie verificate campurile
            alert('Salvat cu succes!');
        } 
        catch (error) 
        {
            alert(error);
        }   
    }




  return (
    <>
    <ThemeProvider theme={theme}>
        <div className='box'>
            <TextField id="descriere" label="Descriere" type="text" value={descriere} onChange={(e) => setDescriere(e.target.value)}/>
            <br/><br/>
            <TextField id="judet" label="Judet" type="text" value={judet} onChange={(e) => setJudet(e.target.value)}/>
            <br/><br/>
            <TextField id="nume" label="Nume" type="text" value={nume} onChange={(e) => setNume(e.target.value)}/>
            <br/><br/>
            
            <TextField id="poza" label="Poza" type="text" value={poza} onChange={(e) => setPoza(e.target.value)}/>
            <br/><br/>

            <Button variant="contained" size="large" color="pink" onClick={save}>
                Salvare
            </Button>

        </div>

        </ThemeProvider>
    </>
  )
}

export default AdaugareProiect