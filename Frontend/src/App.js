import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Menu from  './componentes/Menu';
import Header from './componentes/header';
import ContextoUsuario, { UserProvider } from './componentes/context/ContextoUsuario';

function App() {
  


  return (
    <div className="App">
       <UserProvider>
         <Header />
         <Menu/>  
        </UserProvider>
    </div>
  );
}

export default App;
