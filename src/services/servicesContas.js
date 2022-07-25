const { Cliente } = require('../database/models');
// const { Ativo } = require('../database/models');
// const { ClienteAtivo } = require('../database/models');

const findSaldoClient = async (id) => {
    const saldoCliente = await Cliente.findByPk(id, {
        attributes: ['codCliente', 'saldo'],
    });
    return saldoCliente;
};

const updateSaqueCliente = async ({ codCliente, valor }) => {
    const { saldo } = await Cliente.findOne({
        attributes: ['saldo'], 
        where: { codCliente },
    });
    if (valor < saldo) {
        const newSaldo = Number(saldo) - Number(valor);
         await Cliente.update({ saldo: newSaldo },
            { where: { codCliente } });
     } else {
        const error = new Error('saldo insuficiente para saque.');
        error.status = 409;
        throw error;
    }
};

const upDepositoCliente = async ({ codCliente, valor }) => {
    const { saldo } = await Cliente.findOne({
        attributes: ['saldo'],
        where: { codCliente },
    });
    if (valor < 0) {
        const error = new Error('saldo insuficiente para saque.');
        error.status = 409;
        throw error; 
    } else {
        const novoSaldo = Number(saldo) + Number(valor);
        await Cliente.update({ saldo: novoSaldo }, 
            { where: { codCliente } });
    }
};

module.exports = { findSaldoClient, updateSaqueCliente, upDepositoCliente };

// achar cliente 
// validar que saque n pode > que saldo