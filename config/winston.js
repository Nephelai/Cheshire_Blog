var moment = require('moment'),
    fs = require('fs');
const logDir = '/log';

if (!fs.existsSync(logDir)) fs.mkdirSync(logDir);

const { createLogger, format, transports } = require('winston');
const { combine, timestamp, printf } = format;

const myFormat = printf( function(_log) {
    return `{"level" : "${_log.level}", "message" : "${_log.message}", "time" : "${_log.timestamp}"}`;
});

module.exports = function () {
    const logger = createLogger({
        format: combine(
            timestamp({ format: moment().format('HH:mm:ss') }),
            myFormat
        ),
        transports: [
            new transports.Console(),
            new (require('winston-daily-rotate-file'))({
                filename: 'log/%DATE%.log',
                datePattern: moment().format('YYYY-MM-DD')
            })
        ]
    });

    return logger;
};