const express = require("express");
const router = express.Router();
const ofertaController = require("../controlador/oferta.controller");

router.post("/", ofertaController.create)


module.exports = router