import axios from 'axios';
import React from "react";
import {  NavLink, useParams,} from "react-router-dom";

const EliminarAgricultor = () =>{
  let { id } = useParams();
  console.log(id); 
  
    //var request =  this.props.id;
    //console.log(request);
    //var request = "/agricultor/" + this.props.id;
    let url = 'http://localhost:4000/agricultor/' + id;
    console.log(id);
    axios.delete(url).then(res => {console.log(url)
        this.setState({ status: true });
    console.log("Eliminado")    
    });

  return <div style={{ fontSize: "50px" }}>
           <h2>Registro Eliminado </h2>
           <NavLink to="/HomeAgricultor/Agricultor" className="btn btn-light">Volver</NavLink>&nbsp;&nbsp;&nbsp;&nbsp;
         </div>;
}
export default EliminarAgricultor

 