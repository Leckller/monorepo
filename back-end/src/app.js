const express = require('express');
const cors = require('cors');

const taskRouter = require('./routes/tasks');
const addTaskRouter = require('./routes/addTask');
const app = express();

app.use(express.json());
app.use(cors());

app.use('/tasks', taskRouter);
app.use('/addTask', addTaskRouter);

module.exports = app;