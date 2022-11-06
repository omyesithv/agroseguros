import '../App.css';
import { Outlet, Link } from "react-router-dom";
import { Navbar, Nav, Container } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

const Layout = () =>{
 return (
  <header>
   <nav>
     <ul>
       <li>
         <Navbar.Brand className="navbar-brand-custom">
           <Link to="/" className="edit-link">
             Home
           </Link>
         </Navbar.Brand>
       </li>
       <li>
         <Link to="/inversion" className="nav-link">
           Inversion
         </Link>
       </li>
       <li>
         <Link to="/Agricultor" className="nav-link">
           Agricultor
         </Link>
       </li>
     </ul>
    </nav>
 </header>  
 );
}

export default Layout;
