const db = require("../models");
const Repartidor = db.repartidor;
const Op = db.Sequelize.Op;

exports.create = (req, res) => {
    const rep = {
        id: req.body._id,
        usuario: req.body.usuario,
        empresa: req.body.empresa
    };

    Repartidor.create(rep)
        .then(data => res.send(data))
        .catch(err => res.status(500).send({ message: err.message || "Ocurrio un error al guardar en base de datos." }));
};

exports.findAll = (req, res) => {
    Repartidor.findAll({})
        .then(data => res.send(data))
        .catch(err => res.status(500).send({ message: err.message || "Ocurrio un error al consultar la base de datos." }));
};