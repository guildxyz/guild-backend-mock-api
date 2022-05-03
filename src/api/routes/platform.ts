import { Router } from "express";
import * as platformController from "../../controllers/platformController";
import validators from "../validators";

const router: Router = Router();

export default (app: Router) => {
  app.use("/platform", router);

  router.get(
    "/guild/:platformName/:platformSpecificGuildId",
    platformController.getGuild
  );

  router.get("/guild/:platformName", platformController.getGuilds);

  router.get(
    "/guild/access/:platformName/:platformSpecificGuildId/:platformUserId",
    platformController.access
  );

  router.get(
    "/guild/member/:platformName/:platformSpecificGuildId/:platformUserId",
    platformController.member
  );

  router.post(
    "/user/join",
    [
      validators.bodyStringLengthValidator("platformName", 1),
      validators.bodyStringLengthValidator("platformSpecificGuildId", 1),
      validators.bodyStringLengthValidator("platformUserId", 1),
    ],
    platformController.join
  );

  router.post(
    "/user/leave",
    [
      validators.bodyStringLengthValidator("platformName", 1),
      validators.bodyStringLengthValidator("platformSpecificGuildId", 1),
      validators.bodyStringLengthValidator("platformUserId", 1),
    ],
    platformController.leave
  );

  router.get(
    "/user/status/:platformName/:platformSpecificGuildId/:platformUserId",
    platformController.status
  );

  router.post(
    "/user/connect",
    [validators.bodyStringLengthValidator("platformUserId", 1)],
    platformController.connect
  );

  router.get(
    "/user/membership/:platformName/:platformUserId",
    platformController.membership
  );
};
