import axios from 'axios';
import React from 'react';
import {  NavLink, useParams,} from "react-router-dom";

const EliminarProducto = () => {
    let { id } = useParams();

    console.log(id);

    let url = 'http://localhost:4000/producto/' + id;
    console.log(id);
    axios.delete(url).then(res => {console.log(url)
    this.setState({ status: true});
console.log("Eliminado")
});

return <div className='division' style={{ fontSize: "50px" }}>
<h2>Registro Eliminado </h2>
<NavLink to="/HomeAgricultor/verProducto" className="btn btn-light">Volver</NavLink>&nbsp;&nbsp;&nbsp;&nbsp;
</div>;


}

export default EliminarProducto