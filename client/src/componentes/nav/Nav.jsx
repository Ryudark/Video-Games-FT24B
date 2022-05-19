import React from 'react'
import { Link } from 'react-router-dom'
import SearchGame from '../busqueda/SearchGame'
import Orden from '../orden/Orden'
// import "./Nav.css"

//NO CAMBIEN EL CLASS COMPONENT A FUNCTIONAL COMPONENT PORQUE SINO LOS TEST NO VAN A CORRER!!!
export default function Nav () {
    return (
        <div className='fixed'>
            <Link to='/'>
                Home
            </Link>
            <Link to='/games/create'>
                Agregar Juego
            </Link>
            <h3> HENRY VIDEOGAMES </h3>
            <SearchGame />
            <Orden />
        </div>
    )
}