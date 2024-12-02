const { Sequelize } = require("sequelize");

var sequelize = new Sequelize("test", "root", "", {
  host: "localhost",
  dialect: "sqlite",
  operatorsAliases: false,
  storage: "db.sqlite",
});

var Users = sequelize.define("users", {
  email: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  password: {
    type: Sequelize.STRING,
    allowNull: false,
  },
});

module.exports = { Users, sequelize };
