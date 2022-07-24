const express = require('express');

const router = express.Router();

const servicesInvestimentos = require('../services/servicesInvestimentos');

router.post('/comprar', async (req, res) => {
  const updtCompra = await servicesInvestimentos.updateCliente(req.body);
  res.status(201).json(updtCompra);
});

module.exports = router;
