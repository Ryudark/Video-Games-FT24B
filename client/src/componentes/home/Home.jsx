import React from "react";
import { Link } from "react-router-dom";

export default function Home(){ 
    return(
        <div>
            <h1 className="title">"VIDEOGAMES PI"</h1>
            <Link to="/home">
                <button>HOME</button>
            </Link>
        </div>
    )
}