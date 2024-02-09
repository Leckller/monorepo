const express = require('express');
const cors = require('cors')

const taskRouter = require('./routes/tasks')
const app = express();

app.use(express.json());
app.use(cors());

app.use('/tasks', taskRouter)

module.exports = app;