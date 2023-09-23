const Sequelize = require("sequelize");

const sequelize = new Sequelize(
  process.env.DB_Schema,
  process.env.DB_User,
  process.env.DB_password,
  {
    dialect: "mysql",
    host: "localhost",
    port: process.env.DB_Port,
  }
);

module.exports = sequelize;
