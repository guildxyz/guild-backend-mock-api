import { Router } from "express";
import guild from "./routes/guild";
import role from "./routes/role";
import user from "./routes/user";
import platform from "./routes/platform";

export default () => {
  const app = Router();

  guild(app);
  role(app);
  user(app);
  platform(app);

  return app;
};
