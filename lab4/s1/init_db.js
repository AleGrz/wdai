const { Sequelize } = require("sequelize");

var sequelize = new Sequelize("test", "root", "", {
  host: "localhost",
  dialect: "sqlite",
  operatorsAliases: false,
  storage: "db.sqlite",
});

var Books = sequelize.define("books", {
  title: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  author: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  release_date: {
    type: Sequelize.DATEONLY,
  },
});

module.exports = { Books, sequelize };
