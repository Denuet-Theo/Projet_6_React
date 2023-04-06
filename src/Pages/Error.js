import React from 'react'
import "../styles/Error.css"
import { Link } from 'react-router-dom'

export default function Error(){
    return (
        <main>
            <h1 className='erreur'>404</h1>
            <div className='phraseerreur'>Oups! La page que vous demandez n'existe pas.</div>

            <nav>
            <Link className='RetourAccueil' to="/">Retourner sur la page d’accueil</Link>
            </nav>
        </main>
    )};