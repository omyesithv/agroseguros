import React, { useEffect, useState } from 'react'
import { useAuthContext } from '../componentes/context/authContext';
import axios from "axios";
import app from "./app.json";
import '../css/login.css';
import {isNull} from "util";
import { Link } from "react-router-dom";
//import { useAuthContext } from "../componentes/context/authContext1";
import mialerta from 'sweetalert';
import { Button, Form } from 'react-bootstrap';

const Login1 = () => 
{
  const {login} = useAuthContext();
  const [nombre, setNombre ] = useState("");
  const [apellido, setApellido ] = useState(""); 
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  
  const {APIHOST}= app;
  
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
       
      email: email,
      password: password,

 
    };

     axios
     .post(`${APIHOST}/inversionista/login `,usuarioActual)
     .then((res) => { 
      const usuario = res.data;
   
       if(isNull(res.data)){
      //alert("Usuario o Contraseña invalidos");
      MostrarAlerta();
      console.log(usuarioActual);
      console.log(email);
      }else{
       console.log(usuario)
       setNombre(res.data.nombre); 
       setApellido(res.data.apellido); 
       login();

        //window.location.replace('/VerAgricultor');    
      }  
     });
  }
  useEffect(() => 
  {
        if(isNull(nombre)){
        console.log('no render!')
        }else{
        console.log('render!')
        console.log(nombre);  
        
        }
   })
  return (
    <div className='contenedor-login'>
        <Form onSubmit={CargarDatos}>
      <div>
        <h1 className='titulo-login'>Inisia sesión como inversionista</h1>
        
        </div>
        <div>
            <label htmlFor="elemail">Email:</label>
            <input type="text" value={email} onChange={ev => setEmail(ev.target.value)} />
            </div>
        <div>
            <label htmlFor="elpassword">Password:</label> 
            <input type="text" value={password} onChange={ev => setPassword(ev.target.value)} />
        </div>
        
        <div>
            <Button type="submit">Entrar</Button>
        </div>   
        </Form>
    
    </div>
  );
}

export default Login1
