import './App.css';
import { Routes, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Layout  from "./paginas/Layout";
import About  from "./paginas/About";
import Home  from "./paginas/Home";
import Registro from './paginas/Registro';
import ListaAgro from './paginas/listaAgricultor'
//import Default  from "./pages/Default";
//import Dashboard  from "./pages/Dashboard";
import {Container, Row, Col   } from 'react-bootstrap';

function App() {
  return (
    <div className="App">
   
    <Container>
      <Row>
        <Col md = {12}>
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