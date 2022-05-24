import React from "react";
import { Link } from "react-router-dom";
import './Home.css'

export default function Home(){ 
    return(
        <div className="fondo">
            <h1 className="title">HENRY VIDEOGAMES PI</h1>
            <Link to="/home">
                <button className="boton">HOME</button>
            </Link>
        </div>
    )
}