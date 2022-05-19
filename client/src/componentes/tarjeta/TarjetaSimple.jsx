import { Link } from 'react-router-dom';
import "./TarjetaSimple.css"

export default function TarjetaSimple(props){
    const temp= props.genero

    return (
        <div className="card">
            <Link to={`/videogames/${props.id}`}><h3>{props.name}</h3></Link>
            <img className="classImg" src={props.image} alt={props.name}/>
            <div>
                {temp ? temp.map((genero, index) => <Link key={index}to={`/genero/${genero}`}><a>{genero}</a></Link>):0}    
            </div>
        </div>
    )
}