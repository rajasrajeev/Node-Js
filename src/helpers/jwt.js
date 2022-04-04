'use-strict';

const jwt = require('jsonwebtoken');

const { JWT_DURATION } = require('../constants');

module.exports = {
  name: 'jwt',
  generate: (userId, ) => {
    const payload = {
      id: userId
    };
    return jwt.sign(payload, process.env.SECRET_KEY || 'habbitol_dev', {
      expiresIn: JWT_DURATION,
    });
  },
  decode: (token) => {
    try {
      return jwt.verify(token, process.env.SECRET_KEY || 'habbitol_dev');
    } catch (error) {
      return null;
    }
  },
};
