import React, { Component } from 'react'
import { Link } from 'react-router-dom'

//NO CAMBIEN EL CLASS COMPONENT A FUNCTIONAL COMPONENT PORQUE SINO LOS TEST NO VAN A CORRER!!!
export default function Nav () {
        return (
            <div>
              <Link to='/games'>
                Home
              </Link>
              <Link to='/games/create'>
                Agregar Juego
              </Link>
            </div>
        )
}