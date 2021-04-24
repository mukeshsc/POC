const connection = require('../lib/db/db');
const {
  DataTypes
} = require('sequelize');

const User = connection.define('users', {
    email: {
      type: DataTypes.STRING,
      defaultValue: null
    },
    name: {
      type: DataTypes.STRING,
      defaultValue: null
    },
    password: {
      type: DataTypes.STRING,
      defaultValue: null
    },
    mobile: {
      type: DataTypes.STRING,
      defaultValue: null
    },
    DOB: {
      type: DataTypes.STRING,
      defaultValue: null
    },
    country: {
      type: DataTypes.STRING,
      defaultValue: null
    },
    status: {
      type: DataTypes.INTEGER,
      defaultValue: 0
    },
    role: {
      type: DataTypes.INTEGER,
      defaultValue: 2
    },
    facebookId: {
      type: DataTypes.STRING,
      defaultValue: null
    },
    googleId: {
      type: DataTypes.STRING,
      defaultValue: null
    },
    otpToken: {
      type: DataTypes.STRING,
      defaultValue: null
    },
    expDate: {
      type: DataTypes.STRING,
      defaultValue: null
    },
  })
  module.exports = User;