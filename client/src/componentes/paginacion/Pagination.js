import React from "react";
import TarjetaSimple from "../tarjeta/TarjetaSimple";
// import Games from "../games/games";

export default function Pagination(props){

    const games= props.items
    return(
        <nav>
            <ul>
                <button onClick={props.handlerPrevious}>Previo</button>
                <button onClick={props.handlerNext}>Siguiente</button>
            </ul>
                {
                games.map(datos=><TarjetaSimple key={datos.id}
                    id={datos.id}
                    image={datos.image}
                    name={datos.name}   
                    genero={datos.genres}
                />)
            }
        </nav>
    )
}