import React, { Component } from 'react';
import { Button, Container, Table} from 'react-bootstrap';
import axios from 'axios';
import "../../css/ver-producto.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from 'react-router-dom';
import {LOGIN, LOGOUT, PRIVATE, PRIVATE1, PRIVATE2, PRIVATE3, PRIVATE4, PRIVATE5, PRIVATE6} from "../../componentes/router/Path";

export default class verProducto extends Component {

    state = {
        productos: []
        , status: false
    }

    cargarProductos = () => {
        let url = 'http://127.0.0.1:4000/producto';
        axios.get(url).then(res => {console.log(res.data)
        this.setState({
            productos: res.data,
            status: true
        });
    });
    }

    componentDidMount = () => {
        this.cargarProductos();
    }

    render() {
        return( 
            <Container>
                <div className='grid-productos'>
                    {this.state.status === true  && (
                        this.state.productos.map((producto, i) => {
                            return(
                                <div className='productos' key={i}>
                                    <p><strong>Producto: </strong>{producto.producto}</p>
                                    <p><strong>Cantidad: </strong>{producto.cantidad}</p>
                                    <p><strong>Ubicacion: </strong>{producto.ubicacion}</p>
                                    <p><strong>Precio: </strong>{producto.precio}</p>

                                </div>
                            );
                        })
                    )}
                    
                  
                </div>
                <Link to="/HomeAgricultor/CrearProducto"  className='button'>
                    Agregar
                  </Link>
             
            </Container>
        );
    }



}