/* eslint-disable linebreak-style */
const winston = require('winston');

function getLogger(module) {
  const modulePath = module.filename.split('\\').slice(-2).join('\\');

  return winston.createLogger({
    transports: [
      new winston.transports.Console({
        format: winston.format.combine(
          winston.format.colorize(),
          winston.format.label({ label: modulePath }),
          winston.format.simple(),
        ),
      }),
    ],
  });
}

module.exports = getLogger;
