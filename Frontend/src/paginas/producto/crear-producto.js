import React, { Component } from "react";
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import axios from "axios";



export default class CrearProducto extends Component {
     constructor(props) {
        super(props);
        
        this.onChangeProdproducto = this.onChangeProdproducto.bind(this);
        this.onChangeProdcantidad = this.onChangeProdcantidad.bind(this);
        this.onChangeProdUbicacion = this.onChangeProdUbicacion.bind(this);
        this.onChangeProdprecio = this.onChangeProdprecio.bind(this);


        this.onSubmit = this.onSubmit.bind(this);

        this.state = {
            producto: "",
            cantidad: "",
            ubicacion: "",
            precio: "",
            
        };
      }


     
      onChangeProdproducto(e) {
        this.setState({producto: e.target.value});
      }
      onChangeProdcantidad(e) {
        this.setState({cantidad: e.target.value});
      }
      onChangeProdUbicacion(e) {
        this.setState({ubicacion: e.target.value});
      }
      onChangeProdprecio(e) {
        this.setState({precio: e.target.value});
      }
     
      onSubmit(e) {
        e.preventDefault();
        const ProductoObject = {
            producto: this.state.producto,
            cantidad: this.state.cantidad,
            ubicacion: this.state.ubicacion,
            precio: this.state.precio,
            
        };

        axios
        .post("http://localhost:3000/producto", ProductoObject)
        .then((res) => console.log(res.data));
        this.setState({producto:"", cantidad:"",ubicacion:"",precio:""})
        window.location.replace('/');
      }

      render() {
        return (
            <div className="form-wrapper division">
                <Form onSubmit={this.onSubmit}>
                    <Form.Group controlId="producto">
                        <Form.Label>Producto</Form.Label>
                        <Form.Control
                        type="text"
                        value={this.state.producto}
                        onChange={this.onChangeProdproducto} />
                    </Form.Group>
                    <Form.Group controlId="cantidad">
                        <Form.Label>Cantidad</Form.Label>
                        <Form.Control
                        type="text"
                        value={this.state.cantidad}
                        onChange={this.onChangeProdcantidad} />
                    </Form.Group>
                    <Form.Group controlId="ubicacion">
                        <Form.Label>Ubicación</Form.Label>
                        <Form.Control
                        type="text"
                        value={this.state.ubicacion}
                        onChange={this.onChangeProdUbicacion} />
                    </Form.Group>
                    <Form.Group controlId="precio">
                        <Form.Label>Precio</Form.Label>
                        <Form.Control
                        type="text"
                        value={this.state.precio}
                        onChange={this.onChangeProdprecio} />
                    </Form.Group>

                    <Button 
                     type="submit"
                     className="button"

                    >
                       Crear Producto

                    </Button>
                </Form>
                 
            </div>
        );
      }
    
}
