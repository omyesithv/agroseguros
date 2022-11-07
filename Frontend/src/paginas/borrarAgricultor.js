import React, { Component } from 'react';
import axios from 'axios';
//import Global from './../../Global';
import { Navigate, NavLink } from 'react-router-dom';

export default class borrarAgricultor extends Component {

    state = { status: false };

    eliminarAgricultor = () => {
        //var request = "/agricultor/" + this.props.id;
        var url = 'http://localhost:4000/agricultor/' + this.props._id;
        axios.delete(url).then(res => {console.log(url)
            this.setState({ status: true });
        });
    }

    render() {
        if(this.state.status === true){
            return <Navigate to="/Agricultor" />
        }
        return (
            <div>
                <br />
                <h1 style={{color: "red"}}>¿Desea eliminar el agricultor {this.props.id}?</h1><br />
                <NavLink to="/Agricultor" className="btn btn-light">Cancelar</NavLink>&nbsp;&nbsp;&nbsp;&nbsp;
                <button onClick={this.eliminarAgricultor} className="btn btn-danger">Eliminar</button>
            </div>
        )
    }
}