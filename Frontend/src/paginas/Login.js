import React, { useEffect, useState } from "react";
import  {Form, Button } from 'react-bootstrap';
import axios from "axios";
import app from "../componentes/app.json";
import {isNull} from "util";
import Cookies from "universal-cookie";
import VerAgricultor from "./VerAgricultor";
import { ProviderUsuario } from '../componentes/context/ContextoUsuario';
import { Link } from "react-router-dom";

function Login() {
  const [nombres, setNombres ] = useState("");
  const [apellidos, setApellidos ] = useState(""); 
  const [correo, setCorreo] = useState("")
  const [contraseña, setContraseña] = useState("")
  //const [usuario, setUsuario] = useState("")
  const usuarioGlobal = { nombre: 'Juan', apellido: 'Salazar' };

  const {APIHOST}= app;
  const cookies = new Cookies();

  function CargarDatos(event){
    event.preventDefault()
    
    const usuarioActual = {
       
      correo: correo,
      contraseña: contraseña,

 
    };
    
    
    axios
    .post(`${APIHOST}/agricultor/login `,usuarioActual)
    .then((res) => { 
      const usuario = res.data;
   
       if(isNull(res.data)){
      alert("Usuario o Contraseña invalidos");
      console.log(usuarioActual);
      console.log(correo);
      }else{
       console.log(usuario)
       console.log(usuarioGlobal);
       setNombres(res.data.nombres); 
       setApellidos(res.data.apellidos); 
        
       
        //window.location.replace('/VerAgricultor');    
      }  
    });
  }
  
  useEffect(() => {
    if(isNull(nombres)){
      console.log('no render!')
    }else{
      console.log('render!')
      console.log(nombres);
       
      
    }
      
  })

  return (
    <ProviderUsuario value={usuarioGlobal}>
    <div>
      <Form onSubmit={CargarDatos}>
        <div>INICIO SESION.</div>
        <input type="text" value={correo} onChange={ev => setCorreo(ev.target.value)} />
        <input type="text" value={contraseña} onChange={ev => setContraseña(ev.target.value)} />
        <div>
          <Button type="submit">INGRESAR</Button>
        </div>   
      </Form>
      <Link to={"/VerAgricultor" }>Continuar</Link>
      
    </div> 
    </ProviderUsuario>
    
  )
}
export default Login;
