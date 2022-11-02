import '../App.css';
import React, { Component  } from 'react';
import { Table  } from 'react-bootstrap';
//import axios from 'axios';

class listaAgricultor extends Component{
    state = {
     agricultor: []  
    }
    
    componentDidMount(){
      const url = 'http://localhost:4000/agricultor'      
      let cad = ' ';
      fetch(url)
      .then(response => response.json())
      .then(datos=> {
        datos.forEach(agricultores => {
          console.log(agricultores.nombres, agricultores.apellidos, agricultores.agremiacion, 
            agricultores.matriculai, agricultores.rut)
            cad += `<tr>
            <td>${agricultores.nombres}</td>
            <td>${agricultores.apellidos}</td>
            <td>${agricultores.agremiacion}</td>
            <td>${agricultores.matriculai}</td>
            <td>${agricultores.rut}</td>
            </tr>`;
            console.log(cad)

        }) 
      }) 
    }
    render(){
    return (
        <div className='form-wapper'>
          <Table>
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
          </Table>
        </div>
    );
    }  
}   
   export default listaAgricultor;
  
