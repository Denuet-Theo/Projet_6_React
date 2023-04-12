import React from 'react'
import { NavLink } from 'react-router-dom'
import Kasa from '../../assets/logobanner.svg'
import styles from'./Navbar.module.css';

export default function Navbar(){
    return (
       <div className={styles.Banner}>
        <img src={Kasa} alt="Logo du site web Kasa" className={styles.img}/>
       
       
        <nav>
            <NavLink to="/" className={({ isActive }) =>
            isActive ? styles.Navigationactive : styles.Navigation}>Accueil </NavLink>


            <NavLink to="/a-propos" className={({ isActive }) =>
            isActive ? styles.Navigationactive : styles.Navigation}>A propos</NavLink>

        </nav>
        </div>
    )};