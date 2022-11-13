import '../App.css';
import React, { Component  } from 'react';
import { Table  } from 'react-bootstrap';
import axios from 'axios';
import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from "react-router-dom";
//import Loading from "../componentes/Loading";
export default class listaAgricultor extends Component{
  // constructor(props) {
  //   super(props);
  state = {
    agricultores: []
    , status: false
}

cargarAgricultores = () => {
    let url = 'http://localhost:4000/agricultor';
    axios.get(url).then(res => { console.log(res.data)
        this.setState({
            agricultores: res.data
            , status: true
        });
    });
}

componentDidMount = () => {
    this.cargarAgricultores();
}
      
    
    render(){
      //if (!this.cargarAgricultores.length) return <Loading />;
      return (
         
        <div className='form-wapper'>
          <Table striped bordered hover>
            <thead>
            <tr>
              <th>ID</th>
              <th>Nombres</th>
              <th>Apellidos</th>
              <th>Correo</th>
              <th>Agremiacion</th>
              <th>MatriculaI</th>
              <th>Rut</th>
            </tr>
            </thead>    
            <tbody>           
            {this.state.status === true &&
              (
                  this.state.agricultores.map((agricultor, i) => {
                      return(
                        <tr key={i}>
                          <td>{agricultor._id}</td>                                
                          <td>{agricultor.nombres}</td>
                          <td>{agricultor.apellidos}</td>
                          <td>{agricultor.correo}</td>
                          <td>{agricultor.agremiacion}</td>
                          <td>{agricultor.matriculai}</td>
                          <td>{agricultor.rut}</td>
                          <td><Link to={"/modificar/" + agricultor._id}>Modificar</Link></td>
                          <td><Link to={"/confirmacion/" + agricultor._id}>Eliminar</Link></td>
                        </tr>
                      );
                  })
              )}   
            </tbody>
          </Table>
        </div>
        );
      }
  }
   