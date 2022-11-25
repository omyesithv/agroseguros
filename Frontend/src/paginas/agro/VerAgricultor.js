import axios from 'axios';
import React, { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import ContextoUsuario from '../../componentes/context/ContextoUsuario';
import app from "../app.json";
import {PRIVATE7} from "../../componentes/router/Path";

  
const VerAgricultor = () => {
  const {usuario} = useContext(ContextoUsuario);
  const {APIHOST}= app;
  const correo = usuario.email;
  const [agricultor, setAgricultor] = useState({
    nombres: '',
    apellidos: '',
    correo: '',
    agremiacion: '',
    matriculai: '',
    rut: ''
    
});

    useEffect( () => {
      
     console.log(usuario.email) 
     console.log(correo) 
     axios
     .post(`${APIHOST}/agricultor/correo`,{correo})
     .then((res) => { 
      setAgricultor  (res.data);
     console.log('Datos:',agricultor)      
       
     })
     .catch(error => {
     console.log('Oh No! Error!');  
     console.log(error)
     })   
  
      
    }, []);
  
      

 
  return (
    <div className='home-agricultor'>
    <p className='parrafo-color' >{usuario ? ` Hola ${usuario.email} ` : 'Bienvenido'}</p> 
    
      <p className='parrafo-color'>Nombres : {agricultor.nombres}  </p> 
      <p className='parrafo-color'>Apellidos :{agricultor.apellidos}</p>
      <p className='parrafo-color'>Agremiacion :{agricultor.agremiacion}</p>
      <p className='parrafo-color'>Matriculai :{agricultor.matriculai}</p>
      <p className='parrafo-color'>Rut :{agricultor.rut}</p>
      

      <Link to={"/HomeAgricultor/modificar/" + agricultor._id} className='button'>
        Editar
      </Link>
      <Link to={"/HomeAgricultor/confirmacion/" + agricultor._id} className='button'>
        Eliminar
      </Link>
      <Link to={PRIVATE7} className='button'>
        Ver productos
      </Link>
      
    </div>

    
  )
}

export default VerAgricultor
