const express = require("express");
const router = express.Router();
const inversionistaController = require("../controlador/inversionista.controller");

router.post("/", inversionistaController.create)


module.exports = router