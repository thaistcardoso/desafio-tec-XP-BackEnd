const AtivosSchema = (sequelize, DataTypes) => {
  const AtivoTable = sequelize.define('Ativo', {
    codAtivo: {
     type: DataTypes.INTEGER,
     primaryKey: true,
     autoIncrement: true,
    },
    nomeAtivos: DataTypes.STRING,
    qtdeAtivos: DataTypes.INTEGER,
    valor: DataTypes.INTEGER,
  }, { timestamps: false, tableName: 'Ativos' });
    
    AtivoTable.associate = models => {
      AtivoTable.hasMany(models.ClienteAtivo, {
        foreignKey: 'codAtivo',
        as: 'clienteAtivos',
      });
    };
  
  return AtivoTable;
};

module.exports = AtivosSchema;