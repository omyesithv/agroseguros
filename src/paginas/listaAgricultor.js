import React, { Component  } from 'react';
//import axios from 'axios';

class listaAgricultor extends Component{
    state = {
     agricultor: []  
    }
    
    componentDidMount(){
      const url = 'http://localhost:4000/agricultor'      
      fetch(url)
      .then(response => response.json())
      .then(datos=> {
        datos.forEach(agricultores => {
          console.log(agricultores.nombres, agricultores.apellidos, agricultores.agremiacion, 
            agricultores.matriculai, agricultores.rut)
        }) 
      }) 
    }
    render(){
    return (
        <table>
          <thead>
          <tr>
            <th>Nombres</th>
            <th>Apellidos</th>
            <th>Correo</th>
            <th>Cedula</th>
            <th>Agremiacion</th>
            <th>Rut</th>
          </tr>
          </thead>    
          <tbody>
              
          </tbody>
        </table>
    );
    }  
}   
   export default listaAgricultor;
  
