import React, { useEffect, useState } from "react";
import  {Form, Button } from 'react-bootstrap';
import axios from "axios";
import app from "../componentes/app.json";
import {isNull} from "util";
import Cookies from "universal-cookie";
import { useParams } from "react-router-dom";

function Login() {
  
  const [nombres, setNombres] = useState("")
  const [apellidos, setApellidos] = useState("")
  const [correo, setCorreo] = useState("")
  const [contraseña, setContraseña] = useState("")

  const {APIHOST}= app;
  const cookies = new Cookies();
  let { id } = useParams();

  function CargarDatos(event){
    event.preventDefault()
    const usuarioActual = {
      
      nombres: nombres,
      apellidos: apellidos,  
      correo: correo,
      contraseña: contraseña,

 
    };
    
    axios
    .post(`${APIHOST}/agricultor/' `+ id, usuarioActual)
    .then((res) => { console.log(res.data)
    if(isNull(res.data.token)){
      alert("Usuario o Contraseña inavalidos");
    }else{
      alert("Conexion Ok")    
    }  
    });
  }

  return (
    <Form onSubmit={CargarDatos}>
      <div>INICIO SESION</div>
      <input type="text" value={correo} onChange={ev => setCorreo(ev.target.value)} />
      <input type="text" value={contraseña} onChange={ev => setContraseña(ev.target.value)} />
      <div>
        <Button type="submit">INGRESAR</Button>
      </div>

      <p>{nombres}</p>
      <p>{apellidos}</p>
    </Form>
  )
}
export default Login;