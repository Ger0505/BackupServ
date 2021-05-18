let express = require("express");
let router = express.Router();
let empresaController = require("../controllers/empresa.controller");

router.get("/", empresaController.findAll);
router.post("/insert", empresaController.create);

module.exports = router;
