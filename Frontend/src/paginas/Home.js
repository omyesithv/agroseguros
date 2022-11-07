import React, { Component } from "react";
import "../css/estilos.css";
import { Link } from "react-router-dom";
import { Form, Button } from "react-bootstrap";
import axios from "axios";

export default class Home extends Component {
  constructor(props) {
    super(props);

    this.onChangeusuario = this.onChangeusuario.bind(this);
    this.onChangepassword = this.onChangepassword.bind(this);
    
    this.onSubmit = this.onSubmit.bind(this);

    this.state = {
      usuario: "",
      password: "",
    };
  }
      
  onChangeusuario(e) {
    this.setState({ usuario: e.target.value });
  }
  onChangepassword(e) {
    this.setState({ password: e.target.value });
  }
  
  onSubmit(e) {
    e.preventDefault();
    const usuarioObject = {
      usuario: this.state.usuario,
      password: this.state.password,
    };
  
    
    axios
    .post("http://localhost:4000/usuarios/login", usuarioObject)
    .then((res) => console.log(res.data));   
  this.setState({ usuario: "", password: "",      
  });
}

render() 
  {    
  return (
    <div className="contenedor">
      <div>   
        <h1>INICIO SESION</h1> 
      </div>
      <Form onSubmit={this.onSubmit}>
        <div className='contenedor-input'>
          <input
            type="text"
            placeholder="usuario"
            className="form-control"
            onChange={this.onChangeusuario}
            name="usuario">
          </input>
        </div>
        <div className='contenedor-input'>
          <input
            type="text"
            placeholder="password"
            className="form-control"
            onChange={this.onChangepassword}
            name="password"
          ></input>
        </div>
        
        <Button type="submit" className="btn btn-primary">
          Enviar
        </Button>

      </Form>
      <div>
        <Link to="/Crear">Registrate</Link>
      </div>

    </div>
    );
  }
}  