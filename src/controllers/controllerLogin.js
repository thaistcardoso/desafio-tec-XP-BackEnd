const express = require('express');

const authRouter = express.Router();
const { authenticate } = require('../services/servicesLogin');

authRouter.post('/', async (req, res) => {
    const token = await authenticate(req.body);
    return res.status(200).json(token);
});

module.exports = authRouter;