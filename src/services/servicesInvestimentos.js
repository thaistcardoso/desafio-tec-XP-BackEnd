/* eslint-disable max-lines-per-function */
const { Cliente } = require('../database/models');
const { Ativo } = require('../database/models');
const { ClienteAtivo } = require('../database/models');

async function searchByClientandcodAtivo(codCliente, codAtivo) {
    const searchQtdAtivos = await ClienteAtivo.findOne({
        attributes: ['qtdeAtivos'],
        where: { codCliente, codAtivo },
    });
    // if (!searchQtdAtivos) {
    //     const error = new Error('Cliente e Ativo relacionado não existem.');
    //     error.status = 409;
    //     throw error;
    // }
    return searchQtdAtivos;
}

async function searchByCodAtivo(codAtivo) {
    const searchValorAndAtivo = await Ativo.findOne({
        attributes: ['qtdeAtivos', 'valor'],
        where: { codAtivo },
    });
    // if (!searchValorAndAtivo) {
    //     const error = new Error('CodAtivo não encontrado.');
    //     error.status = 409;
    //     throw error;
    // }
    return searchValorAndAtivo;
}

async function searchCodCliend(codCliente) {
    const searchClientSaldo = await Cliente.findOne({
        attributes: ['saldo'],
        where: { codCliente },
    });
    // if (!searchClientSaldo) {
    //     const error = new Error('CodCliente não encontrado.');
    //     error.status = 409;
    //     throw error;
    // }
    return searchClientSaldo;
}

// eslint-disable-next-line sonarjs/cognitive-complexity
const updateCliente = async ({ codCliente, codAtivo, qtdeAtivos }) => {
    const qtdAtivoBuy = await searchByClientandcodAtivo(codCliente, codAtivo);
  
    if (qtdAtivoBuy === 0) {
        await ClienteAtivo.update({ qtdeAtivos: qtdAtivoBuy }, {
            where: { codCliente },
        });
    } else {
        const ativoBuy = Number(qtdeAtivos) + Number(qtdAtivoBuy);
        await ClienteAtivo.update({ qtdeAtivos: ativoBuy }, {
            where: { codCliente },
        });
    }

    const qtdAtivoSell = await searchByCodAtivo(codAtivo);

    if (qtdAtivoSell.qtdeAtivos > qtdeAtivos) {
        const updtQtdAtivos = Number(qtdAtivoSell.qtdeAtivos) - Number(qtdeAtivos);
        await Ativo.update({ qtdeAtivos: updtQtdAtivos }, {
            where: { codAtivo },
        });
    } else { 
        const error = new Error('Erro ao concluir a venda. quantidade de ativos insuficientes.');
        error.status = 409;
        throw error;
    }

    const saldo = await searchCodCliend(codCliente);
    
    if (saldo > 0 && saldo > qtdAtivoSell.valor) {
        const somaSaldo = Number(saldo) + Number(qtdAtivoSell.valor);
        await Cliente.update({ saldo: somaSaldo }, {
            where: { codCliente },
        });
    } else {
        const error = new Error('Erro ao concluir a venda. não há saldo suficiente em conta.');
        error.status = 409;
        throw error;
    }
};

const updateVenda = async ({ codCliente, codAtivo, qtdeAtivos }) => {
    const qtdAtivoSelling = await searchByClientandcodAtivo(codCliente, codAtivo);

    if (qtdAtivoSelling !== 0 && qtdAtivoSelling < qtdeAtivos) {
        const ativosSellupdt = Number(qtdeAtivos) - Number(qtdAtivoSelling);
        await ClienteAtivo.update({ qtdeAtivos: ativosSellupdt }, {
            where: { codCliente },
        });
    } else {
        const error = new Error('Erro ao concluir a venda. Não há Ativos suficiente na carteira.');
        error.status = 409;
        throw error;
    }    
};

module.exports = { updateCliente, updateVenda };

    // Tabela de clienteAtivo - buscar codcliente e codAtivo para: 
    // validar se ele possui ação na tabela clienteAtivo se sim acrescenta qtdeAtivo 
    // senao adiciona qtdeAtivo

    // buscar codCliente - retornando saldo
    // buscar valor ativo unitatio * qtdeAtivo - salvar resultado no saldo ou acrescer;