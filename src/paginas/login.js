import React, { Component } from "react";
import  {Form, Button } from 'react-bootstrap';
import axios from "axios";

const login=() =>{
  return (
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
    </Form>
  </div>  

);  
}

export default login;