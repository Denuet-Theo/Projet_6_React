import React from "react"
import { useState } from "react"
import "./Collapselog.css"


export default function Collapselog({title, content}){
    const [active, setActive] = useState(false)

    const handleToggle = e => {
        setActive(!active)
    }

    return(
       <div className={`collapse ${active && "active"}`}>

          <div className="collapseTitlelog" onClick={handleToggle}>
            {title}<span className="chevron"></span>
            </div> 

            <div className="collapseContentlog">{content}</div>

       </div>
    )
}
