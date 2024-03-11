const express = require("express");
const app = express();
const routes = require("./routes");

app.use(express.json());

app.use("/tasks", routes.tasks);
app.use("/users", routes.users);

module.exports = app;