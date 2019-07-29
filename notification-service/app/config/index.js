const express = require('express');
const morgan = require('morgan');

const db = require('./db');

module.exports = async app => {
	await db();

	app.use(express.json());

	app.use(
		morgan(':method :url :status :res[content-length] - :response-time ms')
	);

	await require('../index')(app);

	console.log('Middlewares applyed');
};
