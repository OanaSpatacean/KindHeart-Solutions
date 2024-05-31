import React from "react";
import "./footer.css";
import { AiOutlineInstagram } from 'react-icons/ai';
import { RiFacebookFill } from 'react-icons/ri';
import { AiOutlineTwitter } from 'react-icons/ai';
import { BsYoutube } from 'react-icons/bs';
import './footer.css'
const Footer = () => {
    return (
        <>
            <div className='footer'>
                <div className='container'>

                    <section className="page">
                        <h2>Judete</h2>
                        <ul className="category-list">
                            <li>Bucuresti</li>
                            <li>Timis</li>
                            <li>Alba</li>
                            <li>Hunedoare</li>
                            <a href='#'>Vezi mai mult...</a>
                        </ul>
                    </section>

                    <div className='about'>
                        <div className='logo'>
                            <img src='./image/logo.jpg' alt='logo'></img>
                        </div>
                        <div className='detail'>
                            <p>Alătură-te nouă și susține cauzele care contează. Fiecare donație contribuie la:
Asigurarea unei mese calde pentru cei fără adăpost
Furnizarea de rechizite școlare pentru copiii defavorizați
Sprijinirea tratamentelor medicale pentru bolnavii de cancer
Și multe altele...</p>
                            <div className='icon'>
                                <li><RiFacebookFill /></li>
                                <li><AiOutlineInstagram /></li>
                                <li><AiOutlineTwitter /></li>
                                <li><BsYoutube /></li>
                            </div>
                        </div>
                    </div>

                    <div className='page'>
                        <h3>Contacteaza-ne!</h3>
                        <ul>
                            <li>+40745454545, gabriela@student.upt.ro</li>
                            <li>+40732323232, oana@student.upt.ro</li>
                        </ul>
                    </div>


                </div>
            </div>
        </>
    )
}

export default Footer