module.exports = {
  up: async (queryInterface, _Sequelize) => {
    await queryInterface.bulkInsert('Clientes',
      [{
        codCliente: 1,
        nome: 'Eddie Vedder',
        cpf: '003.125.884-47',
        email: 'EddieV@gmail.com',
        password: 12345678,
        saldo: 9000.5,
      },
      {
      codCliente: 2,
      nome: 'Jhon Frusciante',
      cpf: '014.569.879-54',
      email: 'FJhon@gmail.com',
      password: 12345678,
      saldo: 5000.5,
    },
    ], { timestamps: false });
},

down: async (queryInterface, _Sequelize) => {
    await queryInterface.bulkDelete('Clientes', null, {});
  },
};
