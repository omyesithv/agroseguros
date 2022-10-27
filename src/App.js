import { Routes, Route } from 'react-router-dom';
import Layout  from "./paginas/Layout";
import About  from "./paginas/About";
import Home  from "./paginas/Home";
import Registro from './paginas/Registro';
//import Default  from "./pages/Default";
//import Dashboard  from "./pages/Dashboard";
function App() {
  return (
    <div>
      <h1>Menu</h1>
      <Routes>
        <Route path="/" element={<Layout />}>
           <Route path="about" element={<About />} />
           <Route path="registro" element={<Registro />} />
           <Route path="/" element={<Home />} />
         </Route>
      </Routes>
    </div>
  );
}

export default App;