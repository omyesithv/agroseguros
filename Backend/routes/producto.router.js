const express = require("express");
const router = express.Router();
const productosControler = require("../controlador/producto.controller");

router.post("/",productosControler.create);
router.get("/",productosControler.find);
router.get("/:id",productosControler.findOne);
router.put("/:id",productosControler.update);
router.delete("/:id",productosControler.remove);


module.exports = router;

