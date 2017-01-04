'use strict'

const Sequelize = require('sequelize')
const db = require('APP/db')

const Tea = db.define('teas', {
  title: Sequelize.STRING,
  description: Sequelize.TEXT,
  price: Sequelize.INTEGER,
  photoUrl: Sequelize.STRING,
  inventory: Sequelize.INTEGER,
  category: Sequelize.ENUM('green', 'black', 'herbal'),
})

module.exports = Tea