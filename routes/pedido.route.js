let express = require("express");
let router = express.Router();
let pedidoController = require("../controllers/pedido.controller");

router.get("/", pedidoController.findAll);
router.post("/insert", pedidoController.create);

module.exports = router;
