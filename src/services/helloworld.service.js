const httpStatus = require('http-status');
const { HelloWorld } = require('../models');
const logger = require('../config/logger');

/**
 * Get hello world api
 * @returns {HelloWorld}
 */
const helloworld = (asHtml) => {
	const helloWorld = HelloWorld.createInstance("Hello, World");
	return asHtml ? HelloWorld.toHTML(helloWorld) : helloWorld;
};

module.exports = {
	helloworld
};
