'use strict';

const bcrypt = require('bcrypt');

const { PASSWORD_SALT } = require('../constants');
const Sequelize = require('sequelize');

async function buildHash(users) {
  if (users.changed('password')) {
    const salt = await bcrypt.genSalt(PASSWORD_SALT);
    const digest = await bcrypt.hash(users.password, salt);
    users.set('password', digest);
  }
}

module.exports = (sequelize, DataTypes) => {
  const users = sequelize.define('users', {
    email: { // Validate email
      type: DataTypes.STRING,
      allowNull: false,
      unique: {
        msg: 'A user already exists with that email.',
      },
      validate: {
        notEmpty: {
          msg: 'An email is required.',
        },
        isEmail: {
          msg: 'A valid email is required.',
        },
      },
    },
    password: DataTypes.STRING,
  }, { underscored: true,freezeTableName: true, });

  users.associate = (models) => {
    // associations can be defined here
    // food_master.belongsTo(models.food_nutrition_master, { as: 'nutrition', foreignKey: 'id' , targetKey: 'food_id'});
    // users.belongsTo(models.patient_profile, { as: 'patient', foreignKey: 'id' , targetKey: 'user_id'});
    // users.belongsTo(models.doctors_profile, { as: 'doctor', foreignKey: 'id' , targetKey: 'user_id'});
  };

  // Pre-build hooks
  users.beforeCreate(buildHash);
  users.beforeUpdate(buildHash);

  // Check password for specific user
  users.prototype.checkPassword = function checkPassword(password) {
    return bcrypt.compare(password, this.password);
  };

  // Check email and password. Return the user if valid, null if otherwise
  users.authenticate = async (email, password) => {
    const usersInstance = await users.findOne({ where: { email } });
    // No user exists with given email
    if (!usersInstance) {
      return null;
    }
    // Given password is incorrect
    if (!(await usersInstance.checkPassword(password))) {
      return null;
    }
    // Return the user object
    return usersInstance;
  };

  return users;
};
