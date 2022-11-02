import '../css/estilos.css'
import { Link } from "react-router-dom";

const Home = () =>{
  return(
    <div className='contenedor'>
      <form >
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
            <button type="submit">INGRESAR</button>
          </div>
          <div>
            <Link to="/Registro">Registrate</Link>
          </div>
      </form>
    </div>  
  );
 }
 
 export default Home;

