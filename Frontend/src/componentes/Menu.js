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
import VerAgricultor from "../paginas/VerAgricultor";
import Principal from "../paginas/Principal";
import AuthContextProvider from "./context/authContext";
import PrivateRoute from "./auth/PrivateRouter";
import PublicRoute from "./router/PublicRouter";
import Logout from "../paginas/Logout";
import {LOGIN, LOGOUT, PRIVATE} from '../componentes/router/Path';

 const Menu=() =>{
    return (
      <Container>
        <Layout />
        <AuthContextProvider>
        <Routes>
          
          <Route path="/" element={<PublicRoute />}> 
            <Route path="/Login" element={<Login />} />
            <Route path="*" element={<Nofound />} />
          </Route>
          <Route path={PRIVATE} element={<PrivateRoute />}>
            <Route path={PRIVATE} element={<Principal />} /> 
            <Route path={LOGOUT} element={<Logout />} />
            <Route path="eliminarAgricultor/:id" element={<EliminarAgricultor />} />
            <Route path="Crear" element={<CrearAgro />} />
            <Route path="Agricultor" element={<ListaAgro />} />
            <Route exact path="modificar/:id" element={<EditarAgricultor />} />
            <Route exact path="confirmacion/:id" element={<Confirmacion />} />
            <Route path="VerAgricultor" element={<VerAgricultor />} />
          </Route>
        </Routes>
      </AuthContextProvider>  
      </Container>
    );  
}

export default Menu;