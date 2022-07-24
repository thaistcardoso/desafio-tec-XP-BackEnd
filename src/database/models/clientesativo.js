 const ClientesAtivosSchema = (sequelize, DataTypes) => {
  const ClienteAtivosTable = sequelize.define('ClienteAtivo', {
    codCliente: DataTypes.INTEGER,
    codAtivo: DataTypes.INTEGER,
    qtdeAtivos: DataTypes.INTEGER,
  }, { timestamps: false, tableName: 'clientesAtivos' });
    
    ClienteAtivosTable.associate = models => {
      models.Ativo.belongsToMany(models.Cliente, {
        as: 'Clientes',
        through: ClienteAtivosTable,
        foreignKey: 'codCliente',
        otherKey: 'codAtivo',
      });
      models.Cliente.belongsToMany(models.Ativo, {
        as: 'Ativos',
        through: ClienteAtivosTable,
        foreignKey: 'codAtivo',
        otherKey: 'codCliente',
      });
    };
      
  return ClienteAtivosTable;
};

module.exports = ClientesAtivosSchema;