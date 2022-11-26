import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Button, Form } from 'react-bootstrap';
import { Link, useParams } from 'react-router-dom';
import mialerta from 'sweetalert';

const EditarProducto = () => {
    const [producto, setProducto] = useState({
        producto: '',
        cantidad: '',
        ubicacion: '',
        precio: ''
    });

    console.log(producto)

    function handleInputChange(e) {
        setProducto({
            [e.target.name]: e.target.value
        })
    }

    let { id } = useParams();

    useEffect(() => {
        console.log(id);
        let url = 'http://localhost:4000/producto/' + id;
        axios.get(url)
        .then(res => {console.log(res)
        const producto = res.data;
    setProducto(res.data);
     console.log(producto)
       console.log(producto.producto)
    });
    }, [])

    const MostrarAlerta = () => {
        mialerta({
          title:"Producto",
          text:"Registro Modificado",
          icon: "success",
          button:"Aceptar"
        }).then(res => {
          window.location.replace('/HomeAgricultor/verProducto');
        })
  

}
function handleSubmit(event){
    event.preventDefault()
    console.log(id);
    console.log(producto.nombres)

    const productoActual = {
      
      producto: producto.producto,
      cantidad: producto.cantidad,
      ubicacion: producto.ubicacion,
      precio: producto.precio,


    };

    console.log(productoActual.nombres);
    console.log(producto);

    let url = 'http://localhost:4000/producto/' + id;
    axios.put(url,productoActual)
      .then(res => {console.log(url)
      console.log(res.data);
      console.log("Modificado")
      MostrarAlerta();   
      
       
  });
        
}

return(
    <div>
        <Form onSubmit={handleSubmit} className="division contenedor-principal">
        <label htmlFor="Producto">Producto:</label>  
          <input type="text" name= "producto" 
          value={producto.producto} 
          onChange={handleInputChange}
          className="input"
        />
        <label htmlFor="cantidad">cantidad:</label>  
          <input type="text" name= "cantidad" 
          value={producto.cantidad} 
          onChange={handleInputChange}
          className="input"
        />
        <label htmlFor="ubicacion">Ubicacion:</label>  
          <input type="text" name= "ubicacion" 
          value={producto.ubicacion} 
          onChange={handleInputChange}
          className="input"
        />
        <label htmlFor="precio">Precio:</label>  
          <input type="text" name= "precio" 
          value={producto.precio} 
          onChange={handleInputChange}
          className="input"
        />
        

        <Button type="submit" className="btn btn-primary">
          Modificar
        </Button>
        <Link to={"/mensaje"}></Link>
         
     </Form> 

        </div>
)


}

export default EditarProducto

    




