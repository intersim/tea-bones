'use strict';

const epilogue = require('./epilogue')
const db = require('APP/db')

const customTeaRoutes = require('express').Router()

module.exports = customTeaRoutes

const teas = epilogue.resource({
	model: db.model('teas'),
	endpoints: ['/teas', '/teas/:id']
})