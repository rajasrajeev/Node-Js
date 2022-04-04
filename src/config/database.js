const dotenv = require('dotenv');
dotenv.config();

const config = {
  default: {
    username: process.env.DB_USERNAME ,
    password: process.env.DB_PASSWORD ,
    dialect: process.env.DB_DIALECT ,
    database: process.env.DB_NAME ,
    host: process.env.DB_HOST ,
  },
  development: {
    extend: 'default',
    database: process.env.DB_NAME ,
  },
  test: {
    extend: 'default',
    database: 'this-testing',
  },
  production: {
    extend: 'default',
    use_env_variable: 'DATABASE_URL',
  },
};

Object.keys(config).forEach((configKey) => {
  const configValue = config[configKey];
  if (configValue.extend) {
    config[configKey] = { ...config[configValue.extend], ...configValue };
  }
});

module.exports = config;
