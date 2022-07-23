module.exports = {
  up: async (queryInterface, _Sequelize) => {
    await queryInterface.bulkInsert('ClientesAtivos',
      [{
        codCliente: 1,
        codAtivo: 1,
        qtdeAtivos: 5,
      },
      {
        codCliente: 1,
        codAtivo: 2,
        qtdeAtivos: 2,
      },
      ], { timestamps: false });
  },

  down: async (queryInterface, _Sequelize) => {
    await queryInterface.bulkDelete('ClientesAtivos', null, {});
  },
};
