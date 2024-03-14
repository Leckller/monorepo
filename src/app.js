const express = require("express");
const app = express();
const routes = require("./controller");
const midds = require("./middlewares");
const cors = require("cors");
const morgan = require("morgan");

app.use(cors({ origin: "*" }));
app.use(express.json());
app.use(morgan("tiny"));

app.get("/", (_req, res) => {
  res.status(200).json("Im Online!");
});

app.use("/users", routes.users);
app.use("/login", routes.login);

app.use(midds.validToken);
app.use("/tasks", routes.tasks);

module.exports = app;