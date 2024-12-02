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

module.exports = { Users, Books, Orders, sequelize };
