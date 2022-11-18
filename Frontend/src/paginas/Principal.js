import React from 'react'
import { Link } from 'react-router-dom'
import {LOGOUT} from '../componentes/router/Path';


const Principal = () => {
  return (
    <div>
      <h2>Hola Tiene Acceso</h2>
      <Link to={LOGOUT}>Cerrar sesión</Link>
    </div>
  )
}

export default Principal
