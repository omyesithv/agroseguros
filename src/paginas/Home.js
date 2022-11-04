import { useState } from "react";
import "../css/estilos.css";
import { Link } from "react-router-dom";
import { Form, Button } from "react-bootstrap";

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

  const enviarDatos = (event) => {
    fetch('localhost:3000/usuarios/login', {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            weight : this.state.weight,
            height : this.state.height,
            imc : this.state.imc,
        })
    });
    
    event.preventDefault();
    console.log("enviando datos..." + datos.usuario + " " + datos.password);
  };
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
