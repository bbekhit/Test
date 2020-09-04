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


// examples: 
log.error(error, "Error initializing Cassandra: "); 
log.error("Error initializing Cassandra: " + error); 

let raw = {
  name:"Bo",
  execution_id: 123,
  test_id: 333
}
log.info("Extracting: %s for executionId: %s and testId: %s", raw.name, raw.execution_id, raw.test_id);

log.info(`process.on ${errType}`)

log.info("IndexIds " + (indexIds == null ? "null" : indexIds.length) +  " for query " + JSON.stringify(query));