/* eslint-disable max-lines-per-function */
const { Cliente } = require('../database/models');
const { Ativo } = require('../database/models');
const { ClientesAtivo } = require('../database/models');

async function searchByClientandcodAtivo(codCliente, codAtivo) {
    await ClientesAtivo.findOne({
        attributes: ['qtdeAtivo'],
        where: { codCliente, codAtivo },
    });
}

async function searchByCodAtivo(codAtivo) {
    await Ativo.findOne({
        attributes: ['qtdeAtivo', 'valor'],
        where: { codAtivo },
    });
}

const updateCliente = async ({ codCliente, codAtivo, qtdeAtivo }) => {
    const qtdAtivoBuy = await searchByClientandcodAtivo(codCliente, codAtivo);

    if (qtdAtivoBuy === 0) {
        await ClientesAtivo.update({ qtdeAtivo: qtdAtivoBuy }, {
            where: { codCliente },
        });
    } else {
        const ativoBuy = qtdeAtivo + qtdAtivoBuy;
        await ClientesAtivo.update({ qtdeAtivo: ativoBuy }, {
            where: { codCliente },
        });
    }

    const qtdAtivoSell = await searchByCodAtivo(codAtivo);

    if (qtdAtivoSell > qtdeAtivo) {
        await Ativo.update({ qtdeAtivo: qtdAtivoSell }, {
            where: { codAtivo },
        });
    } else { 
        const error = new Error('Erro ao concluir a venda. quantidade de ativos insuficientes.');
        error.status = 409;
        throw error;
    }

    const saldo = await Cliente.findOne({
        attributes: ['saldo'],
        where: { codCliente },
    });


};

exports.modules = updateCliente;

    // Tabela de clienteAtivo - buscar codcliente e codAtivo para: 
    // validar se ele possui ação na tabela clienteAtivo se sim acrescenta qtdeAtivo 
    // senao adiciona qtdeAtivo

    // buscar codCliente - retornando saldo
    // buscar valor ativo unitatio * qtdeAtivo - salvar resultado no saldo ou acrescer;