import React from 'react';

const ContextoUsuario = React.createContext({
   nombres:"",
   apellidos:"",
   correo:"",
});

export default ContextoUsuario;