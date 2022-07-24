module.exports = {
  up: async (queryInterface, _Sequelize) => {
    await queryInterface.bulkInsert('Ativos',
      [{
        codAtivo: 1,
        nomeAtivos: 'PETR4', 
        qtdeAtivos: 1000,
        valor: 30,
      },
      {
        codAtivo: 2,
        nomeAtivos: 'AZUL4', 
        qtdeAtivos: 900,
        valor: 20,
      },
      ], { timestamps: false });
    },
    
    down: async (queryInterface, _Sequelize) => {
        await queryInterface.bulkDelete('Ativos', null, {});
      },
    };
