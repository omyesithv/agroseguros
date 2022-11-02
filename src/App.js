import './App.css';
import { Routes, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Layout  from './componentes/Layout';
import About  from "./componentes/About";
import Home  from "./componentes/Home";
import Registro from './componentes/Crear-Agricultor';
import ListaAgro from './componentes/listaAgricultor'
//import Default  from "./pages/Default";
//import Dashboard  from "./pages/Dashboard";
import {Container, Row, Col   } from 'react-bootstrap';

function App() {
  return (
    <div className="App">
   
    <Container>
      <Row>
        <Col md = {8}>
          <div ClassName="wrappe">
            <h1>AGROSEGUROS</h1>
            <Routes>
            <Route path="/" element={<Layout />}>
                <Route path="about" element={<About />} />
                <Route path="registro" element={<Registro />} />
                <Route path="Agricultor" element={<ListaAgro />} />
                <Route path="/" element={<Home />} />
              </Route>
            </Routes>
          </div>
        </Col>
      </Row>
    </Container>
   </div> 
  );
}

export default App;