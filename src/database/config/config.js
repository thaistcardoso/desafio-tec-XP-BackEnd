require('dotenv').config();

module.exports = {
  development: {
    username: process.env.DATABASE_USER,
    password: process.env.DATABASE_PASSWORD,
    database: 'database_development',
    host: process.env.HOSTNAME,
    dialect: 'mysql',
  },
  test: {
    username: process.env.DATABASE_USER,
    password: process.env.DATABASE,
    database: 'database_test',
    host: process.env.HOSTNAME,
    dialect: 'mysql',
  },
  production: {
    username: process.env.DATABASE,
    password: process.env.DATABASE,
    database: 'database_production',
    host: process.env.HOSTNAME,
    dialect: 'mysql',
  },
};
