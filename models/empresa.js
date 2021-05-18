module.exports = (sequelize, Sequelize) => {
    const Empresa = sequelize.define("empresa", {
        id: { type: Sequelize.STRING, allowNull: false, primaryKey: true },
        nombre: { type: Sequelize.STRING, allowNull: false },
        logo: { type: Sequelize.STRING, allowNull: false },
        descripcion: { type: Sequelize.TEXT, allowNull: false },
        correo: { type: Sequelize.STRING, allowNull: false },
        direccion: { type: Sequelize.STRING, allowNull: false },
        telefono: { type: Sequelize.BIGINT, allowNull: false },
        password: { type: Sequelize.STRING, allowNull: true },
        tipo: { type: Sequelize.STRING, allowNull: false }
    },{
        createdAt: false,
        updatedAt: false
    });

    return Empresa;
};