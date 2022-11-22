const express = require("express");
const router = express.Router();
const agricultoresControler = require("../controlador/agricultor.controler");

router.post("/",agricultoresControler.create);
router.get("/",agricultoresControler.find);
router.get("/:id",agricultoresControler.findOne);
router.put("/:id",agricultoresControler.update);
router.delete("/:id",agricultoresControler.remove);
router.post("/login",agricultoresControler.login);


module.exports = router;


