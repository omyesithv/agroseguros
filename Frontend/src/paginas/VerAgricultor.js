import React, { useContext } from 'react';
import ContextoUsuario from '../componentes/context/ContextoUsuario';
import "../css/verAgricultor.css";

const VerAgricultor = () => {
  const usuarioGlobal = useContext(ContextoUsuario);

  return (
    <div>
      <p className='parrafo-color'>Nombres :{usuarioGlobal.nombre}</p> 
      <p className='parrafo-color'>Apellidos :{usuarioGlobal.apellido}</p>
    </div>
  )
}

export default VerAgricultor
