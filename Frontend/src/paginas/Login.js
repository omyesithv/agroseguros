import React, { useEffect, useState } from "react";
import  {Form, Button } from 'react-bootstrap';
import axios from "axios";
import app from "../componentes/app.json";
import {isNull} from "util";
import Cookies from "universal-cookie";
import VerAgricultor from "./VerAgricultor";
import { Link } from "react-router-dom";
import { useAuthContext } from "../componentes/context/authContext";
import {miclave} from '../componentes/context/Miclave';
import mialerta from 'sweetalert';

function Login() {
  const {login} = useAuthContext();
  const [nombres, setNombres ] = useState("");
  const [apellidos, setApellidos ] = useState(""); 
  const [correo, setCorreo] = useState("")
  const [contraseña, setContraseña] = useState("")
  //const [usuario, setUsuario] = useState("")
    
  const {APIHOST}= app;
  const cookies = new Cookies();
  
  const MostrarAlerta = () => {
    mialerta({
      title:"Error",
      text:"Correo o Contraseña invalidos",
      icon: "warning",
      button:"Aceptar"
    })
  }

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
      //alert("Usuario o Contraseña invalidos");
      MostrarAlerta();
      console.log(usuarioActual);
      console.log(correo);
      }else{
       console.log(usuario)
       setNombres(res.data.nombres); 
       setApellidos(res.data.apellidos); 
       login();

        //window.location.replace('/VerAgricultor');    
      }  
    });

   // if (contraseña === miclave) {
   //   login();
   // }  
    
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
    <div>
      <Form onSubmit={CargarDatos}>
        <div>INICIO SESION.</div>
        <input type="text" value={correo} onChange={ev => setCorreo(ev.target.value)} />
        <input type="text" value={contraseña} onChange={ev => setContraseña(ev.target.value)} />
        <div>
          <Button type="submit">INGRESAR</Button>
        </div>   
      </Form>
      <VerAgricultor/>
    </div> 
    
  )
}
export default Login;
