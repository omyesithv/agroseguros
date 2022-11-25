import React from "react";
import Servicioagricultor from "../componentes/servicioAgricultor";
import "../css/serviciosagricultor.css";



const descripcionAgricultor = () => {
    return(
<div className="contenido-de-servicios">
    <Servicioagricultor
    nombre="Comercialización" 
    parrafo="Ingresa y oferta el producto o commodite que desees comercializar o vender y llega a muchos compradores."
    link="Login"
    background="comercializacion"/>

<Servicioagricultor
    nombre="Financiación" 
    parrafo="Publica una propuesta de financiaciamiento y encuentra inversionistas interesados en invertir tu cultivo."
    link="Login"
    background="financiacion"/>

<Servicioagricultor
    nombre="Cobertura de precio" 
    parrafo="Publica una oferta futura de tu producción, donde se pactará al instante el precio de venta de ese producto a futuro."
    link="Login"
    background="cobertura-precio"/>
</div>


    );
}

export default descripcionAgricultor;