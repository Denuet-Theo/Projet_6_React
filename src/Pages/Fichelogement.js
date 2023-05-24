import React from 'react'
import Infologement from '../components/infologement/infologement'
import liste from '../../src/Donnees/liste.json'
import { useLocation } from 'react-router-dom';
import Affichageimage from '../components/Slider/Slider';
import { useNavigate } from "react-router-dom";
import { useEffect } from 'react'
import { useParams } from 'react-router-dom';
import Collapse from '../components/Collapse/Collapse';


export default function Fichelogement(){
    const navigate = useNavigate();
    const Location = useLocation();
    const params = useParams();
    

        useEffect(() => {
            fetch('http://localhost:3000/liste.json')
            .then(res => res.json())
            .then(data => { 
                data.forEach(element => {
                return(element.id)
                })

                const found = data.find(element => element.id === params.id)
                console.log(found)
                        
                if (!found){
                    navigate("../*", {replace: true}); 
                }      
                })
            });
    

    return (
        
        <section className='ficheappartement'>
            
            
            {liste.map(content => (Location.pathname.endsWith(content.id) &&
                <div className="donnees"  key={content.id}>
                    

                <Affichageimage 
                    pictures={content.pictures} alt={content.title}
                /> 

                <Infologement 
                title={content.title} 
                location={content.location} 
                hostName={content.host.name} 
                hostPicture={content.host.picture}
                tags={content.tags} 
                rating={content.rating}
                />     

                <div className='collapseLogement'>
                    <div className='dimensionCollapse'>
                        <Collapse title={"Description"}
                            content={content.description}/>
                    </div>
                    <div className='dimensionCollapse'>
                        <Collapse title={"Equipement"}
                            content={
                            <div className="equip">{content.equipments.map((equipment) => (
                                <p className="listeequip" key={equipment}>{equipment}</p>
                            ))}
                            </div>}/>
                    </div>
                </div>

                </div> )) 
            } 
        </section>
    )};