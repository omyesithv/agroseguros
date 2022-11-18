import "../App.css";
import { Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import Layout from "./Layout";
import EliminarAgricultor from "../paginas/EliminarAgricultor";
import Home from "../paginas/Home";
import Nofound from "../paginas/Nofound";
import CrearAgro from "../paginas/Crear-Agricultor";
import ListaAgro from "../paginas/listaAgricultor";
import EditarAgricultor from  "../paginas/EditarAgricultor";
import Confirmacion from "../componentes/Confirmacion";
import { Container, Row, Col } from "react-bootstrap";
import Login from "../paginas/Login";
import Pageservicios from "../paginas/serviciosHome";
import VerAgricultor from "../paginas/VerAgricultor";
import HomeServicios from "../paginas/serviciosHome.jsx";

 const Menu=() =>{
    return (
      <div>
      <Container>
        {/* <Layout /> */}
        <Routes>
          <Route>
            <Route path="eliminarAgricultor/:id" element={<EliminarAgricultor />} />
            <Route path="Crear" element={<CrearAgro />} />
            <Route path="Agricultor" element={<ListaAgro />} />
            <Route exact path="modificar/:id" element={<EditarAgricultor />} />
            <Route exact path="confirmacion/:id" element={<Confirmacion />} />
            <Route path="home" element={<Login />} />
            <Route path="VerAgricultor" element={<VerAgricultor />} />
            <Route path="services" element={<Pageservicios />} />
            <Route path="*" element={<Nofound />} />
            <Route path="inicio" element={<HomeServicios />} />

          </Route>
        </Routes>
      </Container>
      </div>
    );  
}

export default Menu;