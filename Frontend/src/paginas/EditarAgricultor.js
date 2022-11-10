import axios from 'axios';
import e from 'cors';
import React, { useEffect, useState } from 'react'
import { Button, Form } from 'react-bootstrap';
import { useParams } from 'react-router-dom';

const EditarAgricultor = () => {
    const [agricultor, setAgricultor] = useState({
        nombres: '',
        apellidos: '',
        correo: '',
        agremiacion: '',
        matriculai: '',
        rut: ''
        
    });

    console.log(agricultor)

    function handleInputChange(e) {
      setAgricultor({
          [e.target.name]: e.target.value
        })
    }
    
    let { id } = useParams();

    useEffect(() => {
      console.log(id); 

      let url = 'http://localhost:4000/agricultor/' + id;
      console.log(id);
      axios.get(url)
      .then(res => {console.log(res)
        const agricultor = res.data;
        setAgricultor(res.data);
         console.log(agricultor) 
         console.log(agricultor.nombres)
         
          
      });
    },[])
    
    function handleSubmit(event){
      event.preventDefault()
      
  }
    return(
        <div>
        <Form >
        <label htmlFor="nombres">Nombres:</label>  
          <input type="text" name= "nombres" 
          value={agricultor.nombres} 
          onChange={handleInputChange}
        />
        <label htmlFor="apellidos">Apellidos:</label>  
          <input type="text" name= "apellidos" 
          value={agricultor.apellidos} 
          onChange={handleInputChange}
        />
        <label htmlFor="correo">correo:</label>  
          <input type="text" name= "correo" 
          value={agricultor.correo} 
          onChange={handleInputChange}
        />
        <label htmlFor="agremiacion">Agremiacion:</label>  
          <input type="text" name= "agremiacion" 
          value={agricultor.agremiacion} 
          onChange={handleInputChange}
        />
        <label htmlFor="matriculai">Matriculai:</label>  
          <input type="text" name= "matriculai" 
          value={agricultor.matriculai} 
          onChange={handleInputChange}
        />
        <label htmlFor="rut">Rut:</label>  
          <input type="text" name= "rut" 
          value={agricultor.rut} 
          onChange={handleInputChange}
        /> 

        <Button type="submit" className="btn btn-primary">
          Modificar
        </Button>

     </Form> 

        </div>
      )
  
} 


export default EditarAgricultor
