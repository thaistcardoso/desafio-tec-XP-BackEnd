const { Cliente } = require('../database/models');
// const { Ativo } = require('../database/models');
// const { ClienteAtivo } = require('../database/models');

const findSaldoClient = async (id) => {
    const saldoCliente = await Cliente.findByPk(id, {
        attributes: ['codCliente', 'saldo'],
    });
    return saldoCliente;
};

module.exports = { findSaldoClient };
