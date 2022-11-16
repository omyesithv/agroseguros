import React, { useContext } from 'react';
import ContextoUsuario from '../componentes/context/ContextoUsuario';

const VerAgricultor = () => {
  const usuarioGlobal = useContext(ContextoUsuario);

  return (
    <div>
      <p>Nombres :{usuarioGlobal.nombre}</p> 
      <p>Apellidos :{usuarioGlobal.apellido}</p>
    </div>
  )
}

export default VerAgricultor
