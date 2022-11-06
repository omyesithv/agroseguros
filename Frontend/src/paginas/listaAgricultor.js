import '../App.css';
import React, { Component  } from 'react';
import { Table  } from 'react-bootstrap';
//import axios from 'axios';

class listaAgricultor extends Component{
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      isLoaded: false,
      agricultores: []
    }  
  };

    componentDidMount(){
      const url = 'http://localhost:4000/agricultor'      
      let cad = ' ';
      fetch(url)
      .then(response => response.json())
      .then(datos=> {
        datos.forEach(agricultores => {
          console.log(agricultores.nombres, agricultores.apellidos, agricultores.agremiacion, 
            agricultores.matriculai, agricultores.rut)
            // cad += `<tr>
            // <td>${agricultores.nombres}</td>
            // <td>${agricultores.apellidos}</td>
            // <td>${agricultores.agremiacion}</td>
            // <td>${agricultores.matriculai}</td>
            // <td>${agricultores.rut}</td>
            // </tr>`;
            // console.log(cad)

        }) 
      }) 
    }
    render(){
      const { error, isLoaded, agricultores } = this.state;
    if (error) {
      return <div>Error: {error.message}</div>;
    } else if (!isLoaded) {
      return <div> Cargando ... </div>;
    } else {
    return (
        <div className='form-wapper'>
          <Table className='table-wrapper'>
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
            {agricultores.map(item => (   
              <tr>
            <td>{item.nombres}</td>
            <td>{item.apellidos}</td>
            <td>{item.agremiacion}</td>
            <td>{item.matriculai}</td>
            <td>{item.rut}</td>
            </tr>
            ))}   
            </tbody>
          </Table>
        </div>
        );
      }
    }
  }  
   export default listaAgricultor;
  