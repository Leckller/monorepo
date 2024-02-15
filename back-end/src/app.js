const express = require('express');
const cors = require('cors');

const taskRouter = require('./routes/tasks');
const addTaskRouter = require('./routes/addTask');
const deleteTaskRouter = require('./routes/deleteTask');
const app = express();

app.use(express.json());
app.use(cors());

app.use('/tasks', taskRouter);
app.use('/addTask', addTaskRouter);
app.use('/deleteTask', deleteTaskRouter);

module.exports = app;