import cors from "cors";
import express, { Application, RequestHandler } from "express";
import config from "./config";
import logger from "./utils/logger";
import routes from "./api";

const app: Application = express();
app.disable("x-powered-by");

app.use(express.json({ limit: "6mb" }) as RequestHandler);
app.use(
  cors({
    origin(_origin, callback) {
      callback(null, true);
    },
  })
);

app.use("/v1", routes());

app.listen(config.port, () => {
  logger.info(`App is listening on http://localhost:${config.port}`);
});
