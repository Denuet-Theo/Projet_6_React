import React from "react"
import logo from '../../assets/logobannerwhite.svg' 
import "./Footer.css"


export default function Footer(){
    
    

    return(
        <footer>
       <div className="blocfooter">
            <div className="positionnement">
                <img className='logokasa' src={logo} alt='logo kasa' />
                <p className="txtfooter">© 2020 Kasa. All rights reserved</p>
            </div>

       </div>
       </footer>
    )
}