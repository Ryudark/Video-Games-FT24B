import React from 'react'
import { Link } from 'react-router-dom'
import SearchGame from '../busqueda/SearchGame'
import Orden from '../orden/Orden'
import "./Nav.css"

export default function Nav () {
    return (
        <div className='organizar'>
            <div className="barra1">
                <Link className='botonHome' to='/home'>
                    Home
                </Link>
                <Link className='botonCreate' to='/games/create'>
                    Agregar Juego
                </Link>
                <h3 className='titulo'> HENRY VIDEOGAMES </h3>
                <SearchGame />
            </div>
            <div className='barra2'>
                <Orden />
            </div>
        </div>
    )
}