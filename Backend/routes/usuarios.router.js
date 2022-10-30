const express = require('express');
const router = express.Router();
const usuariosControle = require('../controlador/usuarios.controler');

router.post("/login",usuariosControle.login);

module.exports = router;
