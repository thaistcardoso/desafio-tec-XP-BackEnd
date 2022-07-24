const express = require('express');

const router = express.Router();

const servicesContas = require('../services/servicesContas');

router.get('/:id', async (req, res) => {
  const { id } = req.params; 
  const getSaldoCliente = await servicesContas.findSaldoClient(id);
  res.status(200).json(getSaldoCliente);
});

module.exports = router;