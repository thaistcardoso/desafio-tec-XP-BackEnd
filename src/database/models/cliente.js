const ClientesSchema = (sequelize, DataTypes) => {
  const ClienteTable = sequelize.define('Cliente', {
    codCliente: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    nome: DataTypes.STRING,
    cpf: DataTypes.STRING,
    email: DataTypes.STRING,
    password: DataTypes.INTEGER,
    saldo: DataTypes.DECIMAL,
  }, { timeStamps: false, tableName: 'Clientes' });
  
  ClienteTable.associate = models => {
    ClienteTable.hasMany(models.ClienteAtivo, {
      foreignKey: 'codClient',
      as: 'clienteAtivos',
    });
  };
   
  return ClienteTable;
};

module.exports = ClientesSchema;