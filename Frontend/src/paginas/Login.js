import React, { useContext, useEffect, useState } from "react";
import  {Form, Button, Container } from 'react-bootstrap';
import axios from "axios";
import app from "./app.json";
import {isNull} from "util";
import '../css/login.css';
import Cookies from "universal-cookie";
//import VerAgricultor from "./VerAgricultor";
import { Link } from "react-router-dom";
import { useAuthContext } from "../componentes/context/authContext";
import {miclave} from '../componentes/context/Miclave';
import mialerta from 'sweetalert';
import ContextoUsuario   from '../componentes/context/ContextoUsuario';

function Login() {
  const {login} = useAuthContext();
  const [tipo_usuario, setTipo_usuario ] = useState(""); 
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const {setUsuario} = useContext(ContextoUsuario);

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
       
      email: email,
      password: password,

 
    };
  
     axios
     .post(`${APIHOST}/usuarios/login `,usuarioActual)
     .then((res) => { 
        const usuario1 = res.data;
    
        if(isNull(res.data)){
          //alert("Usuario o Contraseña invalidos");
          MostrarAlerta();
          console.log(usuarioActual);
          console.log(email);
        }else
        {
          console.log(usuario1)
          //setTipo_usuario(res.data.tipo_usuario); 
         
         setUsuario (usuario1); 
        
          login();
        }  
     });
    
    
  }
  
  useEffect(() => {
    if(isNull(tipo_usuario)){
      console.log('no render!')
    }else{
      console.log('render!')
      console.log(email);  
      
    }
    
    
      
  })

  return (

    <div className="primera-division">

      <div className="contenedor-login">
        
      <Form onSubmit={CargarDatos}>

      <div >
        <h1 className="login-tittle">
        Iniciar sesión
        </h1>
        </div>
          <div className="input-email">
          <label className="tittle-email" htmlFor="elemail">Email:</label>
          <input type="text" className="input" value={email} onChange={ev => setEmail(ev.target.value)} />
          </div>
          <div className="input-password">
          <label className="tittle-password" htmlFor="elpassword">Password:</label> 
          <input type="text" className="input" value={password} onChange={ev => setPassword(ev.target.value)} />
          </div>

      <div className="boton-ingresar-division">
          <Button className="boton-ingresar" type="submit">INGRESAR</Button>
      </div>   
      </Form>
<div>
  
</div>
  
    <h2 className="link-registrate">
    Si no  te has registrado, hazlo haciendo click<Link className="enlace"  to="/CrearUsuario"> aquí</Link>
      </h2> 
       
      </div>

{/* <div className="contenedor-login">
 

     <Form onSubmit={CargarDatos}>

       <div >
         <h1>
         Iniciar sesión
         </h1>
         </div>
       <div className="input-email">
           <label htmlFor="elemail">Email:</label>
           <input type="text" value={email} onChange={ev => setEmail(ev.target.value)} />
       </div>
       <div className="input-password">
           <label htmlFor="elpassword">Password:</label> 
           <input type="text" value={password} onChange={ev => setPassword(ev.target.value)} />
       </div>
       
       <div>
           <Button type="submit">INGRESAR</Button>
       </div>   
       </Form>
         <Link to="/CrearUsuario">Registrate </Link>

         
     
     
     
   
  
   </div> */}

      <div className="background_image">

      </div>

    </div>

/* <div className="contenedor-login">
   
    <Container>


      <Form onSubmit={CargarDatos}>





        <div  >
          <h1>
          Iniciar sesión
          </h1>
          </div>
        <div className="input-email">
            <label htmlFor="elemail">Email:</label>
            <input type="text" value={email} onChange={ev => setEmail(ev.target.value)} />
        </div>
        <div className="input-password">
            <label htmlFor="elpassword">Password:</label> 
            <input type="text" value={password} onChange={ev => setPassword(ev.target.value)} />
        </div>
        
        <div>
            <Button type="submit">INGRESAR</Button>
        </div>   
        </Form>
          <Link to="/CrearUsuario">Registrate </Link>

          
      
      
      
    </Container> 
   
    </div> */
    
  )
}
export default Login;
