import { Link } from 'react-router-dom';
import "./TarjetaSimple.css"

export default function TarjetaSimple(props){
    const temp= props.genero

    return (
        <div className="card">
            <Link className='vinculo' to={`/videogames/${props.id}`}>
                <h3>{props.name}</h3>
                <img className="imagen" src={props.image} alt={props.name}/>
                <h4>Generos:  
                </h4>
                <h4 className='genres'> 
                    {temp.join(",  ")}
                </h4>
                {/* <h3>
                    {temp ? temp.map((genero, index) => <Link  className="genres" key={index}to={`/genero/${genero}`}><h4>{genero}</h4></Link>):0}    
                </h3> */}
            </Link>
        </div>
    )
}