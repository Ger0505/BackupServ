let express = require("express");
let router = express.Router();
let repartidorController = require("../controllers/repartidor.controller");

router.get("/", repartidorController.findAll);
router.post("/insert", repartidorController.create);

module.exports = router;
