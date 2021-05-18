module.exports = (sequelize, Sequelize) => {
    const Pedido = sequelize.define("pedido", {
        id: { type: Sequelize.STRING, allowNull: false, primaryKey: true },
        fecha: { type: Sequelize.STRING, allowNull: false },
        hora: { type: Sequelize.STRING, allowNull: false },
        tipo: { type: Sequelize.STRING, allowNull: false },
        cantidad: { type: Sequelize.DECIMAL(8,2), allowNull: false },
        precio: { type: Sequelize.DECIMAL(8,2), allowNull: true },
        descripcion: { type: Sequelize.TEXT, allowNull: true },
        empresa: { type: Sequelize.STRING, allowNull: false },
        repartidor: { type: Sequelize.STRING, allowNull: true },
        usuario: { type: Sequelize.STRING, allowNull: false }
    },{
        createdAt: false,
        updatedAt: false
    });

    return Pedido;
};