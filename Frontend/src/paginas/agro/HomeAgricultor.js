import React, { useContext } from 'react';
import { Form, Link } from 'react-router-dom';
import VerAgricultor from '../VerAgricultor';
import {LOGOUT,PRIVATE2} from '../../componentes/router/Path';
import ListaAgricultor from '../agro/listaAgricultor';
import ListaInversor from '../agro/listainversionista';
import "../../css/home-agricultor.css";
import { Container } from 'react-bootstrap';
//import EditarAgro from  "./EditarAgricultor";
import ContextoUsuario from '../../componentes/context/ContextoUsuario';


const HomeAgricultor = () => {
  const {usuario} = useContext(ContextoUsuario);
  console.log(usuario)
  return (
    <div className='home-agricultor'> 
      <div>
        <p>{usuario ? ` Hola ${usuario.email} ` : 'Bienvenido'}</p> 
  


        <h2>Bienvenido a AgroSeguro</h2>

        <p className='parrafo-home'>Invierte en la agricultura de tu país, encuentra ofertas de agricultores</p>

        <Link to="/HomeAgricultor/listaAgro" className='button'>
          Ver agricultores
        </Link>
        <Link to={PRIVATE2} className='button'>
          Ver Inversionistas
        </Link>
        <Link to="/HomeAgricultor/VerAgro" className='button'>
          Mi Perfil
        </Link>

        
       
        
         
        

      </div>

      
    </div>  
  )
}

export default HomeAgricultor
