import React from 'react'
import { Link } from 'react-router-dom'
import VerAgricultor from './VerAgricultor';
import {LOGOUT} from '../../componentes/router/Path';
import listaAgricultor from './listaAgricultor';
import listaInversor from './listainversionista';
//import EditarAgro from  "./EditarAgricultor";

const HomeAgricultor = () => {
  return (
    <div> 
      <div>
        <h2>Hola Tiene Acceso </h2>
        <Link to={LOGOUT}>Cerrar sesión</Link>
        
        <listaAgricultor/> 
        <listaInversor/>
         
        

      </div>

      
    </div>  
  )
}

export default HomeAgricultor
