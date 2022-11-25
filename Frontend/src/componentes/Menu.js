import "../App.css";
import { Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import Layout from "./Layout";
import Home from "../paginas/servicios.home";
import Nofound from "../paginas/Nofound";
import CrearAgro from "../paginas/agro/Crear-Agricultor";
import ListaAgro from "../paginas/agro/listaAgricultor";
import ListaInver from "../paginas/agro/listainversionista";
import EditarAgro from  "../paginas/agro/EditarAgricultor";
import EliminarAgro from "../paginas/agro/EliminarAgricultor";
import Crearusuario from "../paginas/agro/CrearUsuario";
import Crearproducto from "../paginas/producto/crear-producto";
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
import { LOGIN, LOGOUT, PRIVATE, PRIVATE1,PRIVATE2 , PRIVATE3, PRIVATE4, PRIVATE5, PRIVATE6, PRIVATE7} from '../componentes/router/Path';
import CrearInver from "../paginas/inversion/CrearInversionista";
import ServicioAgricultor from "../paginas/descripcionAgricultor";
import Verproducto from "../paginas/agro/Ver-Producto";
import EliminarProducto from "../paginas/agro/eliminar-producto";
import EditarProducto from "../paginas/producto/editar-producto";


 const Menu=() =>{
    return (
      <Container>
        {/* <Layout /> anterior header */}
        <AuthContextProvider>
        <Routes>
          
           <Route path="/" element={<PublicRoute />}>  
            <Route path="/Login" element={<Login />} />
            <Route path="/CrearUsuario" element={<Crearusuario />} />
            <Route path="/Home" element={<Home />} />
            <Route path="*" element={<Nofound />} />
            <Route path="/serviciosAgricultor" element={< ServicioAgricultor />} />
            <Route path="/CrearInversion" element={<CrearInver />} />
            
           </Route>  
            <Route path={PRIVATE} element={<PrivateRoute />}> 
            <Route path={PRIVATE} element={<HomeAgricultor />} />
            <Route path={PRIVATE6} element={<Crearproducto />} />
            <Route path="home" element={<Home />} />
            <Route path="eliminar-producto/:id" element={<EliminarProducto />} />
            <Route path={LOGOUT} element={<Logout />} />
            <Route path="eliminarAgricultor/:id" element={<EliminarAgro />} />
            <Route path={PRIVATE5} element={<CrearAgro />} />
            <Route path="/HomeAgricultor/listaAgro" element={<ListaAgro />} />
            <Route path={PRIVATE2} element={<ListaInver />} />
            <Route path="editar-producto/:id" element={<EditarProducto />} />
            <Route path={PRIVATE7} element={<Verproducto />} />
            <Route exact path={PRIVATE3} element={<EditarAgro />} />
            <Route exact path={PRIVATE4} element={<Confirmacion />} />
            <Route path="VerAgricultor" element={<VerAgricultor />} />
           </Route> 
        </Routes>
                 
      </AuthContextProvider>  
      </Container>
    );  
}

export default Menu;