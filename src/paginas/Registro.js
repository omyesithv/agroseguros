import React from 'react';

const Registro = () =>{
    const [values, setValues] = React.useState
    ({
        nombre: "",
        apellido: "",
        telefono: "",
        direccion: "",
    });
    
    function handleSubmit(evt) 
    {
     /*
     Previene el comportamiento default de los
     formularios el cual recarga el sitio
     */
     evt.preventDefault();
        // Aquí puedes usar values para enviar la información
        alert("Registro Guardado");
    }

    function handleChange(evt) 
    {
      /*
       evt.target es el elemento que ejecuto el evento
       name identifica el input y value describe el valor actual
      */
       const { target } = evt;
       const { name, value } = target;
       console.log(evt.target.value)

      /*
        Este snippet:
        1. Clona el estado actual
        2. Reemplaza solo el valor del
        input que ejecutó el evento
        */
        const newValues = {
          ...values,
          [name]: value,
        };
        // Sincroniza el estado de nuevo
        setValues(newValues);
    }

    return (
        <form onSubmit={handleSubmit}>
        <div className='contenedor-input'>
          <label htmlFor="nombre">Nombre</label>
          <input id="nombre" name="nombre" type="nombre"
          value={values.nombre}
          onChange={handleChange}
        />
        </div>

        <div className='contenedor-input'>
           <label htmlFor="apellido">Apellido</label>
           <input id="apellido" name="apellido" type="apellido"
           value={values.apellido}
           onChange={handleChange}
          />
        </div>

        <div className='contenedor-input'>
        <label htmlFor="telefono">Telefono</label>
        <input id="telefono" name="telefono" type="telefono"
         value={values.telefono}
         onChange={handleChange}
        />
        </div>

          <div className='contenedor-input'>
          <label htmlFor="direccion">Direccion</label>
          <input id="direccion" name="direccion" type="direccion"
          value={values.direccion}
          onChange={handleChange}
          />
        </div>

        <button type="submit">Guardar</button>

        </form>
    );
}
   
export default Registro;
   