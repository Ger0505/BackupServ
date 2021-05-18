module.exports = (sequelize, Sequelize) => {
    const Repartidor = sequelize.define("repartidor", {
        id: { type: Sequelize.STRING, allowNull: false, primaryKey: true },
        usuario: { type: Sequelize.STRING, allowNull: false },
        empresa: { type: Sequelize.STRING, allowNull: false }
    },{
        createdAt: false,
        updatedAt: false
    });

    return Repartidor;
};