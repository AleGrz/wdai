var createError = require("http-errors");
var express = require("express");
var path = require("path");
var cookieParser = require("cookie-parser");
var logger = require("morgan");

var booksRouter = require("./routes/books");
var ordersRouter = require("./routes/orders");
var usersRouter = require("./routes/users");
var models = require("./init_db");

var app = express();
(async () => {
  try {
    await models.sequelize.sync({ force: true });
    console.log("Database synchronized");
    await seedData();
  } catch (error) {
    console.error("Database synchronization error:", error);
    process.exit(1);
  }
})();
// view engine setup
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "jade");

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));

app.use("/api/books", booksRouter);
app.use("/api/orders", ordersRouter);
app.use("/api", usersRouter);

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get("env") === "development" ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render("error");
});

async function seedData() {
  try {
    await models.Users.destroy({ where: {} });
    await models.Books.destroy({ where: {} });
    await models.Orders.destroy({ where: {} });
    await models.Users.create({ email: "a@test.pl", password: "password" });
    await models.Users.create({ email: "b@test.pl", password: "password2" });
    await models.Books.create({
      title: "Book1",
      release_date: "2021-01-01",
      author: "Author1",
    });
    await models.Books.create({
      title: "Book2",
      release_date: "2021-01-02",
      author: "Author2",
    });
    await models.Orders.create({ book_id: 1, count: 5 });
    await models.Orders.create({ book_id: 2, count: 10 });
  } catch (error) {
    console.error("Database error:", error);
  }
}

module.exports = app;
