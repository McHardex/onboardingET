require('dotenv').config;

module.exports = {
  // if using an online database like elephantSQL
  // development: {
  //   use_ env_variable: 'DATABASE_URL'
  // }

  development: {
    username: 'postgres',
    password: 'h0ttestt',
    database: 'onboarding',
    host: 'localhost',
    dialect: 'postgres'
  },

  test: {
    username: 'postgres',
    password: 'h0ttestt',
    database: 'onboarding_test',
    host: 'localhost',
    dialect: 'postgres'
  },

  production: {
    username: process.env.DB_USER,
    password: process.env.DB_PASS,
    database: process.env.DB_NAME,
    host: process.env.DB_HOST,
    dialect: 'postgres'
  }
};
