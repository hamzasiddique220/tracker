// winston init
const winston = require('winston');
const logConfiguration = {
  'transports': [
      new winston.transports.Console()
  ]
}
exports.logger = winston.createLogger(logConfiguration);