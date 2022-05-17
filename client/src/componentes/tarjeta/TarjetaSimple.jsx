import { Fragment, useState } from 'react';
import { Link } from 'react-router-dom';
import style from "./TarjetaSimple.css"

function ListItem(props) {
    // Correcto! No hay necesidad de especificar la key aquí:  
    console.log(props.value)
    return <li>{props.value}</li>;  
}

export default function TarjetaSimple(props){
    const temp= props.genero
    console.log(temp)
    const prueba=[1,2,3,4,5,6]
    const [generos, setGeneros] = useState(temp)

    return (
        // <div className={style.card}>
        <Fragment>
            <Link to={`/videogames/${props.id}`}><h3>{props.name}</h3></Link>
            <img className="classImg" src={props.image} alt={props.name}/>
            {/* <div>
                {temp.map((genero) => <ListItem value={genero} />)}    
            </div> */}
            {/*   */}
        </Fragment>
        // </div>
    )
}