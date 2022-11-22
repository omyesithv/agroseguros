import "../css/header.css";
import React from "react";
import { Outlet, Link } from "react-router-dom";
import { Container, Row, Col } from "react-bootstrap";
import {LOGOUT} from '../componentes/router/Path';




const header  = () => {

  // eslint-disable-next-line react-hooks/rules-of-hooks







    
return(
  
    <div className="contenedor-header">
        
       
        <div>
        <Link className='button boton-log' to={LOGOUT}>Cerrar sesión</Link>
        </div> 
    
          <div className="contenedor-titulo">
            <h1 className="titulo ">AgroSeguro</h1>
            </div>
    
    
            <div >
            <Container className="contenedor-boton-login contenedor-grid">
           
            <Link to="/Login" className="button anchor">
              Login
             </Link>
    
             <Link to="/Home" className="button anchor">
              Home
             </Link>

             
            </Container>
    
    
            </div>
            
            
        </div>

  
);
}

export default header;