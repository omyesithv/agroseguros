const express = require("express")
const router = express.Router()
const inversionistaController = require("../controlador/inversionista.controller");

router.post("/", inversionistaController.create);
router.get("/",inversionistaController.find);
 router.get("/:id",inversionistaController.findOne);
// router.put("/:id",agricultorControler.update);
// router.delete("/:id",agricultorControler.remove);
 router.post("/login",inversionistaController.login);


module.exports = router