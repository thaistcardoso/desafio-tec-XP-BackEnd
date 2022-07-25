const express = require('express');

const router = express.Router();

const servicesContas = require('../services/servicesContas');

router.get('/:id', async (req, res) => {
    const { id } = req.params;
    const getSaldoCliente = await servicesContas.findSaldoClient(id);
    res.status(200).json(getSaldoCliente);
});

router.post('/saque', async (req, res) => {
    const saqueValor = await servicesContas.updateSaqueCliente(req.body);
    res.status(201).json(saqueValor);
});

router.post('/deposito', async (req, res) => {
    const depositoValor = await servicesContas.upDepositoCliente(req.body);
    res.status(201).json(depositoValor);
});

module.exports = router;