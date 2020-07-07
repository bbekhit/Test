const pino = require("pino");
const expressPino = require("express-pino-logger");

const logger = pino({
  level: process.env.LOG_LEVEL || "info",
  prettyPrint: {
    colorize: true,
    translateTime: true,
    errorLikeObjectKeys: ["err", "error", "Error"],
    levelFirst: true,
    errorProps: "*",
    messageKey: "msg",
    timestampKey: "time",
    ignore: 'pid,hostname'
  },
redact: ['res.headers','req.headers']
});
const expressLogger = expressPino({ logger });

module.exports = { logger, expressLogger };



const { logger, expressLogger } = require('./logger');
app.use(expressLogger)