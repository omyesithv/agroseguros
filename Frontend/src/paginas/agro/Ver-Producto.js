import React, { Component } from 'react';
import { Button, Container, Table} from 'react-bootstrap';
import axios from 'axios';
import "../../css/ver-producto.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from 'react-router-dom';
import {LOGIN, LOGOUT, PRIVATE, PRIVATE1, PRIVATE2, PRIVATE3, PRIVATE4, PRIVATE5, PRIVATE6, PRIVATE7} from "../../componentes/router/Path";

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
                <Link className='button correcion' to={PRIVATE6}>Agregar productos</Link>
                    {this.state.status === true  && (
                        this.state.productos.map((producto, i) => {
                            return(
                                <div className='productos' key={i}>
                                    <p><strong>Producto: </strong>{producto.producto}</p>
                                    <p><strong>Cantidad: </strong>{producto.cantidad}</p>
                                    <p><strong>Ubicacion: </strong>{producto.ubicacion}</p>
                                    <p><strong>Precio: </strong>{producto.precio}</p>

                                    <Link className='button' to={"/HomeAgricultor/eliminar-producto/" + producto._id}>Eliminar</Link>
                                    <Link className='button' to={"/HomeAgricultor/editar-producto/" + producto._id}>Editar</Link>
                                   

                                </div>
                            );
                        })
                    )}

                </div>
            </Container>
        );
    }



}