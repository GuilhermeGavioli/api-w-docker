require('dotenv/config')


module.exports = {
  development: {
    username: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_DATABASE,
    host: process.env.DB_HOST,
    // port: 3307,
    dialect: process.env.DB_DIALECT
  },
  test: {
    username: process.env.USER2,
    password: process.env.PASSWORD,
    database: process.env.DATABASE,
    port: process.env.DB_PORT,
    host: process.env.HOST,
    dialect: process.env.DIALECT
  },
  production: {
    username: process.env.USER2,
    password: process.env.PASSWORD,
    database: process.env.DATABASE,
    port: process.env.DB_PORT,
    host: process.env.HOST,
    dialect: process.env.DIALECT
  }
}
