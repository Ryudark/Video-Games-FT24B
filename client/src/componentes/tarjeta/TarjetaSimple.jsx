import { Link } from 'react-router-dom';

export default function TarjetaSimple(props){

    return (
        <div>
            <h1>{props.name}</h1>
            <Link to={`/videogames/${props.id}`}><h3>{props.name}</h3></Link>
            <img src={props.image} alt={props.name}/>
        </div>
    )
}