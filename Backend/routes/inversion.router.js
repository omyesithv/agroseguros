const express = require("express");
const router = express.Router();
const inversionController= require("../controlador/inversion.controller");

router.post("/create", inversionController.create);
router.get('/obtener',inversionController.find)


module.exports = router