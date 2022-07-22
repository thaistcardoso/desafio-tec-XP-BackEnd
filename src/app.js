require('express-async-errors');

const express = require('express');
const router = require('./router');
// const errorMiddleware = require('./middlewares/error');

const app = express();

app.use(express.json());
app.use(router);
// app.use(errorMiddleware);

module.exports = app;
