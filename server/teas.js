'use strict';

const db = require('APP/db')
const Tea = require('APP/db/models').Tea

module.exports = require('express').Router()
	.get('/', (req, res, next) => 
		Tea.findAll()
		.then(teas => res.json(teas))
		.catch(next)
	)