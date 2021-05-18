module.exports = (sequelize, Sequelize) => {
    const Usuario = sequelize.define("usuario", {
        id: { type: Sequelize.STRING, allowNull: false, primaryKey: true },
        nombre: { type: Sequelize.STRING, allowNull: false },
        apellidos: { type: Sequelize.STRING, allowNull: false },
        telefono: { type: Sequelize.BIGINT, allowNull: false },
        direccion: { type: Sequelize.STRING, allowNull: false },
        correo: { type: Sequelize.STRING, allowNull: false },
        password: { type: Sequelize.STRING, allowNull: true }
    },{
        createdAt: false,
        updatedAt: false
    });

    return Usuario;
};