const jwt = require('jsonwebtoken');

const TOKEN_SECRET = process.env.JWT_SECRET;

const jwtConfig = {
    expiresIn: '1d',
    algorithm: 'HS256',
};

const generateJWToken = ({ codCliente, nome, cpf, email, codAtivo, saldo }) =>
    jwt.sign({ codCliente, nome, cpf, email, codAtivo, saldo }, TOKEN_SECRET, jwtConfig);

const authenticateToken = async (token) => {
    if (!token) {
        const e = new Error('Token not found');
        e.status = 401;
        throw e;
    }

    try {
        const validate = await jwt.verify(token, TOKEN_SECRET);
        return validate;
    } catch (error) {
        console.log('errocatch', error);
        const erro = new Error('Expired or invalid token');
        erro.status = 401;
        throw erro;
    }
};

module.exports = {
    generateJWToken,
    authenticateToken,
};