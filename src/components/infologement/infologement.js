import etoilepleine from "../../assets/star-solidfull.svg"
import etoilevide from "../../assets/star-solidvide.svg"
import "./infologement.css"


export default function Affichageappart(props){
    const fullstars = Array(5).fill(etoilepleine)
    const nullstars = Array(5).fill(etoilevide)

    return(
        
        <div className="Touteslesdonnées">

            <div className="displaystack1">
                <h1 className="title">{props.title}</h1>
                    <h2 className="location">{props.location}</h2>
                <div className="tags">
                    {props.tags.map((tag) => (
                        <div className="tag" key={tag}>
                            <h2 className="htag">{tag}</h2>
                        </div>))}
                </div>
            </div>

            
            <div className="displaystack2">
                <div className="host">
                    <h4 className="hostname">{props.hostName}</h4>
                    <img className="hostpictures" src={props.hostPicture} alt={props.hostName} />
                </div>


                <div className="rating">
                    <p>
                        {fullstars.slice(5-props.rating).map((fullstar, index) => {
                            return <img key={`star ${fullstar} ${index}`} className='etoilespleine' src={etoilepleine} alt='rating' />
                        })}
                        {nullstars.slice(props.rating).map((nullstar, index) => {
                            return <img key={`star ${nullstar} ${index}`} className='etoilesvide' src={etoilevide} alt='norating' />
                        })}
                    </p>
                </div>
            </div>
            
        </div>
   
    )
}