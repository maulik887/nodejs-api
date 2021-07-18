const httpStatus = require('http-status');
const ApiError = require('../utils/ApiError');
const catchAsync = require('../utils/catchAsync');
const { helloworldService } = require('../services');
const logger = require('../config/logger');

const getHelloWorld = catchAsync(async (req, res) => {
	// Fetch the data by inspecting request header
	// Return json response if Accept header is set to application/json
	// Return html response otherwise
	asHtml = true;
	if (req.get("Accept") === "application/json") {
		res.setHeader('Content-Type', 'application/json')
		asHtml = false;
	}
	
	// get the data
	var helloWorld = helloworldService.helloworld(asHtml);
	res.status(httpStatus.OK).send(helloWorld);
});

const postHelloWorld = catchAsync(async (req, res) => {
	// Fetch the data without inspecting request header
	var helloWorld = helloworldService.helloworld(true);
	res.status(httpStatus.OK).send(helloWorld);
});

module.exports = {
	getHelloWorld,
	postHelloWorld
};
