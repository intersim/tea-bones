'use strict';

const db = require('APP/db')
const Tea = require('teas')

module.exports = require('express').Router()
	.get('/', (req, res, next) => 
		Tea.findAll()
		.then(teas => res.json(teas))
		.catch(next)
	)