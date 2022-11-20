import "../App.css";
import { Outlet, Link } from "react-router-dom";
import { Navbar, Nav, Container, Dropdown, DropdownButton } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

const Layout = () => {
  return (
    <Navbar id="navbar" bg="secondary" expand="lg" variant="dark">
      <Container>
        <ul>
          <li>
            <Navbar.Brand className="navbar-brand-custom">
              <Link to="/Home" className="edit-link">
                Inicio
              </Link>
            </Navbar.Brand>
          </li>
          <li>
            <Link to="/HomeAgricultor/inversionista" className="nav-link">
              Inversion
            </Link>
          </li>
          <li>
            <Link to="/HomeAgricultor/agricultor" className="nav-link">
              Agricultor
            </Link>
          </li>
        </ul>
        <DropdownButton id="dropdown-basic-button" title="Usuario">
        <Dropdown.Item href="/Login">Inicio Sesion</Dropdown.Item>
        <Dropdown.Item href="/Crear">Agricultor</Dropdown.Item>
        <Dropdown.Item href="/Login1">Inversionista</Dropdown.Item>
        
        </DropdownButton>
      </Container>
    </Navbar>
  );
};

export default Layout;
