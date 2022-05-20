import React from 'react'
import { Link } from 'react-router-dom'
import SearchGame from '../busqueda/SearchGame'
import Orden from '../orden/Orden'
// import "./Nav.css"

export default function Nav () {
    return (
        <div className='fixed'>
            <Link to='/home'>
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