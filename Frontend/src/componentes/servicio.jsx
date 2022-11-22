import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import {  Link } from "react-router-dom";
import "../css/servicio.css";






const Servicio = (props) => {
  return (
<Container className={`contenedor-principal ${props.color}`}>

<img src={require(`../img/${props.imagen}.jpg`)} alt="imagen-servicio" className="imagen-servicio"/>

<div className="titulo-servicio">

<h2 className="nombre-servicio">
   {props.nombre}
</h2>

</div>

<div className="parrafo-servicio">
<p className="descripcion-servicio">
{props.descripcion}
</p>

</div>



<div className="boton-servicio">
    <Link to={`/${props.link}`} className="button">
    {props.boton}
    </Link>

</div>

  


</Container>
  );

}


export default Servicio;