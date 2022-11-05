import { useState } from "react";
import "../css/estilos.css";
import { Link } from "react-router-dom";
import { Form, Button } from "react-bootstrap";
import axios from "axios";

const Home = () => {
  const [datos, setDatos] = useState({
    usuario: "",
    password: "",
  });

  const handleInputChange = (event) => {
    // console.log(event.target.name)
    // console.log(event.target.value)
    setDatos({
      ...datos,
      [event.target.name]: event.target.value,
    });
  };

  const enviarDatos = (e) => {
    e.preventDefault();
    const usuarioObject = {
      usuario: this.state.usuario,
      password: this.state.password,
    };
  
    // axios
    //   .post("http://localhost:3000/usuarios/login", usuarioObject)
    //   .then((res) => console.log(res.data));   
    //   this.setState({ usuario: "", password: "",       
    // });
    
  }
    
  return (
    <div className="contenedor">
      <div>   
        <h1>INICIO SESION</h1> 
      </div>
      <Form onSubmit={enviarDatos}>
        <div className='contenedor-input'>
          <input
            type="text"
            placeholder="usuario"
            className="form-control"
            onChange={handleInputChange}
            name="usuario">
          </input>
        </div>
        <div className='contenedor-input'>
          <input
            type="text"
            placeholder="password"
            className="form-control"
            onChange={handleInputChange}
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
};

export default Home;
