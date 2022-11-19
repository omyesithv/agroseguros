const express = require("express");
const router = express.Router();
const ofertaController = require("../controlador/oferta.controller");

router.post("/create", ofertaController.create);
router.get('/obtener',ofertaController.find)


module.exports = router