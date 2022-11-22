import React from "react";
import { Container } from "react-bootstrap";
import {  Link } from "react-router-dom";
import "../css/serviciosagricultor.css";


const Servicioagricultor = (props) => {



    return(

        <Container >

            <div className= {`contenido-informacion ${props.background}`}>
            <div className="contenido-servicio">
            <h1 className="titulo-servicio">
                {props.nombre}
            </h1>
            <p className="parrafo-servicio">
                {props.parrafo}
            </p>
            </div>
           
          
<div className="conteniddo-boton">
<button 
className="boton-start-servicio button">
                <Link to={`/${props.link}`} className="boton-servicio enlace">
                      <h2 >
                        start
                      </h2>
                 </Link>

            </button>
</div>
            
           </div>

        </Container>

    );
}

export default Servicioagricultor;