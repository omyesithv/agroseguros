import React from 'react';
import ReactDom from 'react-dom/client';
import {BrowserRouter as  Router } from "react-router-dom";
import App from './App'; 

const express = require('express');
const mongoose = require('mongoose');
require("dotenv").config();


const root = ReactDom.createRoot(document.getElementById('root'));


root.render(
    <Router>
       <div>
           <App />
       </div>        
    </Router>,
    //document.getElementById("root")
    );