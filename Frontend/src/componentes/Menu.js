import "../App.css";
import { Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import Layout from "./Layout";
import EliminarAgricultor from "../paginas/EliminarAgricultor";
import Home from "../paginas/Home";
import Nofound from "../paginas/Nofound";
import CrearAgro from "../paginas/agro/Crear-Agricultor";
import ListaAgro from "../paginas/agro/listaAgricultor";
import ListaInver from "../paginas/agro/listainversionista";
import EditarAgro from  "../paginas/agro/EditarAgricultor";
import Confirmacion from "../componentes/Confirmacion";
import { Container, Row, Col } from "react-bootstrap";
import Login from "../paginas/Login";
//import Login1 from "../paginas/Login1";
import VerAgricultor from "../paginas/agro/VerAgricultor";
import HomeAgricultor from "../paginas/agro/HomeAgricultor";
import HomeInversionista from "../paginas/inversion/HomeInversionista";
import AuthContextProvider from "./context/authContext";
import PrivateRoute from "./auth/PrivateRouter";
import PublicRoute from "./router/PublicRouter";
import Logout from "../paginas/Logout";
import { LOGIN, LOGOUT, PRIVATE, PRIVATE1,PRIVATE2 , PRIVATE3} from '../componentes/router/Path';
import CrearInver from "../paginas/inversion/CrearInversionista";


 const Menu=() =>{
    return (
      <Container>
        <Layout />
        <AuthContextProvider>
        <Routes>
          
          <Route path="/" element={<PublicRoute />}> 
            <Route path="/Login" element={<Login />} />
            <Route path="/Home" element={<Home />} />
            <Route path="*" element={<Nofound />} />
            <Route path="Crear" element={<CrearAgro />} />
            <Route path="CrearInversion" element={<CrearInver />} />
            
          </Route>
          <Route path={PRIVATE} element={<PrivateRoute />}>
            <Route path={PRIVATE} element={<HomeAgricultor />} />
            <Route path={LOGOUT} element={<Logout />} />
            <Route path="eliminarAgricultor/:id" element={<EliminarAgricultor />} />
            <Route path={PRIVATE1} element={<ListaAgro />} />
            <Route path={PRIVATE2} element={<ListaInver />} />
            <Route path={PRIVATE3} element={<EditarAgro />} />
            <Route exact path="confirmacion/:id" element={<Confirmacion />} />
            <Route path="VerAgricultor" element={<VerAgricultor />} />
          </Route>
        </Routes>
                 
      </AuthContextProvider>  
      </Container>
    );  
}

export default Menu;