import React from "react";
import TarjetaSimple from "../tarjeta/TarjetaSimple";
import "./Pagination.css"

export default function Pagination(props){

    const games= props.items
    return(
        <nav>
            <ul>
                <button className="botonPrevio" onClick={props.handlerPrevious}>Previo</button>
                <button className="botonSiguiente" onClick={props.handlerNext}>Siguiente</button>
            </ul>
                {
                games.map(datos=><TarjetaSimple key={datos.id}
                    id={datos.id}
                    image={datos.image}
                    name={datos.name}   
                    genero={datos.genres}
                />)
                }
            <ul>
                <button className="botonPrevio" onClick={props.handlerPrevious}>Previo</button>
                <button className="botonSiguiente" onClick={props.handlerNext}>Siguiente</button>
            </ul>
        </nav>
    )
}