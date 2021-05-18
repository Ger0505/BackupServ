const dbConfig = require("../config/db");
const Sequelize = require("sequelize");
const sequelize = new Sequelize(dbConfig.DB, dbConfig.USER, dbConfig.PASSWORD,{
    host: dbConfig.HOST,
    dialect: dbConfig.dialect,
    operatorsAliases: false,
    dialectOptions: {
      ssl: {
          require: true,
          rejectUnauthorized: false
      }
    },
    pool: { 
      max: dbConfig.pool.max,
      min: dbConfig.pool.min,
      acquire: dbConfig.pool.acquire,
      idle: dbConfig.pool.idle 
    }
});

const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;
db.usuario = require("./usuario")(sequelize, Sequelize);
db.empresa = require("./empresa")(sequelize, Sequelize);
db.repartidor = require("./repartidor")(sequelize, Sequelize);
db.pedido = require("./pedido")(sequelize, Sequelize);

module.exports = db;