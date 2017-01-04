'use strict';

// Require our models. Running each module registers the model into sequelize
// so any other part of the application could call sequelize.model('User')
// to get access to the User model.

const User = require('./user')

// Product...
const Tea = require('./tea')

// Also need Orders and Reviews

module.exports = {User, Tea}
