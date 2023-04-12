import React from 'react'
import Collapselog from './Collapselog'
import  "../Collapselogement/Collapselogement.css"




export default function Collapselogement(props){
    return (

        <div className="Collapseslogements">
           
            <div className="collapse1">
            <Collapselog title="Description" 
            content={props.description} />
            </div>

            <div className="collapse1">
            <Collapselog 
                    title="Équipements"
                    content={
                        <div className="equip">{props.equipments.map((equipment) => (
                            <p className="listeequip" key={equipment}>{equipment}</p>
                        ))}
                        </div>}
                />
                </div>
                
       </div>
    )};