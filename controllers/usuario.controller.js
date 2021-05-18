const db = require("../models");
const Usuario = db.usuario;
const Op = db.Sequelize.Op;

//Crear y guardar nuevo Lhioerp
exports.create = (req, res) => {
    const usuario = {
        id: req.body._id,
        nombre: req.body.nombre,
        apellidos: req.body.apellidos,
        telefono: req.body.telefono,
        direccion: req.body.direccion,
        correo: req.body.correo,
        password: req.body.password ? req.body.password: null
    };
    //Guardar lhioerp en la base de datos 
    Usuario.create(usuario)
        .then(data => res.send(data))
        .catch(err => res.status(500).send({ message: err.message || "Ocurrio un error al guardar en base de datos." }));
};

//Recuperar Lhioerp desde la base de datos.
exports.findAll = (req, res) => {
    Usuario.findAll({})
        .then(data => res.send(data))
        .catch(err => res.status(500).send({ message: err.message || "Ocurrio un error al consultar la base de datos." }));
};