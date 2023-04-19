import React from 'react'
import imgfond from '../../src/assets/imgfondaccueil.png'
import '../styles/Accueil.css'
import AffichageLieux from '../components/Cards/Card'


export default function Accueil(){
    return (
        <section>
        <div className='banner'
         style={{backgroundImage : `url(${imgfond})`}}  alt={"fond"} tabIndex="0">
            
            <h1 className='textephoto'>Chez vous, partout et ailleurs</h1>
        </div>
            <AffichageLieux />
        </section>
    )};