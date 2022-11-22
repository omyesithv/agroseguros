import React, { useEffect } from 'react'
import { useAuthContext } from '../componentes/context/authContext';

const Logout = () => {
  
    const {logout} = useAuthContext();
    
    useEffect(() => logout());
    return null;  
}

export default Logout
