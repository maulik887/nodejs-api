const winston = require('winston');
const config = require('./config');

const enumerateErrorFormat = winston.format((info) => {
	if (info instanceof Error) {
		Object.assign(info, { message: info.stack });
	}
	return info;
});

const logger = winston.createLogger({
	level: config.log_level,
	format: winston.format.combine(
		enumerateErrorFormat(),
		config.env === 'development' ? winston.format.colorize() : winston.format.uncolorize(),
		winston.format.splat(),
		winston.format.timestamp(),
		winston.format.printf(({ level, message, timestamp }) => `${timestamp} ${level}: ${message}`)
	),
	transports: [
		new winston.transports.Console({
			stderrLevels: ['error']
		}),
	],
});

module.exports = logger;
