let express = require("express");
let router = express.Router();
let usuarioController = require("../controllers/usuario.controller");

router.get("/", usuarioController.findAll);
router.post("/insert", usuarioController.create);

module.exports = router;
