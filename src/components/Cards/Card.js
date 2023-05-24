
import './Card.css';
import liste from '../../../src/Donnees/liste.json'
import { Link } from 'react-router-dom';

export default function AffichageLieux(){
   

    return(
        <section className='Cards'>
        <div className='positionGrille'>
        {liste.map(content => (
            <Link className='lienphoto' to={`./fiche-logement/${content.id}`}
            key={content.id}
            image={content.cover}
            name={content.title}
            >

            <div className="photo" style={{backgroundImage : `url(${content.cover})`}}  alt={content.title} tabIndex="0">
             
            <p className="titrephoto">{content.title}</p>
            </div>
                
            </Link>

            ))}
        </div>
       </section>
    )
}
