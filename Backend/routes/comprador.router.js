const express = require("express");
const router = express.Router();
const compradorController = require("../controlador/comprador.controller");

router.post("/create",compradorController.create);

module.exports = router;
