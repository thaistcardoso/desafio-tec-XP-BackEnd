const express = require('express');

const controllerLogin = require('./controllers/controllerLogin');

const routers = express.Router();

routers.use('/login', controllerLogin);
routers.use('/investimentos', controllerLogin);

module.exports = routers;
