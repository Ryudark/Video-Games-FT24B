import React from "react";
import { Link } from "react-router-dom";
import './Home.css'

export default function Home(){ 
    return(
        <div className="fondo3">
            <h1 className="title">HENRY VIDEOGAMES PI</h1>
            <Link to="/home">
                <p className="boton">
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    Ingrese a la App
                </p>
                {/* <button className="boton">HOME</button> */}
            </Link>
        </div>
    )
}