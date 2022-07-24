const express = require('express');

const controllerLogin = require('./controllers/controllerLogin');
const controllerInvestimentos = require('./controllers/controllerInvestimentos');
const controllerAssets = require('./controllers/controllerAtivos');
const controllerContas = require('./controllers/controllerContas');

const routers = express.Router();

routers.use('/login', controllerLogin);
routers.use('/investimentos', controllerInvestimentos);
routers.use('/assets', controllerAssets);
routers.use('/contas', controllerContas);

module.exports = routers;
