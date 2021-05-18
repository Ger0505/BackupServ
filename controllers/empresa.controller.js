const db = require("../models");
const Empresa = db.empresa;
const Op = db.Sequelize.Op;

exports.create = (req, res) => {
    const empresa = {
        id: req.body._id,
        nombre: req.body.nombre,
        logo: req.body.logo,
        descripcion: req.body.descripcion,
        correo: req.body.correo,
        direccion: req.body.direccion,
        telefono: req.body.telefono,
        password: req.body.password,
        tipo: req.body.tipo
    };

    Empresa.create(empresa)
        .then(data => res.send(data))
        .catch(err => res.status(500).send({ message: err.message || "Ocurrio un error al guardar en base de datos." }));
};

exports.findAll = (req, res) => {
    Empresa.findAll({})
        .then(data => res.send(data))
        .catch(err => res.status(500).send({ message: err.message || "Ocurrio un error al consultar la base de datos." }));
};