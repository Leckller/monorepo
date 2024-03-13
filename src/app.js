const express = require("express");
const app = express();
const routes = require("./controller");
const midds = require("./middlewares");
const cors = require("cors");

app.use(express.json());
app.use(cors());

app.use("/users", routes.users);
app.use("/login", routes.login);

app.use(midds.validToken);
app.use("/tasks", routes.tasks);

module.exports = app;