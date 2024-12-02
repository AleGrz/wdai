const { Sequelize } = require("sequelize");

var sequelize = new Sequelize("test", "root", "", {
  host: "localhost",
  dialect: "sqlite",
  operatorsAliases: false,
  storage: "db.sqlite",
});

var Orders = sequelize.define("orders", {
  book_id: {
    type: Sequelize.INTEGER,
    allowNull: false,
  },
  count: {
    type: Sequelize.INTEGER,
    allowNull: false,
  },
});

module.exports = { Orders, sequelize };
