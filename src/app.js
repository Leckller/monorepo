const express = require("express");
const app = express();
const routes = require("./controller");
const midds = require("./middlewares");

app.use(express.json());

app.use("/users", routes.users);
app.use(midds.validToken);
app.use("/tasks", routes.tasks);


module.exports = app;