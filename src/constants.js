// RegEx
const EMAIL_REGEX = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;

// JSON Web Token stuff
const JWT_DURATION = parseInt(process.env.JWT_DURATION || 86400, 10); // in seconds

// User stuff
const PASSWORD_SALT = 10;

module.exports = { EMAIL_REGEX, JWT_DURATION, PASSWORD_SALT };
