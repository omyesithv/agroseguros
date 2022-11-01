import { Outlet, Link } from "react-router-dom";
import { Navbar, Nav, Container } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

const Layout = () =>{
 return <header className="App-header">
 <Navbar bg ="success" variant = "success">   
    <Container>
      <Navbar.Brand>
        <Link to="/">Home</Link>
      </Navbar.Brand>  
      <Nav ClassName = "Justyfy-content-end">
        <Nav> 
          <Link to="/About" className = 'nav-link'>Inversionistas</Link>
        </Nav>
        <Nav>
         <Link to="/Agricultor" className = 'nav-link'>Agricultores</Link>    
        </Nav>
      </Nav>    
      <Outlet />
    </Container>  
  </Navbar>  
 </header>
}

export default Layout;
