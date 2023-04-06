import "./Slider.css"
import { useState, useEffect } from 'react'
import trait from '../../assets/Vector.svg'

export default function Slideshow({ title, pictures }) {
    const [items, setItems] = useState(0);
    const count = pictures.length;
  
    useEffect(() => {
        const timer = setTimeout(() =>{
        defiledroite()
        },7000)
    return () => clearTimeout(timer)
    })

    function defiledroite() {
        
        if (items < count - 1) {
            setItems(items +1);
        }
        else {
            setItems(0);
        }
    }

    function defilegauche() {

        if (items > 0) {
            setItems(items - 1);
        }
        else {
            setItems(count -1);
        }
    }

    function keyPress(e){
        
        if(e.keyCode === 39){
            defiledroite()
        }else if(e.keyCode === 37){
            defilegauche()
        }
    }
    document.addEventListener('keydown', keyPress)


    return (
        <div className='slider'>
            <div className='composant'>

                <div className="pictures"
                    style={{backgroundImage : `url(${pictures[items]})`}}  alt={title} tabIndex="0">
                </div>

                {count > 1 &&(
                <>
                        <img className='curseurdroit' 
                            src={trait} alt='curseurdroit' tabIndex="0" 
                            onClick={() => defiledroite()}
                        />

                        <img className='curseurgauche' 
                        src={trait} alt='curseurgauche'  tabIndex="0" 
                        onClick={() => defilegauche()} 
                        />

                        <p className='count'>{items + 1}/{count}</p>
                </>
                )}

            </div>
        </div>
    )
}