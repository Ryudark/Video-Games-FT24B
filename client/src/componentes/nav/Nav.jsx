import React from 'react'
import { Link } from 'react-router-dom'
import SearchGame from '../busqueda/SearchGame'
import Orden from '../orden/Orden'
import "./Nav.css"

export default function Nav () {
    return (
        <div className="navegacion">
            <Link className='centrar' to='/home'>
                Home
            </Link>
            <Link className='centrar' to='/games/create'>
                Agregar Juego
            </Link>
            <h3 className='centrar'> HENRY VIDEOGAMES </h3>
            <Orden />
            <SearchGame />
        </div>
    )
}