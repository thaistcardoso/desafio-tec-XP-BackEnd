// const { Cliente } = require('../database/models');
const { Ativo } = require('../database/models');
const { ClienteAtivo } = require('../database/models');

const findByIdClient = async (id) => {
    const findClient = await ClienteAtivo.findAll({
        attributes: ['codCliente', 'codAtivo', 'qtdeAtivos'],
        where: { codCliente: id },
    });

    // const findValorAtivo = await Ativo.findAll({

    // });
    return findClient;
};

const findByAssets = async (id) => {
    const findAssets = await Ativo.findByPk(id, {
        attributes: ['codAtivo', 'qtdeAtivos', 'valor'],
    });
    return findAssets;
};

module.exports = { findByIdClient, findByAssets };
