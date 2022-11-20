const express = require('express');
const router = express.Router();
const usuarioControle = require('../controlador/usuario.controler');

router.post("/",usuarioControle.create);
router.post("/login",usuarioControle.login);

module.exports = router;
