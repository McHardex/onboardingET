require('dotenv').config();
module.exports = {
  // if using an online database like elephantSQL
  // development: {
  //   use_ env_variable: 'DATABASE_URL'
  // }
  

  development: {
    username: process.env.DB_USERNAME,
    password: process.env.DB_PASS,
    database: process.env.DEV_DB_NAME,
    host: process.env.DB_HOST,
    dialect: process.env.DB_DIALECT,
    logging: false,
    baseUrl: process.env.BASE_URL,
  },

  test: {
    username: process.env.DB_USERNAME,
    password: process.env.DB_PASS,
    database: process.env.TEST_DB,
    host: process.env.DB_HOST,
    dialect: process.env.DB_DIALECT
  },

  production: {
    username: process.env.DB_USERNAME,
    password: process.env.DB_PASS,
    database: process.env.PROD_DB_URL,
    host: process.env.DB_HOST,
    dialect: process.env.DB_DIALECT,
    baseUrl: process.env.PROD_BASE_URL,
  }
};
