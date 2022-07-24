const { Cliente } = require('../database/models');
const { generateJWToken } = require('../utils/jwt');

const authenticate = async ({ email, password }) => {
    if (!email || !password) {
        const error = new Error('Some required fields are missing');
         error.status = 400;
         throw error;
    }

    const user = await Cliente.findOne({
        attributes: ['nome', 'cpf', 'email', 'codAtivo', 'saldo'],
        where: { email, password },
    });

    if (!user) {
        const error = new Error('Invalid fields');
        error.status = 400;
        throw error;
    }

    const token = generateJWToken(user.dataValues);
    
    return { token };
};

module.exports = { authenticate };