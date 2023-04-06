import React from 'react'
import Affichageappart from '../components/infologement/infologement'
import liste from '../données/liste.json'
import { useLocation } from 'react-router-dom';
import Affichageimage from '../components/Slider/Slider';
import Collapselogement from '../components/Collapselogement/Collapselogement';

export default function Fichelogement(){
    const Location = useLocation();
    console.log(Location)
    return (
        
        <div className='donnéesclassique'>
            
            {liste.map(contents => (Location.pathname.endsWith(contents.id) &&
                <section className="données"  key={contents.id}>

                <Affichageimage 
                    pictures={contents.pictures} alt={contents.title}
                /> 

                <Affichageappart 
                title={contents.title} 
                location={contents.location} 
                hostName={contents.host.name} 
                hostPicture={contents.host.picture}
                tags={contents.tags} 
                rating={contents.rating}
                />     

                <Collapselogement
                description={contents.description}
                equipments={contents.equipments}
                />
            
                </section>))
            }
        </div>
    )};