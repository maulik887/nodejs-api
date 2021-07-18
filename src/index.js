const app = require('./app');
const config = require('./config/config');
const logger = require('./config/logger');

let server;
server = app.listen(config.port, () => {
	logger.debug(`Listening to port ${config.port}`);
});

const exitHandler = () => {
	if (server) {
		server.close(() => {
			logger.debug('Server closed');
			process.exit(1);
		});
	} else {
		process.exit(1);
	}
};

const unexpectedErrorHandler = (error) => {
	logger.error(error);
	exitHandler();
};

process.on('uncaughtException', unexpectedErrorHandler);
process.on('unhandledRejection', unexpectedErrorHandler);

process.on('SIGTERM', () => {
	logger.debug('SIGTERM received');
	if (server) {
		server.close();
	}
});
