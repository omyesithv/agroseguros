import React from 'react'
import {  NavLink, useParams,  } from 'react-router-dom';

const Confirmacion = () => {
    let { nombres, id } = useParams();

  
  return (
    <div className='division'>
        <br />
        <h1 className='division' style={{color: "red"}}>¿Desea eliminar el agricultor?</h1><br />
        <NavLink to="/HomeAgricultor/Agricultor" className="btn btn-light button">Cancelar</NavLink>&nbsp;&nbsp;&nbsp;&nbsp;
        <NavLink to={"/HomeAgricultor/eliminarAgricultor/"+id} className="btn btn-danger button">Eliminar</NavLink>&nbsp;&nbsp;&nbsp;&nbsp;
           
    </div>
  )
}

export default Confirmacion
