import axios from 'axios';
import React, { useState } from 'react'
import { Button, Form } from 'react-bootstrap'
import app from "../app.json";

const CrearInversionista = () => {
    const [nombre, setNombre ] = useState("");
    const [apellido, setApellido ] = useState(""); 
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [rut, setRut] = useState("");
    const [estadofinan, setEstadofinan] = useState("");
    const {APIHOST}= app;
    
    function GuardarDatos(event){
      event.preventDefault()
      const usuarioActual = {
       
        nombre: nombre,
        apellido: apellido,
        email: email,
        password: password,
        rut: rut,
        estadofinan: estadofinan,

      };

      axios
      .post(`${APIHOST}/inversionista `,usuarioActual)
      .then((res) => { 
        const usuario = res.data;
        console.log(usuario);
        console.log(usuarioActual);
        window.location.replace('/Login');
      })
    }  
     
  return (
    <div>
    <Form onSubmit={GuardarDatos}>
    <label htmlFor="nombre">Nombre:</label>  
      <input type="text" name="nombre" value={nombre} 
      onChange={ev => setNombre(ev.target.value)}
    />
    <label htmlFor="apellido">Apellido:</label>  
      <input type="text" name= "apellido" value={apellido} 
      onChange={ev => setApellido(ev.target.value)}
    />
    <label htmlFor="email">Email:</label>  
      <input type="text" name="email" value={email} 
      onChange={ev => setEmail(ev.target.value)}    
    />
    <label htmlFor="password">Password:</label>  
      <input type="text" name="password" value={password} 
      onChange={ev => setPassword(ev.target.value)}  
    />
    <label htmlFor="rut">Rut:</label>  
      <input type="text" name= "rut" value={rut} 
      onChange={ev => setRut(ev.target.value)}
    /> 
    <label htmlFor="estadofinan">Estado Financiero:</label>  
      <input type="text" name= "estadofinan" value={estadofinan} 
      onChange={ev => setEstadofinan(ev.target.value)}
    /> 
 
    <Button type="submit" className="btn btn-primary">
      Guardar
    </Button>    
 </Form> 

    </div>
  )
}

export default CrearInversionista