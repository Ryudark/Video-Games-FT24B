import { Fragment, useState } from 'react';
import { Link } from 'react-router-dom';
import style from "./TarjetaSimple.css"

export default function TarjetaSimple(props){
    const temp= props.genero

    return (
        // <div className={style.card}>
        <Fragment>
            <Link to={`/videogames/${props.id}`}><h3>{props.name}</h3></Link>
            <img className="classImg" src={props.image} alt={props.name}/>
            <div>
                {temp ? temp.map((genero, index) => <Link key={index}to={`/genero/${genero}`}><h3>{genero}</h3></Link>):0}    
            </div>
            {/*   */}
        </Fragment>
        // </div>
    )
}