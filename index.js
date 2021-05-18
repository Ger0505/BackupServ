const express = require("express");
const cors = require("cors");

let usuRouter = require('./routes/usuario.route')
let empRouter = require('./routes/empresa.route')
let repRouter = require('./routes/repartidor.route')
let pedRouter = require('./routes/pedido.route')

const app = express();

app.use(cors())
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
    res.json({ msg: "Backup de Servicios" });
});

app.use("/usu", usuRouter);
app.use("/emp", empRouter);
app.use("/rep", repRouter);
app.use("/ped", pedRouter);

const PORT = process.env.PORT || 3003;

app.listen(PORT);


const db = require("./models");

app.get("/destroy", (req, res) => {
    db.sequelize.sync({ force: true })
    .then(() => res.status(200).json({message: "BD reiniciada"}))
    .catch(err => console.log(err))
});

