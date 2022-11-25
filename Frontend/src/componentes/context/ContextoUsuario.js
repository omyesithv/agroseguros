import React, { createContext,useState } from 'react';


const ContextoUsuario = createContext();

const initialUser = {email:'Bienvenido',password:111}

const UserProvider = ({children}) => {
  const  [ usuario, setUsuario] = useState(initialUser)

  

   const data = {usuario,setUsuario} 
   return (
      <ContextoUsuario.Provider value={data}>
          {children}
      </ContextoUsuario.Provider>

   )

}

export {UserProvider}
export default ContextoUsuario