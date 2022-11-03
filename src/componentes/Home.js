import '../css/estilos.css'
import { Link } from "react-router-dom";
import {Form, Button} from 'react-bootstrap';


const Home = () =>{
  return(
    <div className='contenedor'>
      <Form >
        <div className='contenedor-input'>
          <label htmlFor="email">Email  </label>
          <input
            id="email"
            name="email"
            type="email"
          />  
        </div>
        <div className='contenedor-input'>  
            <label htmlFor="password">Password</label>
            <input
              id="password"
              name="password"
              type="password"
            />
          </div>  
          <div>
            <Button type="submit">INGRESAR</Button>
          </div>
          <div>
            <Link to="/Crear">Registrate</Link>
          </div>
      </Form>
    </div>  
  );
 }
 
 export default Home;

