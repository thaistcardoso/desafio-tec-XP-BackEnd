const AtivosSchema = (sequelize, DataTypes) => {
  const AtivoTable = sequelize.define('Ativo', {
    codAtivo: {
     type: DataTypes.INTEGER,
     primaryKey: true,
     autoIncrement: true,
    },
    qtdeAtivos: DataTypes.INTEGER,
    valor: DataTypes.INTEGER,
  }, { timestamps: false, tableName: 'Ativos' });
    
    AtivoTable.associate = (models) => {
      AtivoTable.belongsTo(models.Clientes, {
        foreignKey: 'codAtivo',
        as: 'Cliente',
      });
    };
  
  return AtivoTable;
};

module.exports = AtivosSchema;