// eslint-disable-next-line import/no-extraneous-dependencies
import dotenv from "dotenv";

process.env.NODE_ENV = process.env.NODE_ENV || "development";
if (process.env.NODE_ENV === "development") {
  dotenv.config();
}

export default {
  /**
   * Port used by agora-backend
   */
  port: process.env.PORT || 8989,
};
