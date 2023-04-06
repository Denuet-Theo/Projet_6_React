import React from 'react'
import Collapse from '../Collapse/Collapse'
import styles from "../Collapselogement/Collapselogement.module.css"




export default function Collapselogement(props){
    return (

        <div className={styles.Collapseslogements}>
            <div className={styles.collapse1}>
            <Collapse title="Description" 
            content={props.description} />
            </div>

            <div className={styles.collapse1}>
            <Collapse
                    title="Équipements"
                    content={
                        <div className={styles.equip}>{props.equipments.map((equipment) => (
                            <p className={styles.listeequip} key={equipment}>{equipment}</p>
                        ))}
                        </div>}
                />
                </div>
       </div>
    )};