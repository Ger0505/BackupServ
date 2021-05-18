const db = require("../models");
const Pedido = db.pedido;
const Op = db.Sequelize.Op;

exports.create = (req, res) => {
    const ped = {
        id: req.body._id,
        fecha: req.body.fecha,
        hora: req.body.hora,
        tipo: req.body.tipo,
        cantidad: req.body.cantidad,
        precio: req.body.precio ? req.body.precio : null,
        descripcion: req.body.descripcion ? req.body.descripcion : null,
        empresa: req.body.empresa,
        repartidor: req.body.repartidor ? req.body.repartidor : null,
        usuario: req.body.usuario,

    };

    Pedido.create(ped)
        .then(data => res.send(data))
        .catch(err => res.status(500).send({ message: err.message || "Ocurrio un error al guardar en base de datos." }));
};

exports.findAll = (req, res) => {
    Pedido.findAll({})
        .then(data => res.send(data))
        .catch(err => res.status(500).send({ message: err.message || "Ocurrio un error al consultar la base de datos." }));
};