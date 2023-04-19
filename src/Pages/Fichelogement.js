import React from 'react'
import Affichageappart from '../components/infologement/infologement'
import liste from '../Donnees/liste.json'
import { useLocation } from 'react-router-dom';
import Affichageimage from '../components/Slider/Slider';
import Collapselogement from '../components/Collapselogement/Collapselogement';



export default function Fichelogement(){
    const Location = useLocation();
    
    console.log(Location)
    return (
        
        <div className='ficheappartement'>
            
            {liste.map(content => (Location.pathname.endsWith(content.id) &&
                <section className="donnees"  key={content.id}>

                <Affichageimage 
                    pictures={content.pictures} alt={content.title}
                /> 

                <Affichageappart 
                title={content.title} 
                location={content.location} 
                hostName={content.host.name} 
                hostPicture={content.host.picture}
                tags={content.tags} 
                rating={content.rating}
                />     

                <Collapselogement 
                description={content.description}
                equipments={content.equipments}
                />

                </section>))
            }
        </div>
    )};