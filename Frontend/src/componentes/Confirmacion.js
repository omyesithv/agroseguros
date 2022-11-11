import React from 'react'
import {  NavLink, useParams,  } from 'react-router-dom';

const Confirmacion = () => {
    let { id } = useParams();
  return (
    <div>
        <br />
        <h1 style={{color: "red"}}>¿Desea eliminar el agricultor {id}?</h1><br />
        <NavLink to="/Agricultor" className="btn btn-light">Cancelar</NavLink>&nbsp;&nbsp;&nbsp;&nbsp;
        <NavLink to={"/eliminarAgricultor/"+id} className="btn btn-danger">Eliminar</NavLink>&nbsp;&nbsp;&nbsp;&nbsp;
           
    </div>
  )
}

export default Confirmacion
