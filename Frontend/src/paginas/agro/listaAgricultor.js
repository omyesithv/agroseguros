import '../../App.css';
import React, { Component  } from 'react';
import { Button, Container, Table  } from 'react-bootstrap';
import axios from 'axios';
import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from "react-router-dom";
import "../../css/lista-agricultor.css";
import {LOGIN, LOGOUT, PRIVATE, PRIVATE1, PRIVATE2, PRIVATE3, PRIVATE4, PRIVATE5, 
  PRIVATE6, PRIVATE7} from "../../componentes/router/Path";
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

        <Container>

          <div className='division-link'>

          <Link className=' crear-boton' to={PRIVATE5}>       
             Crear agricultor
           </Link>

           <Link className='crear-boton' to={PRIVATE7}>
             Ver productos
           </Link>

          </div>

    
       

        <div className='grid'>
       
        {this.state.status === true && 
        (
          this.state.agricultores.map((agricultor, i) => {
            return (

            
             
                <div className='agricultores' key={i}>
                  

                  
                <p><strong>Nombre:</strong> {agricultor.nombres}</p>
                <p> <strong>Apellido:</strong> {agricultor.apellidos}</p>
                <p><strong>Correo:</strong> {agricultor.correo}</p>
                <p><strong>Gremio:</strong>{agricultor.agremiacion}</p>
                <p><strong>Matricula: </strong>{agricultor.matriculai}</p>
                <p><strong>RUT: </strong>{agricultor.rut}</p>
                
                {/* <Link to={"/HomeAgricultor/modificar/" + agricultor._id}>Modificar</Link>                             
                <Link to={"/HomeAgricultor/confirmacion/" + agricultor._id}>Eliminar</Link>
            */}
                  </div>


               
           

              
            
            );
          })
        )}
      </div>

      </Container>
                  
        // <div className='form-wapper espaciado'>
        //   <h1 className='tittle-home-agricultor'>Agricultores disponibles</h1>
        // <div>
        // <Link to={"/HomeAgricultor/Crear"}>Adicionar</Link>
        // </div> 
        // {/* <div>
        // <Button type="submit">INGRESAR</Button>
        // </div>    */}

        //   <Table striped bordered hover>
        //     <thead>
        //     <tr>
        //       <th>ID</th>
        //       <th>Nombres</th>
        //       <th>Apellidos</th>
        //       <th>Correo</th>
        //       <th>Agremiacion</th>
        //       <th>MatriculaI</th>
        //       <th>Rut</th>
        //     </tr>
        //     </thead>    
        //     <tbody>           
        //     {this.state.status === true &&
        //       (
        //           this.state.agricultores.map((agricultor, i) => {
        //               return(
        //                 <tr key={i}>
        //                   <td>{agricultor._id}</td>                                
        //                   <td>{agricultor.nombres}</td>
        //                   <td>{agricultor.apellidos}</td>
        //                   <td>{agricultor.correo}</td>
        //                   <td>{agricultor.agremiacion}</td>
        //                   <td>{agricultor.matriculai}</td>
        //                   <td>{agricultor.rut}</td>
        //                   <td><Link to={"/HomeAgricultor/modificar/" + agricultor._id}>Modificar</Link></td>
        //                   <td><Link to={"/HomeAgricultor/confirmacion/" + agricultor._id}>Eliminar</Link></td>
        //                 </tr>
        //               );
        //           })
        //       )}   
        //     </tbody>

           



        //   </Table>
        // </div>

        
        );
      }
  }
   