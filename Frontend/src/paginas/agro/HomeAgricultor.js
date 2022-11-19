import React from 'react'
import { Link } from 'react-router-dom'
import {LOGOUT} from '../../componentes/router/Path';


const HomeAgricultor = () => {
  return (
    <div>
      <h2>Hola Tiene Acceso como agricultor</h2>
      <Link to={LOGOUT}>Cerrar sesión</Link>
    </div>
  )
}

export default HomeAgricultor
