import React from 'react';
import { Link } from 'react-router-dom';
import VerAgricultor from '../VerAgricultor';
import {LOGOUT, PRIVATE2, PRIVATE7} from '../../componentes/router/Path';
import ListaAgricultor from '../agro/listaAgricultor';
import ListaInversor from '../agro/listainversionista';
import "../../css/home-agricultor.css";
import { Container } from 'react-bootstrap';
//import EditarAgro from  "./EditarAgricultor";

const HomeAgricultor = () => {
  return (
    <div className='home-agricultor'> 
      <div>



        <h2>Bienvenido a AgroSeguro</h2>

        <p className='parrafo-home'>Invierte en la agricultura de tu país, encuentra ofertas de agricultores</p>

        <Link to="/HomeAgricultor/listaAgro" className='button'>
          Ver agricultores
        </Link>
        <Link to={PRIVATE2} className='button'>
          Ver Inversionistas
        </Link>
        <Link to={PRIVATE7} className='button'>
          Ver Productos
        </Link>
       
        
         
        

      </div>

      
    </div>  
  )
}

export default HomeAgricultor
