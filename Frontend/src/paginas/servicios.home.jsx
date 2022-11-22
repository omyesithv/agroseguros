import React from "react";
import Servicio from "../componentes/servicio";
import { Container, Row, Col } from "react-bootstrap";
import "../css/estilos.css";
import "../css/servicio.css";

const pageServicios = () => {
    return (
<Container className="Contenedor-servicios">
    


    <Servicio
    imagen="inversionista"
   nombre="¡Invierte en el agro!" 
   descripcion="Eres inversionista y apasionado por evolucionar el agro en tu país"
   boton="Soy inversionista"
   link="descripcioninversionista"
   color="color1"
   />
   


<Servicio 
   imagen="agricultor"
   nombre ="¿Eres un agricultor?"
   descripcion="Si eres un agricultor y deseas impulsar tus ventas y cultivos"
   boton="Soy agricultor"
   link="serviciosAgricultor"
   color="color2"/>



   
   

   </Container>

   
    );
}

export default pageServicios;