import React from "react"
import { useState } from "react"
import "./Collapse.css"


export default function Collapse({title, content}){
    const [active, setActive] = useState(false)

    const handleToggle = e => {
        setActive(!active)
    }

    return(
       <div className={`collapse ${active && "active"}`}>

          <div className="collapseTitle" onClick={handleToggle}>
            {title}<span className="chevron"></span>
            </div> 

            <div className="collapseContent">{content}</div>

       </div>
    )
}