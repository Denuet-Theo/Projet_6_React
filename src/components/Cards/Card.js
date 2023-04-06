
import './Card.css';
import liste from '../../données/liste.json'
import { Link } from 'react-router-dom';

export default function AffichageLieux(){
   

    return(
        <div className='Cards'>
        <div className='positionGrille'>
        {liste.map(contents => (
            <Link className='lienphoto' to={`./fiche-logement/${contents.id}`}
            key={contents.id}
            image={contents.cover}
            name={contents.title}
            >

            <div className="photo" style={{backgroundImage : `url(${contents.cover})`}}  alt={contents.title} tabIndex="0">
             
            <p className="titrephoto">{contents.title}</p>
            </div>
                
            </Link>

            ))}
        </div>
       </div>
    )
}
