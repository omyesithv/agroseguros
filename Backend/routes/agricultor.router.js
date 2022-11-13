const express = require("express");
const router = express.Router();
const agricultorControler = require("../controlador/agricultor.controler");

router.post("/",agricultorControler.create);
router.get("/",agricultorControler.find);
router.get("/:id",agricultorControler.findOne);
router.put("/:id",agricultorControler.update);
router.delete("/:id",agricultorControler.remove);
router.post("/login",agricultorControler.login);


module.exports = router;


