const express = require('express');

const router = express.Router();

const servicesAtivos = require('../services/servicesAtivos');

router.get('/cliente/:id', async (req, res) => {
  const { id } = req.params; 
  const getByCliente = await servicesAtivos.findByIdClient(id);
  res.status(200).json(getByCliente);
});

router.get('/:id', async (req, res) => {
    const { id } = req.params; 
    const getByAtivos = await servicesAtivos.findByAssets(id);
    res.status(200).json(getByAtivos);
  });

module.exports = router;