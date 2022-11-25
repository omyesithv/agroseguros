const express = require("express");
const router = express.Router();
const inversionController = require("../controlador/inversion.controller");

router.post("/",inversionController.create);
router.get("/",inversionController.find);
router.get("/:id",inversionController.findOne);
router.put("/:id",inversionController.update);
router.delete("/:id",inversionController.remove);



module.exports = router;


