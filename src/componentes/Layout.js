import '../App.css';
import { Outlet, Link } from "react-router-dom";
import { Navbar, Nav, Container } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

const Layout = () =>{
 return <header className="App-header">
 <Navbar bg ="success" variant = "success">   
    <Container fluid>
        
      <Nav ClassName = "light-blue darken-4">
        <ul>
          <li>
            <Navbar.Brand className="navbar-brand-custom">
              <Link to="/" className = 'edit-link'>Home</Link>
            </Navbar.Brand>  
          </li>
          <li>
            <Link to="/inversion" className = 'nav-link'>Inversion</Link>
          </li>
          <li>
          <Link to="/Agricultor" className = 'nav-link'>Agricultor</Link>    
          </li>
        </ul>
      </Nav>    
      <Outlet />
    </Container>  
  </Navbar>  
 </header>
}

export default Layout;
