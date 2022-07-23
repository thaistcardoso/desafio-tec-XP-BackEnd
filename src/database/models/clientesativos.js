 const ClientesAtivosSchema = (sequelize, DataTypes) => {
  const ClientesAtivoTable = sequelize.define('ClientesAtivo', {
    codCliente: DataTypes.INTEGER,
    codAtivo: DataTypes.INTEGER,
    qtdeAtivos: DataTypes.INTEGER,
  }, { timestamps: false, tableName: 'clientesAtivos' });
    
    ClientesAtivoTable.associate = (models) => {
      models.BlogPost.belongsToMany(models.Clientes, {
        as: 'clientes',
        through: ClientesAtivoTable,
        foreignKey: 'codAtivo',
        otherKey: 'codClient',
      });
      models.Category.belongsToMany(models.Ativos, {
        as: 'ativos',
        through: ClientesAtivoTable,
        foreignKey: 'codClient',
        otherKey: 'codAtivo',
      });
    };
      
  return ClientesAtivoTable;
};

module.exports = ClientesAtivosSchema;