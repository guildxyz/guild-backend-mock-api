import { createLogger, format, transports } from "winston";

const { printf, combine, colorize, timestamp, errors } = format;

const devLogFormat = printf((log) => {
  let msg = `${log.timestamp} ${log.level}: ${log.message}`;
  if (log.meta) {
    const metaToLog = { ...log.meta };
    Object.keys(metaToLog).forEach((k) => {
      if (
        metaToLog[k]?.length > 10 ||
        (k === "accesses" && metaToLog.accesses[0]?.users?.length > 10)
      ) {
        metaToLog[k] = `data hided from ${k}`;
      }
    });
    msg += ` - ${JSON.stringify(metaToLog)}`;
  }
  if (log.stack) {
    msg += log.stack;
  }
  return msg;
});

const logger = createLogger({
  level: "debug",
  format: combine(
    colorize(),
    timestamp({ format: "YYYY-MM-DD HH:mm:ss" }),
    errors({ stack: true }),
    devLogFormat
  ),
  transports: [new transports.Console()],
});

export default logger;
