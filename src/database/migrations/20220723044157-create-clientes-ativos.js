'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('ClientesAtivos', {
      codCliente: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        references: {
          model: 'Clientes',
          key: 'codCliente',
        },
      },
      codAtivo: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        references: {
          model: 'Ativos',
          key: 'codAtivo',
        },
      },
      qtdeAtivos: {
        type: Sequelize.INTEGER,
      },
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('ClientesAtivos');
  },
};