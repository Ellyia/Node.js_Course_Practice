const { DataTypes } = require('sequelize');
const sequelize = require('../database');

const User = sequelize.define('User', {
  // Here will be user model attributes (e.g., name, email, password)
});

module.exports = User;