import { Router } from "express";
import { body } from "express-validator";
import validators from "../validators";
import * as userController from "../../controllers/userController";

const router: Router = Router();

export default (app: Router) => {
  app.use("/user", router);

  router.get(
    "/membership/:address",
    validators.paramTrimmer("address"),
    userController.getUserMemberships
  );

  router.post(
    "/join",
    validators.authentication(),
    [
      body("payload.platform").isIn(["DISCORD", "TELEGRAM"]).optional(),
      validators.bodyIdValidator("payload.guildId"),
    ],
    userController.join
  );
};
